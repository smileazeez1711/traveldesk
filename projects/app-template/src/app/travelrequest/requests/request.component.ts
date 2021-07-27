import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  showCreate = false;
  showView = false;
  
  constructor() { 
    
  }

  ngOnInit(): void { 
    //this.currentMsgToChild1="2";
  }

  createRequest(): void {
    //this.showCreate = false;
    this.showCreate = true;
  }
/*   ViewRequests(): void {
    //this.showCreate = false;
    this.showView = true;    
  } */
}
