import { BudsNft } from "./Buds";

export class Bud extends BudsNft {
  tokenId: string;

  constructor(tokenId: number) {
    super();
    this.tokenId = tokenId.toString();
  }

  async getStakeTime(): Promise<number> {
    return super.getStakeTime(this.tokenId);
  }

  async getAggregateTimeStaked(): Promise<number> {
    return super.getAggregateTimeStaked(this.tokenId);
  }

  async getStakeInformation(): Promise<any> {
    return super.getStakeInformation(this.tokenId);
  }

  async isStaked(): Promise<boolean> {
    return super.isStaked(this.tokenId);
  }

}
