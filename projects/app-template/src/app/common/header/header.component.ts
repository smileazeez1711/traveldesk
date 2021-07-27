import { Component, OnInit } from '@angular/core';
// import { LoginService } from '../../services/login.service';
// import { UserLogin } from '../../models/user/user-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //currentUser: UserLogin;
  currentUser = true;
  constructor(/*private loginService: LoginService*/) {
    //this.loginService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

  logOut(): void {
    //this.loginService.logOut();
  }

}
