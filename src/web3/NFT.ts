import Eth from "./Eth";
import { AbiItem } from 'web3-utils';
import { Contract, EventData } from 'web3-eth-contract';
import { flatten, prop, reverse, sortBy, map, reject } from "ramda";
import { propNotEq } from "ramda-adjunct";

export class NFT extends Eth {
  contractAddress: string;
  contract: Contract;

  name: string
  symbol: string

  constructor(contractAddress: string, abi: AbiItem[] = []) {
    super();
    this.contractAddress = contractAddress;
    this.contract = new this.web3.eth.Contract(abi, this.contractAddress);

    this.init();
  }

  init() {
    this.contract.methods.name().call().then((name: string) => { this.name = name });
    this.contract.methods.symbol().call().then((symbol: string) => { this.symbol = symbol });
  }

  getReceived(wallet: string) {

    return this.contract.getPastEvents('Transfer', {
      filter: { to: wallet },
      fromBlock: 0,
      toBlock: 'latest'
    });
  }

  getSent(wallet: string) {
    return this.contract.getPastEvents('Transfer', {
      filter: { from: wallet },
      fromBlock: 0,
      toBlock: 'latest'
    });
  }

  getTransferEvents(wallet: string) {
    return Promise.allSettled([
      this.getReceived(wallet),
      this.getSent(wallet)
    ])
      .then<PromiseSettledResult<EventData[]>[]>((events) => reject(propNotEq('status', 'fulfilled'), events))
      .then<EventData[][]>((events) => map<PromiseSettledResult<EventData[]>, EventData[]>(prop<EventData[]>('value'), events))
      .then<EventData[]>(flatten)
      .then<EventData[]>(sortBy(prop('blockNumber')))
      .then<EventData[]>(reverse)
  }

  // Bug: That do not handle the case someone send a token to himself
  async getOwned(wallet: string) {
    const received = await this.getReceived(wallet);
    const sent = await this.getSent(wallet);

    const owned = received.filter((event: any) => {
      return !sent.find((event2: any) => event2.returnValues.tokenId === event.returnValues.tokenId);
    });

    return owned;
  }

}
