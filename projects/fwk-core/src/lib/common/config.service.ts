import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpWrapperService } from '../http/http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  configData: { [key: string]: string };
  constructor(private httpService: HttpWrapperService) { }

  loadConfig() {
    return new Promise((resolve) => {
      this.httpService.get('/assets/appSettings.json').subscribe((data: { [key: string]: string }) => {
        this.configData = data;
        resolve(true);
      });
    });    
  }

  getConfigValue(key: string): string {
    if (key && key.trim() !== '') {
      return this.configData[key];
    }
    return '';
  }
}
