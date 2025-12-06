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

*Status: pending*

Once the delay has passed, the scheduled exit fee configuration must be executed via the appropriate Timelock call.
