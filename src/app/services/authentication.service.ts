import { Injectable } from '@angular/core';
import {WebStorageService} from './web-storage/web-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private webStorage: WebStorageService) { }

  isAuthenticated(): boolean {
    return !!this.webStorage.local.get('token').result();
  }
}
