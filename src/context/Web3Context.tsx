import React, { createContext, useEffect, useMemo, useState } from "react";
import Eth from "../web3/Eth";

type Web3Context = {
  web3: Eth;
  wallet: string | null;
};

export const Web3Context = createContext<Web3Context>({
  web3: new Eth(),
});

const { Provider } = Web3Context;

export const Web3Provider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const web3 = useMemo(() => new Eth(), []);
  const [wallet, setWallet] = useState<string | null>(null);

  useEffect(() => {
    web3.ensureAccounts().then(() => {
      setWallet(web3.wallet);
    });
  }, []);

  useEffect(() => {
    const i = setInterval(() => {
      web3.ensureAccounts().then(() => {
        setWallet(web3.wallet);
      });
    }, 10000);

    return () => clearInterval(i);
  }, [web3]);

  const value: Web3Context = {
    web3,
    wallet,
  };

  return <Provider value={value}>{children}</Provider>;
};

export default Web3Provider;
