import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { StorageService } from './storage.service';
import 'rxjs/add/operator/filter';
import { AuthenticationService } from './authentication.service';
import { KeysStorage } from '../model/key-storage';

/**
 * Ineceptor que injecta token en las cabesera Authorization 
 */
@Injectable()
export class InterceptorService implements HttpInterceptor {

  /**
  * Constructor que injecta los servicio de uso nesesario para el servicio 
  */
  constructor(private http: HttpClient, private storageService: StorageService,
    private authenticationService: AuthenticationService) {
    // subscribe del metodo al servicio fake del token
    /*    this.authenticationService.getToken().pipe(map( data => this.token)).subscribe(result =>{
         console.log(result);
       }) */
    // servicio fake del token
    this.storageService.setToLocalStorage(KeysStorage.TOKEN, 'asfwefasfasdfa0088');
  }

  /**
   * Interceptor que injecta el token en la cabesera
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.storageService.getFromLocalStorage(KeysStorage.TOKEN);
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(request);
  }


}
