import { Vue } from 'vue-property-decorator';
import { MutationTree } from 'vuex';
import { Trustee, TrustMeterStateInterface } from './state';
import { v4 } from 'uuid';

interface TrustChangePayload {
  id: string;
}

const mutation: MutationTree<TrustMeterStateInterface> = {
  increment (state: TrustMeterStateInterface, payload: TrustChangePayload): void {
    state[payload.id].score += 1;
    if (state[payload.id].score > 100) {
      state[payload.id].score = 100;
    }
    state[payload.id].history.push({
      timestamp: new Date(),
      value: state[payload.id].score
    });
  },

  decrement(state: TrustMeterStateInterface, payload: TrustChangePayload): void {
    state[payload.id].score -= 3;
    if (state[payload.id].score < 0) {
      state[payload.id].score = 0;
    }
    state[payload.id].history.push({
      timestamp: new Date(),
      value: state[payload.id].score
    });
  },

  addTrustee(state: TrustMeterStateInterface, payload: any): void {
    const newId = v4().toString();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    Vue.set(state, newId, payload.trustee);
  }
};

export default mutation;
