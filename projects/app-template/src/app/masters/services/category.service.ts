import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryM } from "../models/category";
import { ConfigService, HttpWrapperService } from '@esaf-platform-client/fwk-core'
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiEndpoint: string;
  apiUniqueId: string = 'category/id/187957E1-7A91-405A-A293-000DA557BAB8/';
  constructor(private httpService: HttpWrapperService,
    private configService: ConfigService
  ) {
    this.apiEndpoint = this.configService.getConfigValue('apiEndpoint');
    this.apiEndpoint += this.apiUniqueId;
  }

  getCategoryByFilter(filter?: string): Observable<Array<CategoryM>> {
    return this.httpService.get(this.apiEndpoint + 'getcategorybyfilter/' + (filter ? filter : '')).pipe(map((result: any) => {
      if (result.Success) {
        return result.Data;
      } else {
        return [];
      }      
    }));
  }
}
