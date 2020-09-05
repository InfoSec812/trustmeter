import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { TrustMeterStateInterface } from './state';

const getters: GetterTree<TrustMeterStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
