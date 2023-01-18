import Bluebird from "bluebird";
import { values } from "ramda";
import React, { useEffect, useState } from "react";
import { BudsNft } from "../web3/Buds";
import { NFT } from "../web3/NFT";

export type NftContextType = Record<string, NFT>;

export const NftContext = React.createContext<NftContextType>({});

const { Provider } = NftContext;

export const NftProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value: NftContextType = {
    buds: new BudsNft(),
  };

  if (!value) return null;
  return <Provider value={value}>{children}</Provider>;
};

export default NftProvider;
