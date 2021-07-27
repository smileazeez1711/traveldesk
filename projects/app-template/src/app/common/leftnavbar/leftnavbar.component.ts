import { Component, OnInit } from '@angular/core';
// import { LoginService } from '../../services/login.service';
// import { UserLogin } from '../../models/user/user-login';

@Component({
  selector: 'app-leftnavbar',
  templateUrl: './leftnavbar.component.html',
  styleUrls: ['./leftnavbar.component.css']
})
export class AppLeftnavbarComponent implements OnInit {
  // currentUser: UserLogin;
  currentUser = true;
  menuList: any;
  constructor(/*private loginService: LoginService*/) {
    //this.loginService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    this.menuList = [
      { Caption: 'MainMenu', Text: 'Menu', IconClass: 'bi bi-grid-fill', Link: '/home' },
      { Caption: 'Dashboard', Text: 'Dashboard', IconClass: 'bi bi-speedometer2', Link: '/home/dashboard' },
      { Caption: 'Settings', Text: 'Settings', IconClass: 'bi-gear-wide-connected', Link: '/home' },
      { Caption: 'Ticket', Text: 'Ticket', IconClass: 'bi bi-clipboard-data', Link: '/helpdesk/creation' },      
      { Caption: 'Registration', Text: 'Registration', IconClass: 'bi bi-person-plus-fill', Link: '/users/registration' },
      { Caption: 'Request', Text: 'Request', IconClass: 'bi bi-globe', Link: '/travelrequest/request' }
    ];
  }

  navigateToPage(): void {

  }

}
