import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private username: string;
  private attendingEvents: string[]

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserProfileData()
      .subscribe(data => {
        if (data.success) {
          this.username = data.user.username;
          this.attendingEvents = data.user.attending;
          console.log(this.attendingEvents);
        }
        // Todo Error checkickg etc
        // Todo in express app: correctly add bar to attending array in user model
      });
  }

}
