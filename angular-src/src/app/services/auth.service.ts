import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private authUrl = 'http://localhost:8080/api/user';

  constructor(
    private http: Http
  ) { }

  login(user: object) {
    const url = `${this.authUrl}/authenticate`
    return this.http.post(url, user, { headers: this.headers })
      .map(res => res.json());
  }

}
