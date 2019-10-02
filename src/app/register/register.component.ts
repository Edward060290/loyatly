import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthenticationService } from '../services/authentication.service';
import { RegisterUser } from '../model/register-user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  private registerForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  public VALIDATE_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public PATTERN_ALFABETICO = /^[a-zA-Z ñÑáéíóú]*$/;

  private userRegisterData = new RegisterUser;
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,

  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40),
        Validators.pattern(this.PATTERN_ALFABETICO)]],
      email: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150), this.authenticationService.validateEmail]],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  registerUser() {
    const userData = this.userRegisterData;
    userData.name = this.registerForm.controls.name.value;
    userData.email = this.registerForm.controls.email.value;
    userData.password = this.registerForm.controls.password.value;
    console.log('repuseta ', userData)
    this.authenticationService.registerUser(userData).subscribe(resp => {
      const userRegi = resp;
    })
  }

}
