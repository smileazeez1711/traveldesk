import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DepartmentM } from "../models/department";
import { ConfigService, HttpWrapperService } from '@esaf-platform-client/fwk-core'
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  apiEndpoint: string;
  apiUniqueId: string = 'department/id/D32A6CC9-353B-4E23-90FB-3C410CD6FD7E/';
  constructor(private httpService: HttpWrapperService,
    private configService: ConfigService
  ) {
    this.apiEndpoint = this.configService.getConfigValue('apiEndpoint');
    this.apiEndpoint += this.apiUniqueId;
  }

  getDepartmentByFilter(filter?: string): Observable<Array<DepartmentM>> {
    return this.httpService.get(this.apiEndpoint + 'getdepartmentbyfilter/' + (filter ? filter : '')).pipe(map((result: any) => {
      if (result.Success) {
        return result.Data;
      } else {
        return [];
      }      
    }));
  }
}
