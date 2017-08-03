import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class LoggedOutGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    if (!this.auth.loggedIn()) { // User is not logged in and should therefore be able to view routes for logged out users
      return true;
    } else {
      this.router.navigate(['']); // User is logged in, redirect to profile
      return false;
    }
  }
}
