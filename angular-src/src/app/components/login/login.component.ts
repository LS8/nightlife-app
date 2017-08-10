import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private username: string;
  private password: string;

  constructor(
    private flashMsg: FlashMessagesService,
    private location: Location,
    private auth: AuthService,
    private router: Router,
  ) { }


  onLoginSubmit() {

    if (!this.username || !this.password) {
      return this.flashMsg.show('Please enter your username and password', { cssClass: 'notification is-danger' });
    }

    this.username = this.username.trim();

    this.auth.login({ username: this.username, password: this.password })
      .subscribe(data => {

        // Login denied
        if (!data.success) {
          if (data.status === 1) {
            this.flashMsg.show('Wrong username!', { cssClass: 'notification is-danger' });
          } else if (data.status === 2) {
            this.flashMsg.show('Wrong password!', { cssClass: 'notification is-danger' });
          } else {
            this.flashMsg.show(data.msg, { cssClass: 'notification is-danger' });
          }
          this.username = '';
          this.password = '';
          return;
        }

        // Login allowed
        if (data.success && data.status === 0) {
          this.auth.storeToken(data.token, data.user);
          return this.location.back();
        } else {
          this.flashMsg.show('Error', { cssClass: 'notification is-danger' });
        }

      });
  }

}
