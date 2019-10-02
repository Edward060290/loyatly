import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StorageService } from './storage.service';
import { KeysStorage } from '../model/key-storage';
import { Http } from '../../../node_modules/@angular/http';
import { Token } from '../model/token';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthenticationService {
 private urlAuth = 'http://localhost:3004/login';

 private urlRegi = 'http://localhost:3004/register';

 private urlToken = 'http://localhost:3004/token-number';
  constructor(private http: HttpClient, private httpOld: Http, private storageService:StorageService) { }

  logInUser(user) {
    this.storageService.setToLocalStorage(KeysStorage.KEY_USER_LOGIN, user);
    return this.http.post<any>(this.urlAuth, user);
  }

  registerUser(user){
    this.storageService.setToLocalStorage(KeysStorage.KEY_USER_REGISTER, user);
    return this.http.post<any>(this.urlRegi, user);
  }

  validateEmail({ value }: FormControl): { [key: string]: any } {
    const val: string = value || '';
    if (val !== '') {
      // tslint:disable-next-line:max-line-length
      const valid = val.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      return valid ? null : { email: true };
    }
  }

 
  public getToken(): Observable<string> {
    debugger

    return this.http.get<string>(this.urlToken).pipe(
      map((token: any) =>{
        return token;
      })
    );
}
  }

