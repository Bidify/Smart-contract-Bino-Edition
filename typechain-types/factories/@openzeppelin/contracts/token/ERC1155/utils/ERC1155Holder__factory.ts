/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../../common";
import type {
  ERC1155Holder,
  ERC1155HolderInterface,
} from "../../../../../../@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061071b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a714610046578063bc197c8114610076578063f23a6e61146100a6575b600080fd5b610060600480360381019061005b9190610250565b6100d6565b60405161006d9190610298565b60405180910390f35b610090600480360381019061008b9190610555565b610150565b60405161009d9190610633565b60405180910390f35b6100c060048036038101906100bb919061064e565b610165565b6040516100cd9190610633565b60405180910390f35b60007f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061014957506101488261017a565b5b9050919050565b600063bc197c8160e01b905095945050505050565b600063f23a6e6160e01b905095945050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61022d816101f8565b811461023857600080fd5b50565b60008135905061024a81610224565b92915050565b600060208284031215610266576102656101ee565b5b60006102748482850161023b565b91505092915050565b60008115159050919050565b6102928161027d565b82525050565b60006020820190506102ad6000830184610289565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102de826102b3565b9050919050565b6102ee816102d3565b81146102f957600080fd5b50565b60008135905061030b816102e5565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61035f82610316565b810181811067ffffffffffffffff8211171561037e5761037d610327565b5b80604052505050565b60006103916101e4565b905061039d8282610356565b919050565b600067ffffffffffffffff8211156103bd576103bc610327565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b6103e6816103d3565b81146103f157600080fd5b50565b600081359050610403816103dd565b92915050565b600061041c610417846103a2565b610387565b9050808382526020820190506020840283018581111561043f5761043e6103ce565b5b835b81811015610468578061045488826103f4565b845260208401935050602081019050610441565b5050509392505050565b600082601f83011261048757610486610311565b5b8135610497848260208601610409565b91505092915050565b600080fd5b600067ffffffffffffffff8211156104c0576104bf610327565b5b6104c982610316565b9050602081019050919050565b82818337600083830152505050565b60006104f86104f3846104a5565b610387565b905082815260208101848484011115610514576105136104a0565b5b61051f8482856104d6565b509392505050565b600082601f83011261053c5761053b610311565b5b813561054c8482602086016104e5565b91505092915050565b600080600080600060a08688031215610571576105706101ee565b5b600061057f888289016102fc565b9550506020610590888289016102fc565b945050604086013567ffffffffffffffff8111156105b1576105b06101f3565b5b6105bd88828901610472565b935050606086013567ffffffffffffffff8111156105de576105dd6101f3565b5b6105ea88828901610472565b925050608086013567ffffffffffffffff81111561060b5761060a6101f3565b5b61061788828901610527565b9150509295509295909350565b61062d816101f8565b82525050565b60006020820190506106486000830184610624565b92915050565b600080600080600060a0868803121561066a576106696101ee565b5b6000610678888289016102fc565b9550506020610689888289016102fc565b945050604061069a888289016103f4565b93505060606106ab888289016103f4565b925050608086013567ffffffffffffffff8111156106cc576106cb6101f3565b5b6106d888828901610527565b915050929550929590935056fea26469706673582212202c1d94a8a7ed0d4a560df1f8ff09af0973ad2d5e9aa79a6bd4bef48675d732ed64736f6c63430008130033";

type ERC1155HolderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155HolderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155Holder__factory extends ContractFactory {
  constructor(...args: ERC1155HolderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ERC1155Holder & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC1155Holder__factory {
    return super.connect(runner) as ERC1155Holder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155HolderInterface {
    return new Interface(_abi) as ERC1155HolderInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ERC1155Holder {
    return new Contract(address, _abi, runner) as unknown as ERC1155Holder;
  }
}
