import { head, isNil } from 'ramda';
import Web3 from 'web3';

export class Eth {
  web3: Web3;
  wallet: string | null;
  wallets: string[] = [];

  constructor() {
    this.web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  }

  async connect() {
    this.wallets = await this.web3.eth.requestAccounts();
    this.wallet = this.web3.eth.defaultAccount || head(this.wallets) || null;
  }

  async ensureAccounts() {
    this.wallets = await this.web3.eth.getAccounts();
    this.wallet = this.web3.eth.defaultAccount || head(this.wallets) || null;
  }

  getBalance() {
    if (isNil(this.wallet)) return Promise.resolve('0');
    return this.web3.eth.getBalance(this.wallet);
  }
}

export default Eth;
