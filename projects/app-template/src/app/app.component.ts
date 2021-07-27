import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationError, NavigationEnd } from '@angular/router';
import { ConfigService } from '@esaf-platform-client/fwk-core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin: boolean = true;
  constructor(private router: Router,
    private configService: ConfigService) {
        
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/login') {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      }

      if (event instanceof NavigationError) {
        // Handle error
        console.error(event.error);
      }

      if (event instanceof NavigationEnd) {
        //do something on end activity
      }
    });
  }

  title = 'app-template';
  selectedValue: any;
  entity: any = {};
  public listItems: any = [
    { SizeName: 'Small', SizeID: 1 },
    { SizeName: 'Medium', SizeID: 2 },
    { SizeName: 'Large', SizeID: 3 }
  ];

  sizeChanged(event: any) {

  }

  filterChanged(event: any) {

  }
}
