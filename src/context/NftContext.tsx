import React from "react";
import { BudsNft } from "../web3/Buds";
import { CaptainsNft } from "../web3/Captain";
import { NFT } from "../web3/NFT";

export type NftContextType = Record<string, NFT>;

export const NftContext = React.createContext<NftContextType>({});

const { Provider } = NftContext;

export const NftProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value: NftContextType = {
    buds: new BudsNft(),
    captains: new CaptainsNft(),
  };

  if (!value) return null;
  return <Provider value={value}>{children}</Provider>;
};

export default NftProvider;
