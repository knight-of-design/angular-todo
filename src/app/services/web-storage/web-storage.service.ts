import {Injectable} from '@angular/core';
import {MockStorage, StorageProvider} from './web-storage';
import {LocalStorage} from './local-storage.provider';

interface GetOptions<T> {
  mapJson: (x: any) => T;
  mapString: (x: string) => T;
}

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {
  private clientSupports = {
    localStorage: typeof window !== 'undefined' && !!window.localStorage
  };

  public local: StorageProvider;

  constructor() {
    this.local = (this.clientSupports.localStorage)
      ? new StorageProvider(new LocalStorage())
      : new StorageProvider(new MockStorage());


  }

}
