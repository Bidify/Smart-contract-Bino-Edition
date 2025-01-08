/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace Bidify {
  export type ListingStruct = {
    creator: AddressLike;
    currency: AddressLike;
    platform: AddressLike;
    token: BigNumberish;
    price: BigNumberish;
    endingPrice: BigNumberish;
    referrer: AddressLike;
    lister: AddressLike;
    highBidder: AddressLike;
    endTime: BigNumberish;
    paidOut: boolean;
    isERC721: boolean;
  };

  export type ListingStructOutput = [
    creator: string,
    currency: string,
    platform: string,
    token: bigint,
    price: bigint,
    endingPrice: bigint,
    referrer: string,
    lister: string,
    highBidder: string,
    endTime: bigint,
    paidOut: boolean,
    isERC721: boolean
  ] & {
    creator: string;
    currency: string;
    platform: string;
    token: bigint;
    price: bigint;
    endingPrice: bigint;
    referrer: string;
    lister: string;
    highBidder: string;
    endTime: bigint;
    paidOut: boolean;
    isERC721: boolean;
  };
}

export interface BidifyInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "bid"
      | "finish"
      | "getListing"
      | "getNextBid"
      | "getPriceUnit"
      | "list"
      | "onERC1155BatchReceived"
      | "onERC1155Received(address,address,uint256,bytes)"
      | "onERC1155Received(address,address,uint256,uint256,bytes)"
      | "onERC721Received"
      | "owner"
      | "renounceOwnership"
      | "supportsInterface"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AuctionExtended"
      | "AuctionFinished"
      | "Bid"
      | "ListingCreated"
      | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "bid",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finish",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getListing",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNextBid",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceUnit",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "list",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received(address,address,uint256,bytes)",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received(address,address,uint256,uint256,bytes)",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "bid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "finish", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getListing", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNextBid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPriceUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "list", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received(address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received(address,address,uint256,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace AuctionExtendedEvent {
  export type InputTuple = [id: BigNumberish, time: BigNumberish];
  export type OutputTuple = [id: bigint, time: bigint];
  export interface OutputObject {
    id: bigint;
    time: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AuctionFinishedEvent {
  export type InputTuple = [
    id: BigNumberish,
    nftRecipient: AddressLike,
    price: BigNumberish
  ];
  export type OutputTuple = [id: bigint, nftRecipient: string, price: bigint];
  export interface OutputObject {
    id: bigint;
    nftRecipient: string;
    price: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BidEvent {
  export type InputTuple = [
    id: BigNumberish,
    bidder: AddressLike,
    price: BigNumberish,
    referrer: AddressLike
  ];
  export type OutputTuple = [
    id: bigint,
    bidder: string,
    price: bigint,
    referrer: string
  ];
  export interface OutputObject {
    id: bigint;
    bidder: string;
    price: bigint;
    referrer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ListingCreatedEvent {
  export type InputTuple = [
    id: BigNumberish,
    creator: AddressLike,
    currency: AddressLike,
    platform: AddressLike,
    token: BigNumberish,
    price: BigNumberish,
    endingPrice: BigNumberish,
    timeInDays: BigNumberish,
    lister: AddressLike
  ];
  export type OutputTuple = [
    id: bigint,
    creator: string,
    currency: string,
    platform: string,
    token: bigint,
    price: bigint,
    endingPrice: bigint,
    timeInDays: bigint,
    lister: string
  ];
  export interface OutputObject {
    id: bigint;
    creator: string;
    currency: string;
    platform: string;
    token: bigint;
    price: bigint;
    endingPrice: bigint;
    timeInDays: bigint;
    lister: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Bidify extends BaseContract {
  connect(runner?: ContractRunner | null): Bidify;
  waitForDeployment(): Promise<this>;

  interface: BidifyInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  bid: TypedContractMethod<
    [id: BigNumberish, referrer: AddressLike, amount: BigNumberish],
    [void],
    "payable"
  >;

  finish: TypedContractMethod<[id: BigNumberish], [void], "nonpayable">;

  getListing: TypedContractMethod<
    [id: BigNumberish],
    [Bidify.ListingStructOutput],
    "view"
  >;

  getNextBid: TypedContractMethod<[id: BigNumberish], [bigint], "view">;

  getPriceUnit: TypedContractMethod<[currency: AddressLike], [bigint], "view">;

  list: TypedContractMethod<
    [
      currency: AddressLike,
      platform: AddressLike,
      token: BigNumberish,
      price: BigNumberish,
      endingPrice: BigNumberish,
      timeInDays: BigNumberish,
      isERC721: boolean,
      lister: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  onERC1155BatchReceived: TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  "onERC1155Received(address,address,uint256,bytes)": TypedContractMethod<
    [
      operator: AddressLike,
      arg1: AddressLike,
      tokenId: BigNumberish,
      arg3: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  "onERC1155Received(address,address,uint256,uint256,bytes)": TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  onERC721Received: TypedContractMethod<
    [
      operator: AddressLike,
      arg1: AddressLike,
      tokenId: BigNumberish,
      arg3: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "bid"
  ): TypedContractMethod<
    [id: BigNumberish, referrer: AddressLike, amount: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "finish"
  ): TypedContractMethod<[id: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getListing"
  ): TypedContractMethod<
    [id: BigNumberish],
    [Bidify.ListingStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getNextBid"
  ): TypedContractMethod<[id: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getPriceUnit"
  ): TypedContractMethod<[currency: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "list"
  ): TypedContractMethod<
    [
      currency: AddressLike,
      platform: AddressLike,
      token: BigNumberish,
      price: BigNumberish,
      endingPrice: BigNumberish,
      timeInDays: BigNumberish,
      isERC721: boolean,
      lister: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onERC1155BatchReceived"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onERC1155Received(address,address,uint256,bytes)"
  ): TypedContractMethod<
    [
      operator: AddressLike,
      arg1: AddressLike,
      tokenId: BigNumberish,
      arg3: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onERC1155Received(address,address,uint256,uint256,bytes)"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onERC721Received"
  ): TypedContractMethod<
    [
      operator: AddressLike,
      arg1: AddressLike,
      tokenId: BigNumberish,
      arg3: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "AuctionExtended"
  ): TypedContractEvent<
    AuctionExtendedEvent.InputTuple,
    AuctionExtendedEvent.OutputTuple,
    AuctionExtendedEvent.OutputObject
  >;
  getEvent(
    key: "AuctionFinished"
  ): TypedContractEvent<
    AuctionFinishedEvent.InputTuple,
    AuctionFinishedEvent.OutputTuple,
    AuctionFinishedEvent.OutputObject
  >;
  getEvent(
    key: "Bid"
  ): TypedContractEvent<
    BidEvent.InputTuple,
    BidEvent.OutputTuple,
    BidEvent.OutputObject
  >;
  getEvent(
    key: "ListingCreated"
  ): TypedContractEvent<
    ListingCreatedEvent.InputTuple,
    ListingCreatedEvent.OutputTuple,
    ListingCreatedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "AuctionExtended(uint64,uint256)": TypedContractEvent<
      AuctionExtendedEvent.InputTuple,
      AuctionExtendedEvent.OutputTuple,
      AuctionExtendedEvent.OutputObject
    >;
    AuctionExtended: TypedContractEvent<
      AuctionExtendedEvent.InputTuple,
      AuctionExtendedEvent.OutputTuple,
      AuctionExtendedEvent.OutputObject
    >;

    "AuctionFinished(uint64,address,uint256)": TypedContractEvent<
      AuctionFinishedEvent.InputTuple,
      AuctionFinishedEvent.OutputTuple,
      AuctionFinishedEvent.OutputObject
    >;
    AuctionFinished: TypedContractEvent<
      AuctionFinishedEvent.InputTuple,
      AuctionFinishedEvent.OutputTuple,
      AuctionFinishedEvent.OutputObject
    >;

    "Bid(uint64,address,uint256,address)": TypedContractEvent<
      BidEvent.InputTuple,
      BidEvent.OutputTuple,
      BidEvent.OutputObject
    >;
    Bid: TypedContractEvent<
      BidEvent.InputTuple,
      BidEvent.OutputTuple,
      BidEvent.OutputObject
    >;

    "ListingCreated(uint64,address,address,address,uint256,uint256,uint256,uint8,address)": TypedContractEvent<
      ListingCreatedEvent.InputTuple,
      ListingCreatedEvent.OutputTuple,
      ListingCreatedEvent.OutputObject
    >;
    ListingCreated: TypedContractEvent<
      ListingCreatedEvent.InputTuple,
      ListingCreatedEvent.OutputTuple,
      ListingCreatedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}
