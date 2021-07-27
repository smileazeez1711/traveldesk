import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TravelRequests } from "../../travelrequest/model/requestclass";
import { ConfigService, HttpWrapperService } from '@esaf-platform-client/fwk-core'
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TravelrequetsService {
  apiEndpoint: string;
  apiUniqueId: string = 'requests/id/D32A6CC9-353B-4E23-90FB-3C410CD6FD7E/';
  constructor(private httpService: HttpWrapperService,
    private configService: ConfigService
  ) {
    this.apiEndpoint = this.configService.getConfigValue('apiEndpoint');
    this.apiEndpoint += this.apiUniqueId;
  }

  getTravelRequests(): Observable<Array<TravelRequests>> {
    
    return this.httpService.get(this.apiEndpoint + 'getTravelRequests').pipe(map((result: any) => {
      if (result.Success) {
        return result.Data;
      } else {
        return [];
      }      
    }));
  }
  
  ViewTravelRequest(requestID?: number): Observable<Array<TravelRequests>> {
    return this.httpService.get(this.apiEndpoint + 'ViewTravelRequest/' + (requestID ? requestID : '')).pipe(map((result: any) => {
      if (result.Success) {
        return result.Data;
      } else {
        return [];
      }      
    }));
  }

  modifyTravelRequests(_travelRequests: TravelRequests): Observable<any> {
    return this.httpService.post(this.apiEndpoint + 'modifyTravelRequests/',_travelRequests).pipe(map((result: any) => {
      if (result.Success) {
        return result.Data;
      } else {
        return [];
      }      
    }));
  }
}
