import {Component} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Angular Todo App';
  authenticated = false;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticated = authenticationService.isAuthenticated();
  }
}
