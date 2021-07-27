import { Injectable } from '@angular/core';
import { NotificationService } from "@progress/kendo-angular-notification";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private notificationService: NotificationService) { }

  showDefault(content: any, closable: boolean = false, position?: any, duration?: number): void {
    this.show(content, closable, 'none', position, duration);
  }

  showSuccess(content: any, closable: boolean = false, position?: any, duration?: number): void {
    this.show(content, closable, 'success', position, duration);
  }

  showWarning(content: any, closable: boolean = true, position?: any, duration?: number): void {
    this.show(content, closable, 'warning', position, duration);
  }

  showInfo(content: any, closable: boolean = false, position?: any, duration?: number): void {
    this.show(content, closable, 'info', position, duration);
  }

  showError(content: any, closable: boolean = true, position?: any, duration?: number): void {
    this.show(content, closable, 'error', position, duration);
  }

  private show(content: any, closable: boolean, style: any, position?: any, duration?: number): void {
    let durationN = duration? (Number) (duration) : 800;
    this.notificationService.show({
      content: content,
      cssClass: "button-notification",
      animation: { type: "fade", duration: durationN },
      position: position ? position : { horizontal: "right", vertical: "top" },
      type: { style: style, icon: true },
      closable: closable,
      hideAfter: 2000
    });
  }
}
