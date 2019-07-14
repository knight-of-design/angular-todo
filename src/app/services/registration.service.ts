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
    this.webStorage.local
      .set('user')
      .value({
        email: userDetails.email,
        name: userDetails.name
      })
      .format(JSON).result();

    this.webStorage.local
      .set('token')
      .value(userDetails.password)
      .format((x: string) => this.createHashToken(x))
      .result();

  }

  private createHashToken(str: string): string {
    return ('salt' + str).split('').map(c => c.charCodeAt(0) * 777 + '').join('');
  }
}
