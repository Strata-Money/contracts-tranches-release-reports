# Post-Deployment Configuration

This document outlines the steps required after the upgrade to transition the protocol into the final **v1.1.0** state.

---

## 1. Configure Exit Fees

### 1.1 Schedule Fee Update

Set the pending exit fees in the **TwoStepConfigManager** contract:
**[0x0f93bAC77c3dDD1341d3Ecc388c5F8A180818994](https://etherscan.io/address/0x0f93bAC77c3dDD1341d3Ecc388c5F8A180818994)**

Once the fee change has been scheduled and the required delay has passed, the update can be applied by an address with the `UPDATER_STRAT_CONFIG_ROLE`.

> ℹ️
> When scheduling a fee change, the following event is emitted, enabling off-chain observers to track pending fee updates:

```sol
/// @notice Emitted when a new exit fee change is scheduled.
event ExitFeeChangeScheduled(
    uint256 feeJrt,
    uint256 feeSrt,
    uint64 executeAfter
);
```

#### Safe Proposal

🔒 [https://app.safe.global/transactions/tx?safe=eth:0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50&id=multisig_0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50_0x582bca61f0150ff686df9c8a124da3d24e7367e0b40c435c17dcf9abf5962b7d](https://app.safe.global/transactions/tx?safe=eth:0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50&id=multisig_0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50_0x582bca61f0150ff686df9c8a124da3d24e7367e0b40c435c17dcf9abf5962b7d)

✅ Transaction: https://etherscan.io/tx/0x7c781459eeed959ec2b0927b1d5fb7f85a8fe4c9ef6c3295e0baa00b68198fe8

#### Target Contract

To: **TwoStepConfigManager**
[https://etherscan.io/address/0x0f93bAC77c3dDD1341d3Ecc388c5F8A180818994](https://etherscan.io/address/0x0f93bAC77c3dDD1341d3Ecc388c5F8A180818994)

#### Call Data

```h
0x2ee65f2900000000000000000000000000000000000000000000000000038d7ea4c680000000000000000000000000000000000000000000000000000000e35fa931a000000000000000000000000000000000000000000000000000000000000002a300
```

#### Function

```yml
Function: scheduleExitFeeChange
Parameters:
  feeJrt: 1000000000000000 # 0.001
  feeSrt: 250000000000000  # 0.00025
  delay : 172800           # 2 days
```

---

## 2. Execute Fee Update, Cooldowns and Fee Retention


Once the delay has passed, the scheduled exit fee configuration must be executed via the appropriate Timelock call.


#### Safe Proposal

🔒 https://app.safe.global/transactions/tx?safe=eth:0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50&id=multisig_0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50_0xbf4028db48532badaf26f366eac4b8f13dd544d7a6a7a30aa63c35ebff87a7f3


#### Timelock Schedule

⌛ https://etherscan.io/tx/0x78a3cb11e966eee50bc82d31d307a7a4a49d8cf4724fe52ff10ef65fc80ad559

#### Timelock Execution

✅ https://etherscan.io/tx/0xb887bdbfaeaf4090622c3ea0b4cd9708bfda2357106102407e0e7b2902fe6643


The configuration consists of 4 transactions:

1. Grant `UPDATER_STRAT_CONFIG_ROLE` to Strata's 48h Timelock, so it can apply the pending fees.
2. Configure the retention parameters, so that 100% goes back to TVLs and 0% to reserves.
3. Apply the pending fees.
4. Disable cooldowns for sUSDe in both tranches, Senior and Junior.

## Transaction #1:

To:  **AccessControlManager** [0x1d19E18ECaC4ef332a0d5d6Aa3a0f0f772605f60](https://etherscan.io/address/0x1d19E18ECaC4ef332a0d5d6Aa3a0f0f772605f60)

Data:

```h
0x2f2ff15db93bf808defb265d057ca8bf7be1ab7ec2ab3c0b320ee05f77fe3cb0e08fbff4000000000000000000000000b2a3cf69c97afd4de7882e5fee120e4efc77b706
```

```yml
Function: grantRole(bytes32,address)
Parameters:
  role: 0xb93bf808defb265d057ca8bf7be1ab7ec2ab3c0b320ee05f77fe3cb0e08fbff4
  account: 0xB2A3CF69C97AFD4dE7882E5fEE120e4efC77B706
```

> The role can be checked by reading [StrataCDO::UPDATER_STRAT_CONFIG_ROLE()](https://etherscan.io/address/0x0f93bAC77c3dDD1341d3Ecc388c5F8A180818994#readProxyContract) function.

## Transaction #2

To:  **Accounting** [0xa436c5Dd1Ba62c55D112C10cd10E988bb3355102](https://etherscan.io/address/0xa436c5Dd1Ba62c55D112C10cd10E988bb3355102)

Data:

```h
0xb3f56b100000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000de0b6b3a7640000
```

```yml
Function: setFeeRetentionBps(uint256,uint256)
Parameters:
  jrtRetentionBps: 1000000000000000000 # 1e18 === 100%
  srtRetentionBps: 1000000000000000000 # 1e18 === 100%
```


## Transaction #3

To:  **TwoStepConfigManager** [0x0f93bAC77c3dDD1341d3Ecc388c5F8A180818994](https://etherscan.io/address/0x0f93bAC77c3dDD1341d3Ecc388c5F8A180818994)

Data:

```h
0x1ea99108
```

```yml
Function: executeExitFeeChange()
```


## Transaction #4

To:  **sUSDeStrategy** [0xdbf4FB6C310C1C85D0b41B5DbCA06096F2E7099F](https://etherscan.io/address/0xdbf4FB6C310C1C85D0b41B5DbCA06096F2E7099F)

Data:

```h
0xcd123d4100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
```

```yml
Function: setCooldowns(uint256,uint256)
Parameters:
  sUSDeCooldownJrt_: 0
  sUSDeCooldownSrt_: 0
```
