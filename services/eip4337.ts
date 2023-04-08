import { ethers } from 'ethers';
import { abi as AccountABI, bytecode as AccountBytecode } from '../abi/Account.json';
import { abi as EntrypointABI } from '../abi/Entrypoint.json'; 

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL as string);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);
const entrypointContract = new ethers.Contract(process.env.ENTRYPOINT_ADDRESS as string, EntrypointABI, wallet);

export async function createAccount(): Promise<string> {
    const accountFactory = new ethers.ContractFactory(AccountABI, AccountBytecode, wallet);
    const contract = await accountFactory.deploy();
    await contract.waitForDeployment();

    return await contract.getAddress();
}

export type UserOperation = {
    sender: string;
    contractAddress: string;
    nonce: number;
    value: number;
    calldata: string;
    signature: number[];
}

export async function handleOps(userOp: UserOperation): Promise<string> {
    const tx = await entrypointContract.handleOps(userOp);
    const receipt = await tx.wait();
    return receipt.transactionHash;
}
