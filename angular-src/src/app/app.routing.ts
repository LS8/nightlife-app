import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LocationComponent } from './components/location/location.component';

import { LoggedInGuard } from './guards/logged-in.guard';
import { LoggedOutGuard } from './guards/logged-out.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedOutGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoggedOutGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [LoggedInGuard]
  },
  {
    path: 'location/:location',
    component: LocationComponent
  }
];

export const Router: ModuleWithProviders = RouterModule.forRoot(routes);
