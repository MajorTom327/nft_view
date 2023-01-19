import { NFT } from "./NFT";
import type { AbiItem } from 'web3-utils';
import abi from './abi/captains.json';

export class CaptainsNft extends NFT {
  constructor() {
    super('0x801271d98b208d381243f614dab00f4f3081473b', abi as AbiItem[]);
  }
}

export const captainsNft = new CaptainsNft();

export default captainsNft;
