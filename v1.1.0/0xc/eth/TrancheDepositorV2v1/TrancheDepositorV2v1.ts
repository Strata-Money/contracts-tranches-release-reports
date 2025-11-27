/**
 *  AUTO-Generated Class: 2025-11-27 18:29
 *  Implementation: https://etherscan.io/address/0x60f130c9d1533505c3931183693D3d91060B4F1F#code
 */
import di from 'a-di';
import { TAddress } from 'dequanto/models/TAddress';
import { TAccount } from 'dequanto/models/TAccount';
import { TBufferLike } from 'dequanto/models/TBufferLike';
import { ClientEventsStream, TClientEventsStreamData } from 'dequanto/clients/ClientEventsStream';
import { ContractBase } from 'dequanto/contracts/ContractBase';
import { ContractBaseUtils } from 'dequanto/contracts/utils/ContractBaseUtils';
import { ContractStorageReaderBase } from 'dequanto/contracts/ContractStorageReaderBase';
import { TxWriter } from 'dequanto/txs/TxWriter';
import { ITxLogItem } from 'dequanto/txs/receipt/ITxLogItem';
import { Web3Client } from 'dequanto/clients/Web3Client';
import { IBlockchainExplorer } from 'dequanto/explorer/IBlockchainExplorer';
import { SubjectStream } from 'dequanto/class/SubjectStream';


import type { ContractWriter } from 'dequanto/contracts/ContractWriter';
import type { TAbiItem } from 'dequanto/types/TAbi';
import type { TEth } from 'dequanto/models/TEth';
import type { TOverrideReturns } from 'dequanto/utils/types';


import { Evmscan } from 'dequanto/explorer/Evmscan';
import { EvmWeb3Client } from 'dequanto/clients/EvmWeb3Client';

export namespace TrancheDepositorV2v1Errors {
    export interface AccessControlUnauthorizedAccount {
        type: 'AccessControlUnauthorizedAccount'
        params: {
            account: TAddress
            neededRole: TEth.Hex
        }
    }
    export interface InvalidAsset {
        type: 'InvalidAsset'
        params: {
            vault: TAddress
            asset: TAddress
        }
    }
    export interface InvalidInitialization {
        type: 'InvalidInitialization'
        params: {
        }
    }
    export interface MintedSharesBelowMin {
        type: 'MintedSharesBelowMin'
        params: {
            shares: bigint
            minShares: bigint
        }
    }
    export interface NotInitializing {
        type: 'NotInitializing'
        params: {
        }
    }
    export interface OwnableInvalidOwner {
        type: 'OwnableInvalidOwner'
        params: {
            owner: TAddress
        }
    }
    export interface OwnableUnauthorizedAccount {
        type: 'OwnableUnauthorizedAccount'
        params: {
            account: TAddress
        }
    }
    export interface ReentrancyGuardReentrantCall {
        type: 'ReentrancyGuardReentrantCall'
        params: {
        }
    }
    export interface SafeERC20FailedOperation {
        type: 'SafeERC20FailedOperation'
        params: {
            token: TAddress
        }
    }
    export interface Unauthorized {
        type: 'Unauthorized'
        params: {
            sender: TAddress
            calledContract: TAddress
            sel: TEth.Hex
        }
    }
    export interface ZeroAddress {
        type: 'ZeroAddress'
        params: {
        }
    }
    export type Error = AccessControlUnauthorizedAccount | InvalidAsset | InvalidInitialization | MintedSharesBelowMin | NotInitializing | OwnableInvalidOwner | OwnableUnauthorizedAccount | ReentrancyGuardReentrantCall | SafeERC20FailedOperation | Unauthorized | ZeroAddress
}

export class TrancheDepositorV2v1 extends ContractBase {
    constructor(
        public address: TEth.Address = '0x60f130c9d1533505c3931183693D3d91060B4F1F',
        public client: Web3Client = di.resolve(EvmWeb3Client, { platform: 'eth' }),
        public explorer: IBlockchainExplorer = di.resolve(Evmscan, { platform: 'eth' }),
    ) {
        super(address, client, explorer)

        this.storage = new TrancheDepositorV2v1StorageReader(this.address, this.client, this.explorer);
    }

    Types: TTrancheDepositorV2v1Types;

    $meta = {
        "class": "./0xc/eth/TrancheDepositorV2v1/TrancheDepositorV2v1.ts"
    }

    // 0x737b332d
    async COOLDOWN_WORKER_ROLE (): Promise<TEth.Hex> {
        return this.$read(this.$getAbiItem('function', 'COOLDOWN_WORKER_ROLE'));
    }

    // 0x26a4966f
    async DEPOSITOR_CONFIG_ROLE (): Promise<TEth.Hex> {
        return this.$read(this.$getAbiItem('function', 'DEPOSITOR_CONFIG_ROLE'));
    }

    // 0xe63ab1e9
    async PAUSER_ROLE (): Promise<TEth.Hex> {
        return this.$read(this.$getAbiItem('function', 'PAUSER_ROLE'));
    }

    // 0xc5f87257
    async RESERVE_MANAGER_ROLE (): Promise<TEth.Hex> {
        return this.$read(this.$getAbiItem('function', 'RESERVE_MANAGER_ROLE'));
    }

    // 0xfb2fa628
    async UPDATER_CDO_APR_ROLE (): Promise<TEth.Hex> {
        return this.$read(this.$getAbiItem('function', 'UPDATER_CDO_APR_ROLE'));
    }

    // 0x8f3cc657
    async UPDATER_FEED_ROLE (): Promise<TEth.Hex> {
        return this.$read(this.$getAbiItem('function', 'UPDATER_FEED_ROLE'));
    }

    // 0x668983ee
    async UPDATER_STRAT_CONFIG_ROLE (): Promise<TEth.Hex> {
        return this.$read(this.$getAbiItem('function', 'UPDATER_STRAT_CONFIG_ROLE'));
    }

    // 0x79ba5097
    async acceptOwnership (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'acceptOwnership'), sender);
    }

    // 0x7338ddcc
    async acm (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'acm'));
    }

    // 0xdb008bfe
    async addAutoWithdrawals (sender: TSender, tokens: TAddress[], statuses: boolean[]): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'addAutoWithdrawals'), sender, tokens, statuses);
    }

    // 0xff953bc4
    async addCdo (sender: TSender, cdo: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'addCdo'), sender, cdo);
    }

    // 0x806ff24b
    async addSwapInfo (sender: TSender, token: TAddress, swapInfo: { router: TAddress, fee: number, minimumReturnPercentage: number }): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'addSwapInfo'), sender, token, swapInfo);
    }

    // 0x4df99310
    async autoSwaps (sourceToken: TAddress): Promise<{ router: TAddress, fee: number, minimumReturnPercentage: number }> {
        return this.$read(this.$getAbiItem('function', 'autoSwaps'), sourceToken);
    }

    // 0xa8759fc0
    async autoWithdrawals (sourceVault: TAddress): Promise<boolean> {
        return this.$read(this.$getAbiItem('function', 'autoWithdrawals'), sourceVault);
    }

    // 0x59fbfafd
    async deposit (sender: TSender, vault: TAddress, asset: TAddress, amount: bigint, receiver: TAddress, params: { swapDeadline: bigint, swapAmountOutMinimum: bigint, swapTokenOut: TAddress, minShares: bigint }): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'deposit'), sender, vault, asset, amount, receiver, params);
    }

    // 0x2806cb78
    async depositWithPermit (sender: TSender, vault: TAddress, asset: TAddress, amount: bigint, receiver: TAddress, params: { swapDeadline: bigint, swapAmountOutMinimum: bigint, swapTokenOut: TAddress, minShares: bigint }, deadline: bigint, v: number, r: TEth.Hex, s: TEth.Hex): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'depositWithPermit'), sender, vault, asset, amount, receiver, params, deadline, v, r, s);
    }

    // 0x485cc955
    async initialize (sender: TSender, owner_: TAddress, acm_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'initialize'), sender, owner_, acm_);
    }

    // 0x8da5cb5b
    async owner (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'owner'));
    }

    // 0xe30c3978
    async pendingOwner (): Promise<TAddress> {
        return this.$read(this.$getAbiItem('function', 'pendingOwner'));
    }

    // 0x715018a6
    async renounceOwnership (sender: TSender, ): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'renounceOwnership'), sender);
    }

    // 0x0e32cb86
    async setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'setAccessControlManager'), sender, accessControlManager_);
    }

    // 0x56548065
    async tranches (tranche: TAddress, token: TAddress): Promise<boolean> {
        return this.$read(this.$getAbiItem('function', 'tranches'), tranche, token);
    }

    // 0xf2fde38b
    async transferOwnership (sender: TSender, newOwner: TAddress): Promise<TxWriter> {
        return this.$write(this.$getAbiItem('function', 'transferOwnership'), sender, newOwner);
    }

    $call () {
        return super.$call() as ITrancheDepositorV2v1TxCaller;
    }
    $signed (): TOverrideReturns<ITrancheDepositorV2v1TxCaller, Promise<{ signed: TEth.Hex, error?: Error & { data?: { type: string, params } } }>> {
        return super.$signed() as any;
    }
    $data (): ITrancheDepositorV2v1TxData {
        return super.$data() as ITrancheDepositorV2v1TxData;
    }
    $gas (): TOverrideReturns<ITrancheDepositorV2v1TxCaller, Promise<{ gas?: bigint, price?: bigint, error?: Error & { data?: { type: string, params } } }>> {
        return super.$gas() as any;
    }

    onTransaction <TMethod extends keyof TTrancheDepositorV2v1Types['Methods']> (method: TMethod, options: Parameters<ContractBase['$onTransaction']>[0]): SubjectStream<{
        tx: TEth.Tx
        block: TEth.Block<TEth.Hex>
        calldata: {
            method: TMethod
            arguments: TTrancheDepositorV2v1Types['Methods'][TMethod]['arguments']
        }
    }> {
        options ??= {};
        options.filter ??= {};
        options.filter.method = method;
        return <any> this.$onTransaction(options);
    }

    onLog (event: keyof TEvents, cb?: (event: TClientEventsStreamData) => void): ClientEventsStream<TClientEventsStreamData> {
        return this.$onLog(event, cb);
    }

    async getPastLogs <TEventName extends keyof TEvents> (
        events: TEventName[]
        , options?: TEventLogOptions<TEventParams<TEventName>>
    ): Promise<ITxLogItem<TEventParams<TEventName>, TEventName>[]>
    async getPastLogs <TEventName extends keyof TEvents> (
        event: TEventName
        , options?: TEventLogOptions<TEventParams<TEventName>>
    ): Promise<ITxLogItem<TEventParams<TEventName>, TEventName>[]>
    async getPastLogs (mix: any, options?): Promise<any> {
        return await super.getPastLogs(mix, options) as any;
    }

    onAutoWithdrawalsChanged (fn?: (event: TClientEventsStreamData<TEventArguments<'AutoWithdrawalsChanged'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'AutoWithdrawalsChanged'>>> {
        return this.$onLog('AutoWithdrawalsChanged', fn);
    }

    onCdoAdded (fn?: (event: TClientEventsStreamData<TEventArguments<'CdoAdded'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'CdoAdded'>>> {
        return this.$onLog('CdoAdded', fn);
    }

    onInitialized (fn?: (event: TClientEventsStreamData<TEventArguments<'Initialized'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'Initialized'>>> {
        return this.$onLog('Initialized', fn);
    }

    onNewAccessControlManager (fn?: (event: TClientEventsStreamData<TEventArguments<'NewAccessControlManager'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'NewAccessControlManager'>>> {
        return this.$onLog('NewAccessControlManager', fn);
    }

    onOwnershipTransferStarted (fn?: (event: TClientEventsStreamData<TEventArguments<'OwnershipTransferStarted'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'OwnershipTransferStarted'>>> {
        return this.$onLog('OwnershipTransferStarted', fn);
    }

    onOwnershipTransferred (fn?: (event: TClientEventsStreamData<TEventArguments<'OwnershipTransferred'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'OwnershipTransferred'>>> {
        return this.$onLog('OwnershipTransferred', fn);
    }

    onSwapInfoChanged (fn?: (event: TClientEventsStreamData<TEventArguments<'SwapInfoChanged'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'SwapInfoChanged'>>> {
        return this.$onLog('SwapInfoChanged', fn);
    }

    onTranchesAdded (fn?: (event: TClientEventsStreamData<TEventArguments<'TranchesAdded'>>) => void): ClientEventsStream<TClientEventsStreamData<TEventArguments<'TranchesAdded'>>> {
        return this.$onLog('TranchesAdded', fn);
    }

    extractLogsAutoWithdrawalsChanged (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'AutoWithdrawalsChanged'>>[] {
        let abi = this.$getAbiItem('event', 'AutoWithdrawalsChanged');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'AutoWithdrawalsChanged'>>[];
    }

    extractLogsCdoAdded (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'CdoAdded'>>[] {
        let abi = this.$getAbiItem('event', 'CdoAdded');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'CdoAdded'>>[];
    }

    extractLogsInitialized (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'Initialized'>>[] {
        let abi = this.$getAbiItem('event', 'Initialized');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'Initialized'>>[];
    }

    extractLogsNewAccessControlManager (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'NewAccessControlManager'>>[] {
        let abi = this.$getAbiItem('event', 'NewAccessControlManager');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'NewAccessControlManager'>>[];
    }

    extractLogsOwnershipTransferStarted (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'OwnershipTransferStarted'>>[] {
        let abi = this.$getAbiItem('event', 'OwnershipTransferStarted');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'OwnershipTransferStarted'>>[];
    }

    extractLogsOwnershipTransferred (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'OwnershipTransferred'>>[] {
        let abi = this.$getAbiItem('event', 'OwnershipTransferred');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'OwnershipTransferred'>>[];
    }

    extractLogsSwapInfoChanged (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'SwapInfoChanged'>>[] {
        let abi = this.$getAbiItem('event', 'SwapInfoChanged');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'SwapInfoChanged'>>[];
    }

    extractLogsTranchesAdded (tx: TEth.TxReceipt): ITxLogItem<TEventParams<'TranchesAdded'>>[] {
        let abi = this.$getAbiItem('event', 'TranchesAdded');
        return this.$extractLogs(tx, abi) as any as ITxLogItem<TEventParams<'TranchesAdded'>>[];
    }

    async getPastLogsAutoWithdrawalsChanged (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'AutoWithdrawalsChanged'>>[]> {
        return await this.$getPastLogsParsed('AutoWithdrawalsChanged', options) as any;
    }

    async getPastLogsCdoAdded (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'CdoAdded'>>[]> {
        return await this.$getPastLogsParsed('CdoAdded', options) as any;
    }

    async getPastLogsInitialized (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'Initialized'>>[]> {
        return await this.$getPastLogsParsed('Initialized', options) as any;
    }

    async getPastLogsNewAccessControlManager (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'NewAccessControlManager'>>[]> {
        return await this.$getPastLogsParsed('NewAccessControlManager', options) as any;
    }

    async getPastLogsOwnershipTransferStarted (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { previousOwner?: TAddress,newOwner?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'OwnershipTransferStarted'>>[]> {
        return await this.$getPastLogsParsed('OwnershipTransferStarted', options) as any;
    }

    async getPastLogsOwnershipTransferred (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { previousOwner?: TAddress,newOwner?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'OwnershipTransferred'>>[]> {
        return await this.$getPastLogsParsed('OwnershipTransferred', options) as any;
    }

    async getPastLogsSwapInfoChanged (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: { token?: TAddress }
    }): Promise<ITxLogItem<TEventParams<'SwapInfoChanged'>>[]> {
        return await this.$getPastLogsParsed('SwapInfoChanged', options) as any;
    }

    async getPastLogsTranchesAdded (options?: {
        fromBlock?: number | Date
        toBlock?: number | Date
        params?: {  }
    }): Promise<ITxLogItem<TEventParams<'TranchesAdded'>>[]> {
        return await this.$getPastLogsParsed('TranchesAdded', options) as any;
    }

    abi: TAbiItem[] = [{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32","name":"neededRole","type":"bytes32"}],"name":"AccessControlUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"address","name":"vault","type":"address"},{"internalType":"address","name":"asset","type":"address"}],"name":"InvalidAsset","type":"error"},{"inputs":[],"name":"InvalidInitialization","type":"error"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"minShares","type":"uint256"}],"name":"MintedSharesBelowMin","type":"error"},{"inputs":[],"name":"NotInitializing","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"calledContract","type":"address"},{"internalType":"bytes4","name":"sel","type":"bytes4"}],"name":"Unauthorized","type":"error"},{"inputs":[],"name":"ZeroAddress","type":"error"},{"anonymous":false,"inputs":[],"name":"AutoWithdrawalsChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"cdo","type":"address"}],"name":"CdoAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint64","name":"version","type":"uint64"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"accessControlManager","type":"address"}],"name":"NewAccessControlManager","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"}],"name":"SwapInfoChanged","type":"event"},{"anonymous":false,"inputs":[],"name":"TranchesAdded","type":"event"},{"inputs":[],"name":"COOLDOWN_WORKER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSITOR_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RESERVE_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_CDO_APR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_FEED_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATER_STRAT_CONFIG_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acm","outputs":[{"internalType":"contract IAccessControlManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"bool[]","name":"statuses","type":"bool[]"}],"name":"addAutoWithdrawals","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IStrataCDO","name":"cdo","type":"address"}],"name":"addCdo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"components":[{"internalType":"address","name":"router","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"uint24","name":"minimumReturnPercentage","type":"uint24"}],"internalType":"struct TrancheDepositor.TAutoSwap","name":"swapInfo","type":"tuple"}],"name":"addSwapInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sourceToken","type":"address"}],"name":"autoSwaps","outputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"uint24","name":"minimumReturnPercentage","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sourceVault","type":"address"}],"name":"autoWithdrawals","outputs":[{"internalType":"bool","name":"enabled","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IMetaVault","name":"vault","type":"address"},{"internalType":"contract IERC20","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"components":[{"internalType":"uint256","name":"swapDeadline","type":"uint256"},{"internalType":"uint256","name":"swapAmountOutMinimum","type":"uint256"},{"internalType":"address","name":"swapTokenOut","type":"address"},{"internalType":"uint256","name":"minShares","type":"uint256"}],"internalType":"struct TrancheDepositor.TDepositParams","name":"params","type":"tuple"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMetaVault","name":"vault","type":"address"},{"internalType":"contract IERC20","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"components":[{"internalType":"uint256","name":"swapDeadline","type":"uint256"},{"internalType":"uint256","name":"swapAmountOutMinimum","type":"uint256"},{"internalType":"address","name":"swapTokenOut","type":"address"},{"internalType":"uint256","name":"minShares","type":"uint256"}],"internalType":"struct TrancheDepositor.TDepositParams","name":"params","type":"tuple"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"depositWithPermit","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"acm_","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"accessControlManager_","type":"address"}],"name":"setAccessControlManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tranche","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"tranches","outputs":[{"internalType":"bool","name":"enabled","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]

    declare storage: TrancheDepositorV2v1StorageReader
}

type TSender = TAccount & {
    value?: string | number | bigint
}

type TEventLogOptions<TParams> = {
    fromBlock?: number | Date
    toBlock?: number | Date
    params?: TParams
}

export type TTrancheDepositorV2v1Types = {
    Events: {
        AutoWithdrawalsChanged: {
            outputParams: {  },
            outputArgs:   [  ],
        }
        CdoAdded: {
            outputParams: { cdo: TAddress },
            outputArgs:   [ cdo: TAddress ],
        }
        Initialized: {
            outputParams: { version: number },
            outputArgs:   [ version: number ],
        }
        NewAccessControlManager: {
            outputParams: { accessControlManager: TAddress },
            outputArgs:   [ accessControlManager: TAddress ],
        }
        OwnershipTransferStarted: {
            outputParams: { previousOwner: TAddress, newOwner: TAddress },
            outputArgs:   [ previousOwner: TAddress, newOwner: TAddress ],
        }
        OwnershipTransferred: {
            outputParams: { previousOwner: TAddress, newOwner: TAddress },
            outputArgs:   [ previousOwner: TAddress, newOwner: TAddress ],
        }
        SwapInfoChanged: {
            outputParams: { token: TAddress },
            outputArgs:   [ token: TAddress ],
        }
        TranchesAdded: {
            outputParams: {  },
            outputArgs:   [  ],
        }
    },
    Methods: {
        COOLDOWN_WORKER_ROLE: {
          method: "COOLDOWN_WORKER_ROLE"
          arguments: [  ]
        }
        DEPOSITOR_CONFIG_ROLE: {
          method: "DEPOSITOR_CONFIG_ROLE"
          arguments: [  ]
        }
        PAUSER_ROLE: {
          method: "PAUSER_ROLE"
          arguments: [  ]
        }
        RESERVE_MANAGER_ROLE: {
          method: "RESERVE_MANAGER_ROLE"
          arguments: [  ]
        }
        UPDATER_CDO_APR_ROLE: {
          method: "UPDATER_CDO_APR_ROLE"
          arguments: [  ]
        }
        UPDATER_FEED_ROLE: {
          method: "UPDATER_FEED_ROLE"
          arguments: [  ]
        }
        UPDATER_STRAT_CONFIG_ROLE: {
          method: "UPDATER_STRAT_CONFIG_ROLE"
          arguments: [  ]
        }
        acceptOwnership: {
          method: "acceptOwnership"
          arguments: [  ]
        }
        acm: {
          method: "acm"
          arguments: [  ]
        }
        addAutoWithdrawals: {
          method: "addAutoWithdrawals"
          arguments: [ tokens: TAddress[], statuses: boolean[] ]
        }
        addCdo: {
          method: "addCdo"
          arguments: [ cdo: TAddress ]
        }
        addSwapInfo: {
          method: "addSwapInfo"
          arguments: [ token: TAddress, swapInfo: { router: TAddress, fee: number, minimumReturnPercentage: number } ]
        }
        autoSwaps: {
          method: "autoSwaps"
          arguments: [ sourceToken: TAddress ]
        }
        autoWithdrawals: {
          method: "autoWithdrawals"
          arguments: [ sourceVault: TAddress ]
        }
        deposit: {
          method: "deposit"
          arguments: [ vault: TAddress, asset: TAddress, amount: bigint, receiver: TAddress, params: { swapDeadline: bigint, swapAmountOutMinimum: bigint, swapTokenOut: TAddress, minShares: bigint } ]
        }
        depositWithPermit: {
          method: "depositWithPermit"
          arguments: [ vault: TAddress, asset: TAddress, amount: bigint, receiver: TAddress, params: { swapDeadline: bigint, swapAmountOutMinimum: bigint, swapTokenOut: TAddress, minShares: bigint }, deadline: bigint, v: number, r: TEth.Hex, s: TEth.Hex ]
        }
        initialize: {
          method: "initialize"
          arguments: [ owner_: TAddress, acm_: TAddress ]
        }
        owner: {
          method: "owner"
          arguments: [  ]
        }
        pendingOwner: {
          method: "pendingOwner"
          arguments: [  ]
        }
        renounceOwnership: {
          method: "renounceOwnership"
          arguments: [  ]
        }
        setAccessControlManager: {
          method: "setAccessControlManager"
          arguments: [ accessControlManager_: TAddress ]
        }
        tranches: {
          method: "tranches"
          arguments: [ tranche: TAddress, token: TAddress ]
        }
        transferOwnership: {
          method: "transferOwnership"
          arguments: [ newOwner: TAddress ]
        }
    }
}



class TrancheDepositorV2v1StorageReader extends ContractStorageReaderBase {
    constructor(
        public address: TAddress,
        public client: Web3Client,
        public explorer: IBlockchainExplorer,
    ) {
        super(address, client, explorer);

        this.$createHandler(this.$slots);
    }

    async acm(): Promise<TAddress> {
        return this.$storage.get(['acm', ]);
    }

    async __gap(): Promise<bigint[49]> {
        return this.$storage.get(['__gap', ]);
    }

    async autoSwaps(key: TAddress): Promise<{ router: TAddress, fee: number, minimumReturnPercentage: number }> {
        return this.$storage.get(['autoSwaps', key]);
    }

    async autoWithdrawals(key: TAddress): Promise<boolean> {
        return this.$storage.get(['autoWithdrawals', key]);
    }

    async tranches(key: TAddress): Promise<Record<string | number, boolean>> {
        return this.$storage.get(['tranches', key]);
    }

    $slots = [
    {
        "slot": 0,
        "position": 0,
        "name": "acm",
        "size": 160,
        "type": "address"
    },
    {
        "slot": 1,
        "position": 0,
        "name": "__gap",
        "size": 12544,
        "type": "uint256[49]"
    },
    {
        "slot": 50,
        "position": 0,
        "name": "autoSwaps",
        "size": null,
        "type": "mapping(address => (address router, uint24 fee, uint24 minimumReturnPercentage))"
    },
    {
        "slot": 51,
        "position": 0,
        "name": "autoWithdrawals",
        "size": null,
        "type": "mapping(address => bool)"
    },
    {
        "slot": 52,
        "position": 0,
        "name": "tranches",
        "size": null,
        "type": "mapping(address => mapping(address => bool))"
    }
]

}


interface ITrancheDepositorV2v1TxCaller {
    acceptOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    addAutoWithdrawals (sender: TSender, tokens: TAddress[], statuses: boolean[]): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    addCdo (sender: TSender, cdo: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    addSwapInfo (sender: TSender, token: TAddress, swapInfo: { router: TAddress, fee: number, minimumReturnPercentage: number }): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    deposit (sender: TSender, vault: TAddress, asset: TAddress, amount: bigint, receiver: TAddress, params: { swapDeadline: bigint, swapAmountOutMinimum: bigint, swapTokenOut: TAddress, minShares: bigint }): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    depositWithPermit (sender: TSender, vault: TAddress, asset: TAddress, amount: bigint, receiver: TAddress, params: { swapDeadline: bigint, swapAmountOutMinimum: bigint, swapTokenOut: TAddress, minShares: bigint }, deadline: bigint, v: number, r: TEth.Hex, s: TEth.Hex): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    initialize (sender: TSender, owner_: TAddress, acm_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    renounceOwnership (sender: TSender, ): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<{ error?: Error & { data?: { type: string, params } }, result? }>
}


interface ITrancheDepositorV2v1TxData {
    acceptOwnership (sender: TSender, ): Promise<TEth.TxLike>
    addAutoWithdrawals (sender: TSender, tokens: TAddress[], statuses: boolean[]): Promise<TEth.TxLike>
    addCdo (sender: TSender, cdo: TAddress): Promise<TEth.TxLike>
    addSwapInfo (sender: TSender, token: TAddress, swapInfo: { router: TAddress, fee: number, minimumReturnPercentage: number }): Promise<TEth.TxLike>
    deposit (sender: TSender, vault: TAddress, asset: TAddress, amount: bigint, receiver: TAddress, params: { swapDeadline: bigint, swapAmountOutMinimum: bigint, swapTokenOut: TAddress, minShares: bigint }): Promise<TEth.TxLike>
    depositWithPermit (sender: TSender, vault: TAddress, asset: TAddress, amount: bigint, receiver: TAddress, params: { swapDeadline: bigint, swapAmountOutMinimum: bigint, swapTokenOut: TAddress, minShares: bigint }, deadline: bigint, v: number, r: TEth.Hex, s: TEth.Hex): Promise<TEth.TxLike>
    initialize (sender: TSender, owner_: TAddress, acm_: TAddress): Promise<TEth.TxLike>
    renounceOwnership (sender: TSender, ): Promise<TEth.TxLike>
    setAccessControlManager (sender: TSender, accessControlManager_: TAddress): Promise<TEth.TxLike>
    transferOwnership (sender: TSender, newOwner: TAddress): Promise<TEth.TxLike>
}


type TEvents = TTrancheDepositorV2v1Types['Events'];
type TEventParams<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputParams']>;
type TEventArguments<TEventName extends keyof TEvents> = Partial<TEvents[TEventName]['outputArgs']>;
