import {JsonSerialization} from '../serialization/json';


export interface StorageOperations {
  get: (k: string) => string;
  set: (k: string, v: string) => void;
  remove: (k: string) => void;
  clear: () => void;
}

export class MockStorage implements StorageOperations {
  private static storageData = {};

  get(key: string): string {
    return MockStorage.storageData[key];
  }

  set(key: string, value: string) {
    MockStorage.storageData[key] = value;
  }

  remove(key: string) {
    delete MockStorage.storageData[key];
  }

  clear() {
    MockStorage.storageData = {};
  }
}

export class StorageProvider {
  constructor(private operations: StorageOperations) {
  }

  get(key: string): StorageRetrieval {
    return new StorageRetrieval(key, this.operations);
  }

  set(key: string): StoragePersistence {
    return new StoragePersistence(key, this.operations);
  }

  remove(key: string): void {
    this.operations.remove(key);
  }

  clear(): void {
    this.operations.clear();
  }
}


class StorageRetrieval {
  private resultData: any;

  constructor(private key: string,
              private operations: StorageOperations) {
    this.resultData = operations.get(key);
  }

  parse(x: any) {
    if (x === JSON || x === JsonSerialization) {
      this.resultData = JsonSerialization.parse(this.resultData);
    } else if (typeof x === 'function') {
      this.resultData = x(this.resultData);
    }
    return this;
  }

  result() {
    return this.resultData;
  }
}


class StoragePersistence {
  private resultData: string;

  constructor(private key: string,
              private operations: StorageOperations) {
    this.resultData = '';
  }

  format(x: any) {
    if (x === JSON || x === JsonSerialization) {
      this.resultData = JsonSerialization.format(this.resultData);
    } else if (typeof x === 'function') {
      this.resultData = x(this.resultData);
    }
    return this;
  }

  value(value: string) {
    this.resultData = value;
    return this;
  }

  result() {
    this.operations.set(this.key, this.resultData);
    return this.resultData;
  }
}
