import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchTerm: string;

  constructor(
    private flashMsg: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSearch() {
    if (!this.searchTerm || !this.searchTerm.trim().length) {
      this.searchTerm = '';
      return this.flashMsg.show('Please enter something', { cssClass: 'notification is-danger' });
    } else {
      this.router.navigate([`location/${this.searchTerm}`]);
    }
  }

}
