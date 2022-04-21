import { action, computed, observable } from 'mobx';
import { persist } from 'mobx-persist';

// import { Sentry, Storage, notification } from "~/services";

class UserStore {
  @observable
  @persist('object')
  private user = {};

  @computed get data(): boolean {
    return this.user !== {};
  }

  @action
  clearUserData = (): void => {
    this.user = {};
  };

  @action
  fetchUser = (): void => {
    alert('ok');
  };
}

export default UserStore;
