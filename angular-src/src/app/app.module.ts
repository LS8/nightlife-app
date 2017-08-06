import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { AgmCoreModule } from '@agm/core';

import { Router } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LocationComponent } from './components/location/location.component';
import { MapComponent } from './components/map/map.component';
import { LocationListitemComponent } from './components/location-listitem/location-listitem.component';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { BarService } from './services/bar.service';
import { LoggedInGuard } from './guards/logged-in.guard';
import { LoggedOutGuard } from './guards/logged-out.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    LocationComponent,
    MapComponent,
    LocationListitemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Router,
    HttpModule,
    FlashMessagesModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyDOcoSg52di_1ZCYzNunSWoxzeyQggx0hs' })
  ],
  providers: [
    AuthService,
    UserService,
    BarService,
    LoggedOutGuard,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
