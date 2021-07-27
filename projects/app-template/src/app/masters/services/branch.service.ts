import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BranchM } from "../models/branch";
import { ConfigService, HttpWrapperService } from '@esaf-platform-client/fwk-core'
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  apiEndpoint: string;
  apiUniqueId: string = 'branch/id/4435CC76-8F71-437A-9F6D-1DCEBAF85EB7/';
  constructor(private httpService: HttpWrapperService,
    private configService: ConfigService
  ) {
    this.apiEndpoint = this.configService.getConfigValue('apiEndpoint');
    this.apiEndpoint += this.apiUniqueId;
  }

  getBranchByFilter(filter?: string): Observable<Array<BranchM>> {
    return this.httpService.get(this.apiEndpoint + 'getbranchbyfilter/' + (filter ? filter : '')).pipe(map((result: any) => {
      if (result.Success) {
        return result.Data;
      } else {
        return [];
      }      
    }));
  }
}
