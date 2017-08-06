import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class BarService {
  private url: string = 'http://localhost:8080/api/bar/location';

  constructor(
    private http: Http
  ) { }

  getBarByLocation(location: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(`${this.url}/${location}`, { headers: headers })
      .map(res => res.json());
  }

}
