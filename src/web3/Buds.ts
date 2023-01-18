import { NFT } from "./NFT";
import type { AbiItem } from 'web3-utils';
import abi from './abi/buds.json';

export class BudsNft extends NFT {
  constructor() {
    super('0xbe44b56bf60b5ee6141345c2b1380bea2915d991', abi as AbiItem[]);
  }
}

export const budsNft = new BudsNft();

export default budsNft;
