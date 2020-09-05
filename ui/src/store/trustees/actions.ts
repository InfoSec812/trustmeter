import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { TrustMeterStateInterface } from './state';

const actions: ActionTree<TrustMeterStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
