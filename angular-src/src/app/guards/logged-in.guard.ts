import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    if (this.auth.loggedIn()) { // User is logged in and should therefore be able to view routes for logged in users
      return true;
    } else {
      this.router.navigate(['login']); // User is logged out, redirect to login page
      return false;
    }
  }
}
