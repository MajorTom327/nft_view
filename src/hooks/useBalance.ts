import { useEffect, useState } from "react";
import { toEth, toWei } from "../helpers/formatter/currency";
import { useWeb3 } from "./useWeb3";

export const useBalance = () => {
  const [balance, setBalance] = useState<string>('0');
  const { web3, wallet } = useWeb3();

  useEffect(() => {
    web3.getBalance().then(setBalance)
  }, [web3, wallet]);


  return {
    wei: toWei(balance),
    eth: toEth(balance),
  };
}

export default useBalance;
