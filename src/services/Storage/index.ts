import { AsyncStorage, STORAGE } from '~/utils';

export default class Storage {
  static clear(): void {
    AsyncStorage.clear();
  }

  static async getAllStorage(): Promise<any> {
    return AsyncStorage.getAllKeys();
  }

  static async setToken(token: string): Promise<void> {
    await AsyncStorage.setItem(STORAGE.TOKEN, token);
  }

  static async clearToken(): Promise<void> {
    await AsyncStorage.setItem(STORAGE.TOKEN, '');
  }

  static async getToken(): Promise<string | null> {
    try {
      const token = await AsyncStorage.getItem(STORAGE.TOKEN);
      return token || null;
    } catch (error) {
      return null;
    }
  }

  static async logout(): Promise<void> {
    await AsyncStorage.removeItem(STORAGE.TOKEN);
  }
}
