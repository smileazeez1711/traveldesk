import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { CurrentUser } from '../model/account/current-user';
import { UtilsService } from '../common/utils.service';
import { Router } from '@angular/router';
import { AuthInterceptorService } from './auth-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {
  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    private router: Router,
    private authIntercepter: AuthInterceptorService
  ) {

  }

  get(url: string, additionalHeaders?: [], hideIndicator?: boolean): Observable<any> {
    this.showIndicator(hideIndicator);
    let headers = new HttpHeaders();
    if (additionalHeaders && additionalHeaders.length > 0) {
      headers = this.setHeaders(headers, additionalHeaders);
    }
    //this.setDefaultHeaders(url, headers);
    return this.http.get<any>(url, { headers: headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError('Error occured while processing the request')
      }),
      finalize(() => {
        this.hideIndicator(hideIndicator);
      })
    )
  }

  post(url: string, data: any, additionalHeaders?: [], hideIndicator?: boolean): Observable<any> {
    this.showIndicator(hideIndicator);
    let headers = new HttpHeaders();
    if (additionalHeaders && additionalHeaders.length > 0) {
      headers = this.setHeaders(headers, additionalHeaders);
    }
    //this.setDefaultHeaders(url, headers);
    return this.http.post<any>(url, data, { headers: headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigate(['/login']);
        }
        return throwError('Error occured while processing the request')
      }),
      finalize(() => {
        this.hideIndicator(hideIndicator);
      })
    )
  }

  private setHeaders(headers: HttpHeaders, additionalHeaders?: any): HttpHeaders {
    if (additionalHeaders) {
      for (let row = 0; row < additionalHeaders.length; row++) {
        headers.append(additionalHeaders[row].Key, additionalHeaders[row].Value);
      }
    }
    return headers;
  }

  private showIndicator(hideIndicator?: boolean): void {
    //show busy indicator
  }

  private hideIndicator(hideIndicator?: boolean): void {
    //hide busy indicator
  }

  setDefaultHeaders(url: string, headers: HttpHeaders) {
    headers.append('Content-Type', 'application/json; charset=utf-8');
    let user: any = localStorage.getItem('currentUser');
    const currentUser = this.utils.getUserAuthDetails();
    if (currentUser && !this.utils.isEmptyString(currentUser.Token)) {
      const withoutAuthenticationURL: string[] = ['/Authenticate/login'];
      let needAuthHeader = true;
      for (let i = 0; i <= withoutAuthenticationURL.length && needAuthHeader; i++) {
        if (url.includes(withoutAuthenticationURL[i])) {
          needAuthHeader = false;
        }
      }
      if (needAuthHeader) {
        headers.append('Authorization', `Bearer ` + currentUser.Token);
      }
    }
  }
}
