import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StorageService } from './storage.service';
import { KeysStorage } from '../model/key-storage';
import { Http } from '../../../node_modules/@angular/http';
import { Token } from '../model/token';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { map } from 'rxjs/operators';

/**
* Servicio para login y registro que se guarda
*/
@Injectable()
export class AuthenticationService {

  /**
   * Endpoint del logIn
   */
  private urlAuth = 'http://localhost:3004/login';

  /**
  * Endpoint del logIn
  */
  private urlRegi = 'http://localhost:3004/register';

  /**
  * Endpoint de la peticion del token
  */
  private urlToken = 'http://localhost:3004/token-number';

  /**
  * Constructor que injecta los servicios que van hacer util
  */
  constructor(private http: HttpClient, private httpOld: Http, private storageService: StorageService) { }

  /**
   * Metodo que logea al usario
   */
  logInUser(user) {
    this.storageService.setToLocalStorage(KeysStorage.KEY_USER_LOGIN, user);
    return this.http.post<any>(this.urlAuth, user);
  }

/**
 * Metodo que registra al usario
 */
  registerUser(user) {
    this.storageService.setToLocalStorage(KeysStorage.KEY_USER_REGISTER, user);
    return this.http.post<any>(this.urlRegi, user);
  }

/**
 * Metodo que valida Email
 */
  validateEmail({ value }: FormControl): { [key: string]: any } {
    const val: string = value || '';
    if (val !== '') {
      // tslint:disable-next-line:max-line-length
      const valid = val.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      return valid ? null : { email: true };
    }
  }

/**
 * Metodo que real que va por el token en un fake response
 */
  /* public getToken(): Observable<any> {
    return this.http.get<any>(this.urlToken);
  }
   */
}

