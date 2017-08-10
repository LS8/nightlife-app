import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public username: string;
  public password1: string;
  public password2: string;

  constructor(
    private flashMsg: FlashMessagesService,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    if (!this.username || !this.password1 || !this.password2) {
      return this.flashMsg.show('Please fill out all fields', { cssClass: 'notification is-danger' });
    } else if (this.password1 !== this.password2) {
      this.password1 = '';
      this.password2 = '';
      return this.flashMsg.show('Passwords do not match', { cssClass: 'notification is-danger' });
    }
    this.username = this.username.trim();

    this.auth.register({ username: this.username, password: this.password1 })
      .subscribe(data => {
        // Registration denied
        if (!data.success) {
          if (data.status === 1) { // err
            return this.flashMsg.show(data.msg, { cssClass: 'notification is-danger' });
          } else if (data.status === 2) { // username already exists
            this.username = '';
            this.password1 = '';
            this.password2 = '';
            return this.flashMsg.show(data.msg, { cssClass: 'notification is-danger' });
          } else { // nothing
            return this.flashMsg.show(data.msg, { cssClass: 'notification is-danger' });
          }
        }
        // Registration allowed
        if (data.success) {
          return this.router.navigate(['login']);
        }
      })


  }

}
