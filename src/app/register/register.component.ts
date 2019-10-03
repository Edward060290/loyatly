import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthenticationService } from '../services/authentication.service';
import { RegisterUser } from '../model/register-user.model';

/**
* Componente que muestra el formulario de registro
*/
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  /**
  * Crea una instancia de FormGroup para crear formulario
  */
  private registerForm: FormGroup;

  /**
  * Crea un pattern para la validation de nombre
  */
  public PATTERN_ALFABETICO = /^[a-zA-Z ñÑáéíóú]*$/;

  /**
  * Crea una instancia de modelo para los datos del cliente
  */
  private userRegisterData = new RegisterUser;

  /**
  *  Injecta servicio y formbuilder para el uso en el componente
  */
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,

  ) {
    // valores del formulario de registro
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40),
      Validators.pattern(this.PATTERN_ALFABETICO)]],
      email: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150), this.authenticationService.validateEmail]],
      password: ['', Validators.required]
    });
  }

  /**
  *  Metodo que se usa para el registro de la person manda informacion
  */
  registerUser() {
    const userData = this.userRegisterData;
    userData.name = this.registerForm.controls.name.value;
    userData.email = this.registerForm.controls.email.value;
    userData.password = this.registerForm.controls.password.value;
    this.authenticationService.registerUser(userData).subscribe(resp => {
      const userRegi = resp;
    });
  }

}
