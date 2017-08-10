import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class BarService {
  private url: string = '/api/bar';

  constructor(
    private http: Http
  ) { }

  getBarByLocation(location: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(`${this.url}/location/${location}`, { headers: headers })
      .map(res => res.json());
  }

  barAttendees(locations: object[]) {
    for (let i = 0; i < locations.length; i++) {
      return this.attendeesByBarId(locations[i]);
    }
  }

  attendeesByBarId(location) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.url}/attendees`, { barId: location.id }, { headers: headers })
      .map(res => res.json());
  }

  addUserToBar(barId) {
    let username = this.getUsernameFromLocalStorage();
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.url}/attend`, { barId: barId, username: username }, { headers: headers })
      .map(res => res.json());
  }

  removeUserFromBar(barId) {
    let username = this.getUsernameFromLocalStorage();
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.url}/cancel`, { barId: barId, username: username }, { headers: headers })
      .map(res => res.json());

  }

  getUsernameFromLocalStorage() {
    if (localStorage.getItem('_user')) {
      return JSON.parse(localStorage.getItem('_user')).username;
    }
  }
}
