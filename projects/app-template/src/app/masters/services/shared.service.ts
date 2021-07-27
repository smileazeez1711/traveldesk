import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public sideBarStatus: EventEmitter<'sidebar-expanded' | 'sidebar-collapsed'> =
    new EventEmitter();
  public loginStatus: EventEmitter<boolean> = new EventEmitter();
  constructor() {}
  changeSideBarStatus(status: 'sidebar-expanded' | 'sidebar-collapsed') {
    this.sideBarStatus.emit(status);
  }
}
