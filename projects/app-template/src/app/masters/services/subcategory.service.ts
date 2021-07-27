import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SubCategoryM } from "../models/subcategory";
import { ConfigService, HttpWrapperService } from '@esaf-platform-client/fwk-core'
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  apiEndpoint: string;
  apiUniqueId: string = 'subcategory/id/88AD970D-C380-4B6A-9CCC-8165D9E18937/';
  constructor(private httpService: HttpWrapperService,
    private configService: ConfigService
  ) {
    this.apiEndpoint = this.configService.getConfigValue('apiEndpoint');
    this.apiEndpoint += this.apiUniqueId;
  }

  GetSubCategoryByFilter(filter?: string, categoryId?: number): Observable<Array<SubCategoryM>> {
    return this.httpService.get(this.apiEndpoint + 'getsubcategorybyfilter?filter=' + (filter ? filter : '') + '&categoryId=' + (categoryId ? categoryId : '')).pipe(map((result: any) => {
      if (result.Success) {
        return result.Data;
      } else {
        return [];
      }      
    }));
  }
}
