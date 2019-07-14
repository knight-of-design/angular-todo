import { Injectable } from '@angular/core';
import {WebStorageService} from './web-storage/web-storage.service';

interface UserRegistrationDetails {
  name: string,
  email: string,
  password: string,
}
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private webStorage: WebStorageService) { }

  register(userDetails: UserRegistrationDetails) {
    this.webStorage.local.clear();

    this.webStorage.local
      .set('user')
      .value({
        email: userDetails.email,
        name: userDetails.name
      })
      .format(JSON).result();

    const token = this.createHashToken(userDetails.password);
    this.webStorage.local
      .set('token')
      .value(token)
      .result();

    this.webStorage.local
      .set('login-token')
      .value(token)
      .result();

  }

  private createHashToken(str: string): string {
    return ('salt' + str).split('').map(c => c.charCodeAt(0) * 777 + '').join('');
  }
}
