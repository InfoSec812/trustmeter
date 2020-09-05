export interface TrustMeterStateInterface {
  prop: boolean;
  trustees: Trustee[];
}

const state: TrustMeterStateInterface = {
  prop: false,
  trustees: []
};

export default state;

export interface Trustee {
  name: string;

  score: number;

  history: number[];
}
