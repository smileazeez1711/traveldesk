import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from '../../../app/users/model/registration'
import { ConfigService, HttpWrapperService } from '@esaf-platform-client/fwk-core'
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiEndpoint: string;
  apiUniqueId: string = 'users/id/D32A6CC9-353B-4E23-90FB-3C410CD6FD7E/';
  constructor(private httpService: HttpWrapperService,
    private configService: ConfigService
  ) {
    this.apiEndpoint = this.configService.getConfigValue('apiEndpoint');
    this.apiEndpoint += this.apiUniqueId;
  }

  getusersByFilter(): Observable<Array<Users>> {
    return this.httpService.get(this.apiEndpoint + 'getusersbyfilter').pipe(map((result: any) => {
      if (result.Success) {
        return result.Data;
      } else {
        return [];
      }      
    }));
  }
  ViewUsers(userID?: number): Observable<Array<Users>> {
    return this.httpService.get(this.apiEndpoint + 'ViewUsers/'+ (userID ? userID : '')).pipe(map((result: any) => {
      if (result.Success) {
        return result.Data;
      } else {
        return [];
      }      
    }));
  }
  saveregisteredusers(registeredusers: Users): Observable<any> {
    return this.httpService.post(this.apiEndpoint + 'saveregisteredusers/',registeredusers).pipe(map((result: any) => {
      if (result.Success) {
        return result.Data;
      } else {
        return [];
      }      
    }));
  }
}
