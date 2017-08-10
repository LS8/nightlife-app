import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private url: string = '/api/user';

  constructor(private http: Http) { }

  getUserProfileData() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let token = localStorage.getItem('_token');
    headers.append('Authorization', token);
    return this.http.get(this.url, { headers: headers })
      .map(res => res.json());
  }

  addUserToBar() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let token = localStorage.getItem('_token');
    headers.append('Authorization', token);
    // Todo Post: userId: mongoId, barName: barname string
    return this.http.post(`${this.url}/attend`, { headers: headers })
      .map(res => res.json());
  }

}
