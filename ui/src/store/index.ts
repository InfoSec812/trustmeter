import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import trustees from './trustees';
import { TrustMeterStateInterface } from 'src/store/trustees/state';

// import example from './module-example';
// import { TrustMeterStateInterface } from './module-example/trustees';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: TrustMeterStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  trustees: TrustMeterStateInterface;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      trustees
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  });

  return Store;
});
