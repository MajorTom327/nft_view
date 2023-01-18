import { when } from "ramda";
import { isNotNil, isNotNilOrEmpty } from "ramda-adjunct";
import { useContext, useEffect, useState } from "react";
import { Web3Context } from "../context/Web3Context";
import { useWeb3 } from "./useWeb3";

export const shorterWallet = (wallet: string) => {
  return `${wallet.slice(0, 6)}...${wallet.slice(-4)}`
}

export const useWallet = () => {
  const { web3, wallet } = useContext(Web3Context);

  const connect = async () => {
    await web3.connect();

  }

  return {
    wallet,
    shortWallet: when<string | null, string, string | null>(isNotNilOrEmpty, shorterWallet, wallet),
    connect
  }
}

export default useWallet;
