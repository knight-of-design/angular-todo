import { Injectable } from '@angular/core';
import {WebStorageService} from './web-storage/web-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private webStorage: WebStorageService) { }

  getUserName() {
    const profile = this.webStorage.local.get('user').parse(JSON).result();
    if (profile) {
      return profile.name;
    }
  }

  getUserEmail() {
    const profile = this.webStorage.local.get('user').parse(JSON).result();
    if (profile) {
      return profile.email;
    }
  }
}
