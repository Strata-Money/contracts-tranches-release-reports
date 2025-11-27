# Contracts Release v1.1.0

### Commits

- init (Tranches) exit Fees
[33ee800ca909710dc4202608cf0bd230e54e000b](https://github.com/Strata-Money/contracts-tranches/commit/33ee800ca909710dc4202608cf0bd230e54e000b)

- add (fees): TVL retention ratios
[b52abf06c73992e8fbc838ca8353c394baae29d1](https://github.com/Strata-Money/contracts-tranches/commit/b52abf06c73992e8fbc838ca8353c394baae29d1)


- add (fees): TVL retention ratios
[bbd9843e48a580ef6ace2188f830a569db4943ea](https://github.com/Strata-Money/contracts-tranches/commit/bbd9843e48a580ef6ace2188f830a569db4943ea)

- add (Reserve) distribute reserve to tranches
[bbd9843e48a580ef6ace2188f830a569db4943ea](https://github.com/Strata-Money/contracts-tranches/commit/bbd9843e48a580ef6ace2188f830a569db4943ea)

- add (Tranche Vault) preview* and max* methods for meta tokens
 [ef6dbfd0b6abe61cc7364341a4894b72620ba8f2](https://github.com/Strata-Money/contracts-tranches/commit/ef6dbfd0b6abe61cc7364341a4894b72620ba8f2)

- change (license): BUSL-1.1
[8b25c26c23641991a342c60749a8039e1de09ef7](https://github.com/Strata-Money/contracts-tranches/commit/8b25c26c23641991a342c60749a8039e1de09ef7)

- init (TwoStepConfigManager) 2-step fee-setter
[8eec77791ff01d2735f2c62cfc1502daa2b7904f](https://github.com/Strata-Money/contracts-tranches/commit/8eec77791ff01d2735f2c62cfc1502daa2b7904f)


### Changes

The final diff for folders `contracts/tranches` and `contracts/governance`: [`diff.patch`](./diff.patch)


### ✨ New Features

1. Exit Fee Support for Tranche Vaults

The Junior and Senior ERC-4626 tranches now support configurable exit fees. When users withdraw or redeem, the protocol can charge an exit fee that is partially routed to the treasury and partially recycled back into the vault to increase yield for remaining depositors.

2. Two-Step Configuration Flow

Exit fees (and future configurable parameters) are now managed through a secure 2-Step-Configuration process:

Proposal Phase - A pending configuration is created and an on-chain event is emitted, allowing off-chain services, UIs, and governance processes to track scheduled changes.

Execution Phase - After the mandatory delay, the proposed configuration can be executed on-chain, finalizing the update.

This ensures transparency, safety, and predictable governance of critical economic parameters.


#### Upgrade Transaction


https://app.safe.global/transactions/tx?safe=eth:0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50&id=multisig_0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50_0xc58b2266a00939f9280089d53787bf3f07a5558be2dc82ef87866761a36b1083



-----


The transaction is the Timelock Batch Operation submitting the following transactions:


#### Transaction: #1
To:

[`0xcAb791D0D44eBaC17378fF2AF6356c012F15c9e6`](https://etherscan.io/address/0xcAb791D0D44eBaC17378fF2AF6356c012F15c9e6) **USDeCDOProxyAdmin**

Data:

```h
0x9623609d000000000000000000000000908b3921aae4fc17191d382bb61020f2ee6c0e20000000000000000000000000b3d4f2c2123f8c3ca85ae7a6d48aa2ef049c79ba00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall
Parameters:
  proxy: 0x908B3921aaE4fC17191D382BB61020f2Ee6C0e20
  implementation: 0xb3d4f2C2123f8C3CA85aE7A6D48aA2ef049c79bA
  data: 0x
```

- Old implementation: `0x30faeFa3c8022963df7538AbEB8aF8De1187F02a`
- New implementation: `0xb3d4f2C2123f8C3CA85aE7A6D48aA2ef049c79bA`
- Etherscan-Diff Old vs New: [./contracts/USDeCDO.patch](./contracts/USDeCDO.patch)
- Git-Diff New vs `8eec77791ff01d2735f2c62cfc1502daa2b7904f`: [./contracts/USDeCDO-git.patch](./contracts/USDeCDO-git.patch)

----

#### Transaction: #2
To:

[`0xeD6c7b379F73DF0618406d263b13b2386E398166`](https://etherscan.io/address/0xeD6c7b379F73DF0618406d263b13b2386E398166) **ERC20CooldownProxyAdmin**

Data:

```
0x9623609d000000000000000000000000d6dad17d025cddded27305aebab8b277996a6faf00000000000000000000000073dfde427d6f9271a451dd01415c8f26e629221900000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0xd6dAD17d025cDdDEd27305aEbAB8b277996A6fAF
  implementation: 0x73dFDe427d6F9271a451DD01415c8f26E6292219
  data: 0x

```

- Old implementation: `0xE93b75B5f3da8c4f48DcD3cF84cd7FB001e938F8`
- New implementation: `0x73dFDe427d6F9271a451DD01415c8f26E6292219`
- Etherscan-Diff Old vs New: [./contracts/ERC20Cooldown.patch](./contracts/ERC20Cooldown.patch)
- Git-Diff New vs `8eec77791ff01d2735f2c62cfc1502daa2b7904f`: [./contracts/ERC20Cooldown-git.patch](./contracts/ERC20Cooldown-git.patch)

----

#### Transaction: #3
To:

0x4b47433703687Cc49ddc61b2D8Ae1AdFACd55Bcd **UnstakeCooldownProxyAdmin**

Data:

```h
0x9623609d000000000000000000000000735eddf50ca2371aa48466469c742e684c610f74000000000000000000000000d2843c620d188796b031d805fd869b597f6f345100000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

Function:

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0x735edDF50Ca2371aa48466469C742e684c610F74
  implementation: 0xd2843c620D188796B031d805Fd869B597f6f3451
  data: 0x
```


- Old implementation: `0xC4eAa82924883A58E39B4Dfd6E60e81ee45d419C`
- New implementation: `0xd2843c620D188796B031d805Fd869B597f6f3451`
- Etherscan-Diff Old vs New: [./contracts/UnstakeCooldown.patch](./contracts/UnstakeCooldown.patch)
- Git-Diff New vs `8eec77791ff01d2735f2c62cfc1502daa2b7904f`: [./contracts/UnstakeCooldown-git.patch](./contracts/UnstakeCooldown-git.patch)

----

#### Transaction: #4

To:

`0x32d0d70a8Da4c0C2f354a986fD3738AFe92542F7` **SUSDeStrategyProxyAdmin**

Data:

```h
0x9623609d000000000000000000000000dbf4fb6c310c1c85d0b41b5dbca06096f2e7099f0000000000000000000000002b9796606c8480312a572742c00f606ef4adb10700000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0xdbf4FB6C310C1C85D0b41B5DbCA06096F2E7099F
  implementation: 0x2B9796606c8480312a572742C00F606ef4ADB107
  data: 0x
```


- Old implementation: `0x0dA391431cC9760005c113c1A2dcb9D67878F213`
- New implementation: `0x2B9796606c8480312a572742C00F606ef4ADB107`
- Etherscan-Diff Old vs New: [./contracts/SUSDeStrategy.patch](./contracts/SUSDeStrategy.patch)
- Git-Diff New vs `8eec77791ff01d2735f2c62cfc1502daa2b7904f`: [./contracts/SUSDeStrategy-git.patch](./contracts/SUSDeStrategy-git.patch)


----

#### Transaction: #5

To:

`0xE60442F1A12Ec03e22dDd3Bc5FEA62B7bd89d6df` **sUSDeAprFeedsProxyAdmin**


Data:
```h
0x9623609d0000000000000000000000002bb416614d740e5313aa64a0e3e419b39e800ec200000000000000000000000074188a2a8a5177dd217a8149f1fb1370240fbadc00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0x2bb416614D740E5313aA64A0E3e419B39e800EC2
  implementation: 0x74188a2a8A5177dD217a8149F1fB1370240FBadc
  data: 0x
```

- Old implementation: `0xf158A4f4a01ac21Ddd2B09aBd2232649526Ef6A2`
- New implementation: `0x74188a2a8A5177dD217a8149F1fB1370240FBadc`
- Etherscan-Diff Old vs New: [./contracts/sUSDeAprFeeds.patch](./contracts/sUSDeAprFeeds.patch)
- Git-Diff New vs `8eec77791ff01d2735f2c62cfc1502daa2b7904f`: [./contracts/sUSDeAprFeeds-git.patch](./contracts/sUSDeAprFeeds-git.patch)



----

#### Transaction: #6

To:

`0x25A733feBA393a48C07A76441777324B471d212E` **USDeAccountingProxyAdmin**

Data:

```h
0x9623609d000000000000000000000000a436c5dd1ba62c55d112c10cd10e988bb33551020000000000000000000000004e9f8d06aaed67ac4aaa52d9175c842e0f8e8da200000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0xa436c5Dd1Ba62c55D112C10cd10E988bb3355102
  implementation: 0x4e9f8D06aaed67ac4AaA52D9175C842e0F8e8DA2
  data: 0x
```

- Old implementation: `0xC89951cC4C03927FF11a0E47806E2Ac3aa7734f3`
- New implementation: `0x4e9f8D06aaed67ac4AaA52D9175C842e0F8e8DA2`
- Etherscan-Diff Old vs New: [./contracts/USDeAccounting.patch](./contracts/USDeAccounting.patch)
- Git-Diff New vs `8eec77791ff01d2735f2c62cfc1502daa2b7904f`: [./contracts/USDeAccounting-git.patch](./contracts/USDeAccounting-git.patch)




----

#### Transaction: #7

To:

`0xE60442F1A12Ec03e22dDd3Bc5FEA62B7bd89d6df` **sUSDeAprFeedsProxyAdmin**


Data:
```h
0x9623609d0000000000000000000000002bb416614d740e5313aa64a0e3e419b39e800ec200000000000000000000000074188a2a8a5177dd217a8149f1fb1370240fbadc00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0x2bb416614D740E5313aA64A0E3e419B39e800EC2
  implementation: 0x74188a2a8A5177dD217a8149F1fB1370240FBadc
  data: 0x
```

- Old implementation: `0xf158A4f4a01ac21Ddd2B09aBd2232649526Ef6A2`
- New implementation: `0x74188a2a8A5177dD217a8149F1fB1370240FBadc`
- Etherscan-Diff Old vs New: [./contracts/sUSDeAprFeeds.patch](./contracts/sUSDeAprFeeds.patch)
- Git-Diff New vs `8eec77791ff01d2735f2c62cfc1502daa2b7904f`: [./contracts/sUSDeAprFeeds-git.patch](./contracts/sUSDeAprFeeds-git.patch)


----

#### Transaction: #8

To:

`0x89d2573471dc0bF81C7c553FFFC1e31cE9e75Bf1` **USDeJrtProxyAdmin**

Data:

```h
0x9623609d000000000000000000000000c58d044404d8b14e953c115e67823784dea53d8f000000000000000000000000e91869f96806b480dd61d57e17919068d35ac09c00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0xC58D044404d8B14e953C115E67823784dEA53d8F
  implementation: 0xe91869F96806b480dd61d57E17919068d35AC09C
  data: 0x
```


- Old implementation: `0xdc3190a059A1DcF4C17EC1Cb9CC8c4EAcd0BC297`
- New implementation: `0xe91869F96806b480dd61d57E17919068d35AC09C`
- Etherscan-Diff Old vs New: [./contracts/USDeJrt.patch](./contracts/USDeJrt.patch)
- Git-Diff New vs `8eec77791ff01d2735f2c62cfc1502daa2b7904f`: [./contracts/USDeJrt-git.patch](./contracts/USDeJrt-git.patch)



----

#### Transaction: #9

To: `0x30A17d6bcBDBF1579d6fBBA453aCf776D01fbb50` **USDeSrtProxyAdmin**

Data:

```h
0x9623609d0000000000000000000000003d7d6fdf07ee548b939a80edbc9b2256d0cdc003000000000000000000000000e894055ca1c73648927e225f3ca38ed48e30210b00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0x3d7d6fdf07EE548B939A80edbc9B2256d0cdc003
  implementation: 0xE894055CA1c73648927e225f3Ca38Ed48E30210b
  data: 0x
```

- Old implementation: `0x90f806Df8a024C1474425f8C4FcA4F3301DcbCdB`
- New implementation: `0xE894055CA1c73648927e225f3Ca38Ed48E30210b`
- Etherscan-Diff Old vs New: [./contracts/USDeSrt.patch](./contracts/USDeSrt.patch)
- Git-Diff New vs `8eec77791ff01d2735f2c62cfc1502daa2b7904f`: [./contracts/USDeSrt-git.patch](./contracts/USDeSrt-git.patch)



----

#### Transaction: #10

To: `0xEBAe177c9DB77ACf748C047a860c93Fb41Bc9767` **TrancheDepositorV2ProxyAdmin**

Data:

```h
0x9623609d00000000000000000000000050e850641f43f65bf8fb3a7d0cf082a1d252f47e0000000000000000000000006e5a69bfdce6b521df6b2d0d3c49610c8f26b20b00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000
```

```yml
Function: upgradeAndCall(address,address,bytes)
Parameters:
  proxy: 0x50E850641F43F65BF8fB3a7d0CF082a1D252F47e
  implementation: 0x6e5a69BFDcE6b521DF6b2D0d3c49610C8f26B20b
  data: 0x
```

- Old implementation: `0x60f130c9d1533505c3931183693D3d91060B4F1F`
- New implementation: `0x6e5a69BFDcE6b521DF6b2D0d3c49610C8f26B20b`
- Etherscan-Diff Old vs New: [./contracts/TrancheDepositorV2.patch](./contracts/TrancheDepositorV2.patch)
- Git-Diff New vs `8eec77791ff01d2735f2c62cfc1502daa2b7904f`: [./contracts/TrancheDepositorV2-git.patch](./contracts/TrancheDepositorV2-git.patch)


----

#### Transaction: #11


To: `0x908B3921aaE4fC17191D382BB61020f2Ee6C0e20` **USDeCDOProxy**

Data:

```h
0x593ec0770000000000000000000000000f93bac77c3ddd1341d3ecc388c5f8a180818994
```

```yml
Function: setTwoStepConfigManager(address twoStepConfigManager)
Parameters:
  twoStepConfigManager_: 0x0f93bAC77c3dDD1341d3Ecc388c5F8A180818994
```


----

#### Transaction: #12

To: `0x1d19E18ECaC4ef332a0d5d6Aa3a0f0f772605f60` **AccessControlManager**

Data:

```h
0x2f2ff15de1014dbbc68ef747dfc64110b29e13ebcc98e4146563b6a60d5595f292d8fa40000000000000000000000000a27ca9292268ee0f0258b749f1d5740c9bb68b50
```

```yml
Function: grantRole
Parameters:
    role: '0xe1014dbbc68ef747dfc64110b29e13ebcc98e4146563b6a60d5595f292d8fa40',
    account: '0xA27cA9292268ee0f0258B749f1D5740c9Bb68B50'
```

- Role: `PROPOSER_CONFIG_ROLE`



### Implementation comparison methodology

```bash
# Install the contract - it fetches sources from Etherscan.

0xweb i <addressOldImpl> --chain eth --name contractv1
0xweb i <addressNewImpl> --chain eth --name contractv2

# Compare sources from the old vs the new implementation
git diff --no-index ./0xc/eth/contractv1/contractv1/contracts/ ./0xc/eth/contractv2/contractv2/contracts/ > contracts/contract.patch

# Compare the new implementation with the source in a submodule (latest commit)
# Compares only files that are modified or deleted

git diff --no-index --diff-filter=DM ./0xc/eth/contractv2/contractv2/contracts/ ./contracts-tranches/contracts/ > contracts/contractv2-git.patch
```


----
