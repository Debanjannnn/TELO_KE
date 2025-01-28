import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0x02AbaD9BC6e319bfBB30042D30396198621144B1";
const rewardTokenContractAddress ="0x041914f809943ad74dF30856dF70735f7D207B85";
const stakingContractAddress = "0x30FD4D943dfB797106cE0c1506bB0dC9F2b5F413"

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});