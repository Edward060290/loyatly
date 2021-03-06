import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserLogin } from '../model/user-login.model';
import { AuthenticationService } from '../services/authentication.service';

/**
* Componente que muestra el formulrio de logIn 
*/
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  /**
  * Instancia para crear un formulario
  */
  private logInForm: FormGroup;

  /**
  * valor para intenciar un modelo para mandar informacion del cliente
  */
  private userData = new UserLogin;

  /**
  * valor para unite Test
  */
  public email = 'Email address';
  /**
  * Pattern para validar nombre
  */
  public PATTERN_ALFABETICO = /^[a-zA-Z ñÑáéíóú]*$/;


  bar: any;

  submitted = false;

  /**
  * Constructor que injecta servicios
  */
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
    // creando el formulario de logIn
  }

  ngOnInit() {
  }
  createForm(): void {
    this.logInForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150), this.authenticationService.validateEmail]],
      password: ['', Validators.required]
    });
  }
  /**
  * metodo que te logea la informacion del usario
  */
  logInClientUser(): void {
    this.submitted = true;
  }

  /*   const userInfoData = this.userData;
    userInfoData.email = this.logInForm.controls.email.value;
    userInfoData.password = this.logInForm.controls.password.value;
    this.authenticationService.logInUser(userInfoData).subscribe(res => {
      const userResp = res;
    }); */
}
