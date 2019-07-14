import { Component } from '@angular/core';
import {WebStorageService} from './services/web-storage/web-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Angular Todo App';
  authenticated = false;
}
