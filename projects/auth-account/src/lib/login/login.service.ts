import { Injectable } from '@angular/core';
import { UserLogin, CurrentUser, HttpWrapperService, ConfigService, UtilsService } from '@esaf-platform-client/fwk-core'
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<CurrentUser | null>;
  public currentUser: Observable<CurrentUser | null>;
  apiEndpoint: string;
  constructor(
    private httpService: HttpWrapperService,
    private configService: ConfigService,
    private utils: UtilsService
  ) {
    let user = localStorage.getItem('currentUser');
    this.apiEndpoint = this.configService.getConfigValue('apiEndpoint');
    const currentUser = this.utils.getUserAuthDetails();
    this.currentUserSubject = new BehaviorSubject<CurrentUser | null>(currentUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  logIn(userLogin: UserLogin): Observable<CurrentUser> {
    return this.httpService.post(this.apiEndpoint + 'Authenticate/login', userLogin).pipe(tap((user: CurrentUser) => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }));
  }

  logOut(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }  

  isLoggedIn(): boolean {
    var currentUser = this.utils.getUserAuthDetails();
    if (this.currentUserSubject.value && !this.utils.isEmptyString(currentUser.Token)) {
      return true;
    } else {
      return false;
    }
  }
}
