import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilsService } from '../common/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let user: any = localStorage.getItem('currentUser');
    const currentUser = this.utils.getUserAuthDetails();
    if (currentUser && !this.utils.isEmptyString(currentUser.Token)) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer` + currentUser.Token,
        },
      });

      return next.handle(req);
    } else {
      this.router.navigate(['/login']);
      return next.handle(req);
    }
  }
  constructor(private utils: UtilsService,
    private router: Router) { 
      let t = 10;
      t = t + 12;
    }
}
