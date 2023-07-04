import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Observable, Subject } from 'rxjs';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,

  clientId:
    '883027862073-vf176fao935jn0v3mh97srdvle1pnvde.apps.googleusercontent.com',
  scope: 'openid profile email',
};

export interface UserInfo {
  info: {
    sub: string;
    email: string;
    name: string;
    picture: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class GoogleApiService {
  gmail = 'https://gmail.googleapis.com';
  userProfileSubject = new Subject<UserInfo>();
  constructor(
    private readonly oAuthService: OAuthService,
    private _router: Router
  ) {}
  login() {
    this.oAuthService.configure(oAuthConfig);
    this.oAuthService.logoutUrl = 'https://www.google.com/accounts/Logout';
    this.oAuthService.loadDiscoveryDocument().then(() => {
      this.oAuthService.tryLoginImplicitFlow().then(() => {
        if (!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow();
        } else {
          this.oAuthService.loadUserProfile().then((userProfile) => {
            this.userProfileSubject.next(userProfile as UserInfo);
          });
        }
      });
    });
  }
  // emails(userId: string): Observable<any> {
  //   return this.httpClient.get(
  //     `${this.gmail}/gmail/v1/users/${userId}/messages`,
  //     { headers: this.authHeader() }
  //   );
  // }
  // getMail(userId: string, mailId: string): Observable<any> {
  //   return this.httpClient.get(
  //     `${this.gmail}/gmail/v1/users/${userId}/messages/${mailId}`,
  //     { headers: this.authHeader() }
  //   );
  // }
  isGoogleLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }
  // signOut() {
  //   this.oAuthService.logOut();
  //   // this._router.navigate(['login']);
  // }
  // private authHeader(): HttpHeaders {
  //   return new HttpHeaders({
  //     Authorization: `Bearer ${this.oAuthService.getAccessToken()}`,
  //   });
  // }

  // constructor(private http: HttpClient) {}
  // googleSignIn() {
  //   return this.http.post(
  //     `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${config.API_KEY}`
  //   );
  // }
}
