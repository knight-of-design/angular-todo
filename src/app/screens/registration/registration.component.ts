import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RegistrationService} from '../../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.styl']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(registrationService: RegistrationService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  submitForm() {
    console.log(this.registrationForm.value);
  }
}
