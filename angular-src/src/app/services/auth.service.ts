import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  // private user: Object;
  private token;
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  private authUrl: string = 'http://localhost:8080/api/user';

  constructor(
    private http: Http
  ) { }

  login(user: object) {
    const url = `${this.authUrl}/authenticate`
    return this.http.post(url, user, { headers: this.headers })
      .map(res => res.json());
  }

  register(user: object) {
    const url = `${this.authUrl}/register`
    return this.http.post(url, user, { headers: this.headers })
      .map(res => res.json());
  }

  storeToken(token, user: Object) {
    localStorage.setItem('_token', token);
    localStorage.setItem('_user', JSON.stringify(user));
    this.token = token;
  }

  loggedIn() {
    return tokenNotExpired('_token');
  }

  logOut() {
    return localStorage.clear();
  }

}
