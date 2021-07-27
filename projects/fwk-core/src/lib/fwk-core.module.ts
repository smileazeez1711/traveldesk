import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './http/auth-interceptor.service';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi   : true
    }
  ]
})
export class FwkCoreModule { }
