import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { IAppUser } from '../app.interface';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private sharedService: SharedService) {}
  setAuthToken(): void {
    const user: IAppUser = {
      name: 'admin',
      email: 'admin@grampro.com',
      designation: 'Administrator',
      phone: '+911111111111',
      root: true,
    };
    localStorage.setItem('auth-token', JSON.stringify(user));
  }
  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('auth-token') || '{}');
    if (_.isEmpty(user)) {
      return false;
    } else {
      return true;
    }
  }
  userLogout() {
    localStorage.removeItem('auth-token');
    this.sharedService.loginStatus.emit(false);
    this.router.navigate(['login']);
  }
}
