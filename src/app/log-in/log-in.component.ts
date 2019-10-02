import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UserLogin } from '../model/user-login.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  private logInForm: FormGroup;

  private userData = new UserLogin;
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.logInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }


  logInUser() {
    this.authenticationService.getToken()
    const userInfoData = this.userData;
    userInfoData.email = this.logInForm.controls.email.value;
    userInfoData.password = this.logInForm.controls.password.value;
    console.log('objecto creado', userInfoData)
    this.authenticationService.logInUser(userInfoData).subscribe(res => {
      const userResp = res;
    });
  }
}
