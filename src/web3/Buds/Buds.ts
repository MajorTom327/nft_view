import { NFT } from "../NFT";
import type { AbiItem } from 'web3-utils';
import abi from '../abi/buds.json';
import { path } from "ramda";
import { Bud } from "./Bud";

export class BudsNft extends NFT {
  constructor() {
    super('0xbe44b56bf60b5ee6141345c2b1380bea2915d991', abi as AbiItem[]);
  }

  async getBuds() {
    if (!this.wallet) {
      return Promise.resolve([]);
    }
    return this.getOwned(this.wallet).then((buds) => {
      return buds.map((bud) => path(['returnValues', 'tokenId'], bud))
        .map((bud) => parseInt(bud));
      ;
    })
  }

  async getAggregateTimeStaked(tokenId: string): Promise<number> {
    return this.contract.methods.aggregateTimeStaked(tokenId).call();
  }

  async getStakeTime(tokenId: string): Promise<number> {
    return this.contract.methods.stakingStartTimestamp(tokenId).call();
  }

  async getStakeInformation(tokenId: string): Promise<any> {
    return this.contract.methods.tokenStakeDetails(tokenId).call();
  }

  async isStaked(tokenId: string): Promise<boolean> {
    return this.contract.methods.isStaked(tokenId).call();
  }


}

export const budsNft = new BudsNft();

export default budsNft;
