import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { StorageService } from './storage.service';
import 'rxjs/add/operator/filter';
import { AuthenticationService } from './authentication.service';
import { Token } from '../model/token';
import { KeysStorage } from '../model/key-storage';



@Injectable()
export class InterceptorService implements HttpInterceptor {


 token = {}
  tokenNumber = new Token();


    /**
   * Used to save token that can be change over time 
   */
  private tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    null
  );

  constructor( private http: HttpClient, private storageService: StorageService,
    private authenticationService: AuthenticationService) {
      debugger
     this.token = this.authenticationService.getToken()
    /*  this.storageService.setToLocalStorage(KeysStorage.TOKEN, 'asfwefasfasdfa0088'); */
    }



    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger
    const token = this.storageService.getFromLocalStorage(KeysStorage.TOKEN)
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(request);
    }


}
