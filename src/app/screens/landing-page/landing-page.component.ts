import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: [ './landing-page.component.styl' ]
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthenticationService) {
    if (this.authService.isAuthenticated()) {
      router.navigateByUrl('checklist');
    }
  }

  ngOnInit() {
  }

}
