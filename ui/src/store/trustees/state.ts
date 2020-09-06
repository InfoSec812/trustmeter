export interface TrustMeterStateInterface {
  [key: string]: Trustee;
}

const state: TrustMeterStateInterface = {
  '7dd4777c-92e5-4430-9760-370d4064b55c': {
    name: 'Collin Phillips',
    score: 20,
    history: []
  },
  '79f8b381-318b-41ec-8d04-a77c6ed34b53': {
    name: 'Lacy Phillips',
    score: 80,
    history: []
  }
};

export default state;

export interface TrustChange {
  timestamp: Date;

  value: number;
}

export interface Trustee {
  name: string;

  score: number;

  history: TrustChange[];
}
