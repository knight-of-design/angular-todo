import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RegistrationService} from '../../services/registration.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.styl']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private registrationService: RegistrationService,
              private router: Router) {
  }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  submitForm() {
    this.registrationService.register(this.registrationForm.value);
    this.router.navigateByUrl('');
  }
}
