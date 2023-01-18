import { compose, curry, __ } from "ramda";
import Web3 from "web3";

export const toCurrency = (value: number, currency: string) => {
  return value.toLocaleString(undefined, { style: 'currency', currency, minimumFractionDigits: 7 });
}

export const toWei = (value: string) => {
  return compose(
    (v: number) => toCurrency(v, 'WEI'),
    parseFloat,
    (v: string) => Web3.utils.fromWei(v, 'wei'),
  )(value)
}

export const toEth = (value: string) => {
  return compose(
    (v: number) => toCurrency(v, 'ETH'),
    parseFloat,
    (v: string) => Web3.utils.fromWei(v, 'ether'),
  )(value)
}
