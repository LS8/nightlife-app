import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private authUrl: string = 'http://localhost:8080/api/user';
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getUserProfileData() {
    let token = localStorage.getItem('_token');
    this.headers.append('Authorization', token);
    return this.http.get(this.authUrl, { headers: this.headers })
      .map(res => res.json());
  }

  addUserToBar() {
    let token = localStorage.getItem('_token');
    this.headers.append('Authorization', token);
    // Todo Post: userId: mongoId, barName: barname string
    return this.http.post(`${this.authUrl}/attend`, { headers: this.headers })
      .map(res => res.json());
  }
}
