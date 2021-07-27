import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FindingsM } from "../models/findings";
import { ConfigService, HttpWrapperService } from '@esaf-platform-client/fwk-core'
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FindingsService {
  apiEndpoint: string;
  apiUniqueId: string = 'findings/id/425E4C63-EA09-4AB0-BA9E-A9B8D057A446/';
  constructor(private httpService: HttpWrapperService,
    private configService: ConfigService
  ) {
    this.apiEndpoint = this.configService.getConfigValue('apiEndpoint');
    this.apiEndpoint += this.apiUniqueId;
  }

  GetFindingsByFilter(filter?: string): Observable<Array<FindingsM>> {
    return this.httpService.get(this.apiEndpoint + 'getfindingsbyfilter/' + (filter ? filter : '')).pipe(map((result: any) => {
      if (result.Success) {
        return result.Data;
      } else {
        return [];
      }      
    }));
  }
}
