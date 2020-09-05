import { MutationTree } from 'vuex';
import { TrustMeterStateInterface } from './state';

const mutation: MutationTree<TrustMeterStateInterface> = {
  someMutation (/* trustees: TrustMeterStateInterface */) {
    // your code
  }
};

export default mutation;
