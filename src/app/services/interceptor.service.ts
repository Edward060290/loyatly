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


@Injectable()
export class InterceptorService implements HttpInterceptor {

    /**
   * flag to indicate refreshToken
   */
  private isRefreshingToken = false;

    /**
   * Used to save token that can be change over time 
   */
  private tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    null
  );

  constructor( private http: HttpClient, private storageService: StorageService,
    private authService: AuthenticationService) { }

     /**
   * Add accestoken to request
   * @param req una peticion
   * @param token agrega token
   */
  private addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }


    /**
   * Interceptor para reenvio de intentos con algunos codigos de error
   * @param request Peticion interceptada
   * * @param next Siguiente paso a ejecutar
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
    .handle(
      this.addToken(request, this.storageService.getFromLocalStorage('token'))
    )
  }


   /**
   * Method that handle error 401
   * @param req Peticion que genera el error 401
   * @param next Accion a ejecutar despues de tratar el error
   */
  /* private handle401Error(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;
      // Reset here so that the following requests wait until the token
      // comes back from the refreshToken call.
      this.tokenSubject.next(null);
      return this.authService
        .refreshToken() 
        .switchMap((newToken: string) => {
          if (newToken) {
            // update token in localStorage
            this.isRefreshingToken = false;
            this.storageService.setToLocalStorage('token', newToken);
            this.tokenSubject.next(newToken);
            return next.handle(this.addToken(req, newToken));
          }
          // If we don't get a new token, redirect to login page
           this.router.navigate(['/']); 
        })
        .finally(() => {});
    } else {
      return this.tokenSubject
        .filter(token => token != null)
        .take(1) 
        .switchMap(token => {
          return next.handle(this.addToken(req, token));
        });
    }
  }
   */
}
