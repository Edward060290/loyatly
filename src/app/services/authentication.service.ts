import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
 private urlAuth = 'http://localhost:4200/login'

 private urlRegi = 'http://localhost:4200/login'
  constructor(private http: HttpClient) { }

  logInUser(user) {
    return this.http.post<any>(this.urlAuth, user);
  }

  registerUser(user){
    return this.http.post<any>(this.urlRegi, user);
  }
}
