import { create } from 'mobx-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserStore from './user.store';
import AppStore from './app.store';

class RootStore {
  user: UserStore;

  app: AppStore;

  constructor() {
    this.user = new UserStore();
    this.app = new AppStore();
  }
}

const hydrate = create({ storage: AsyncStorage });

const store = new RootStore();

hydrate('user', store.user);
hydrate('app', store.app);

export { UserStore, AppStore };

export default store;
