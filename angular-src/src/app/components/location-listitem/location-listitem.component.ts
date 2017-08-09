import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service'
import { BarService } from '../../services/bar.service'

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-location-listitem',
  templateUrl: './location-listitem.component.html',
  styleUrls: ['./location-listitem.component.css']
})
export class LocationListitemComponent implements OnInit {
  private userLoggedIn: boolean;
  private alreadyVoted: boolean;

  constructor(
    private flashMsg: FlashMessagesService,
    private barService: BarService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userLoggedIn = this.authService.loggedIn();
    let username = this.barService.getUsernameFromLocalStorage();
    this.checkAttendees(this.location, username);

  }

  @Input() location: object;
  @Input() index: number;

  removeUserFromBar() {
    this.barService.removeUserFromBar(this.location["id"])
      .subscribe(data => {
        if (data.success) {
          this.location["attendees"] = data.attendees;
          this.alreadyVoted = false;
        } else {
          return this.flashMsg.show(data.msg, { cssClass: 'notification is-danger' });
        }
      });
  }

  addUserToBar() {
    if (!this.userLoggedIn) { // User is not logged in and can therefore not vote
      return this.flashMsg.show('Please login to add yourself to a location', { cssClass: 'notification is-danger' });
    }

    let username = this.barService.getUsernameFromLocalStorage();
    if (this.location["attendees"].includes(username)) { // user already voted for that location
      return;
    } else {                                            // user is able to vote
      let locationId = this.location["id"];
      this.barService.addUserToBar(locationId)
        .subscribe(data => {
          this.location["attendees"] = data.attendees;
          this.alreadyVoted = true;
        })
    }

  }

  checkAttendees(location: object, username) {
    this.barService.attendeesByBarId(location)
      .subscribe(data => {
        Object.defineProperty(location, 'attendees', {
          value: data.attendees,
          writable: true,
          enumerable: true,
          configurable: true
        });
        if (this.location["attendees"].includes(username)) {
          this.alreadyVoted = true;
        }
      });
  }

}
