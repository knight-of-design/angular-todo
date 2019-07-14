interface WebStorage {
    get<T>(key: string, value?: T): WebStorageItemInterface;
    set<T>(key: string, value?: T);
    clear();
}

interface WebStorageItemInterface {
    inString(): string;
    inJson<T>(): T;
}

class MockStorage implements WebStorage, WebStorageItemInterface {
  private static storageData = {};

  constructor(private key: string, private val?: any) {
  }

  get<T>(key: string, val?: T): MockStorage {
    this.key = key;
    this.val = val;
    return this;
  }

  set<T>(key: string, value?: T) {
    if (typeof value === 'string') {
      this.inString();
    } else {
      this.inJson<T>();
    }
  }

  clear() {
    MockStorage.storageData = {};
  }

  inString(): string {
    if (this.val !== void 0) {
      MockStorage.storageData[this.key] = this.val.toString();
    } else {
      return MockStorage.storageData[this.key] || '';
    }
  }

  inJson<T>(): T {
    if (this.val !== void 0) {
      MockStorage.storageData[this.key] = JSON.stringify(this.val);
    } else {
      return JSON.parse(MockStorage.storageData[this.key] || '{}');
    }
  }
}
