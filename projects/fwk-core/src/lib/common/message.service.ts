import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpWrapperService } from '../http/http-wrapper.service';
import { ICommonMessage } from '../model/generic/common-message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private commonMessage: BehaviorSubject<ICommonMessage | null> = new BehaviorSubject<ICommonMessage | null>(null);
  activeCommonMessage = this.commonMessage.asObservable();
  constructor(private httpService: HttpWrapperService) { }

  sendCommonMessage(message: ICommonMessage): void {
    this.commonMessage.next(message);
  }

}
