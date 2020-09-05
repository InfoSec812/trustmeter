import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';

const mutation: MutationTree<ExampleStateInterface> = {
  someMutation (/* trustees: TrustMeterStateInterface */) {
    // your code
  }
};

export default mutation;
