import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements WebStorage {

  constructor() {

  }

  private clientLocalStorageAvailable = typeof window !== 'undefined' && !!window.localStorage;

  get<T>(key: string, value?: T): WebStorageItemInterface {
    return this.clientLocalStorageAvailable
      ? new LocalStorageItem(key, value)
      : new MockStorage(key, value);
  }

  set<T>(key: string, value?: T) {
    const local = new LocalStorageItem(key, value);
    if (typeof value === 'string') {
      local.inString();
    } else {
      local.inJson<T>();
    }
  }

  clear() {
    return this.clientLocalStorageAvailable
    ? window.localStorage.clear()
    : new MockStorage(null).clear();
  }
}

class LocalStorageItem implements WebStorageItemInterface {

  constructor( private key: string, private value?: any) {
  }

  inString(): string {
    if (this.value !== void 0) {
      window.localStorage.setItem(this.key, this.value.toString());
    } else {
      return window.localStorage.getItem(this.key) || '';
    }
  }

  inJson<T>(): T {
    if (this.value !== void 0) {
      window.localStorage.setItem(this.key, JSON.stringify(this.value));
    } else {
      return JSON.parse(window.localStorage.getItem(this.key) || '{}');
    }
  }
}

