import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { CoreSaveService, UserLogin } from '@esaf-platform-client/fwk-core'
import { LoginService } from '@esaf-platform-client/auth-account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin = false;
  entity = new Login();
  constructor(private coreSaveService: CoreSaveService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginService.logOut();
  }

  ngOnInit(): void {
  }

  login() {
    let validations = this.coreSaveService.saveValidation(this.entity);
    if (validations.length === 0) {
      let user = new UserLogin(this.entity.Username, this.entity.Password);
      this.loginService.logIn(user).subscribe((user: any) => {
        this.router.navigate(['/home/dashboard']);
      },
        error => {
          this.invalidLogin = true;
        })
    }
  }

  focusOnCredentials(): void {
    this.invalidLogin = false;
  }

}
