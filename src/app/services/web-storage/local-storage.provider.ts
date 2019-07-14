import {StorageOperations} from './web-storage';

export class LocalStorage implements StorageOperations {

  constructor(private storage = window.localStorage) {

  }
  get = (key: string) => this.storage.getItem(key);
  set = (key: string, value: string) => this.storage.setItem(key, value);
  remove = (key: string) => localStorage.removeItem(key);
  clear = () => localStorage.clear();
}

// webStorage.localStorage.get('key').parse(JSON).result();
// webStorage.localStorage.set('key').value('test').format(JSON).result();
