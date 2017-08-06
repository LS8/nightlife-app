import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private searchTerm: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSearch() {
    if (!this.searchTerm || !this.searchTerm.trim().length) {
      // display flash message to please enter something
      this.searchTerm = '';
      console.log('please enter somth');
    } else {
      this.router.navigate([`location/${this.searchTerm}`]);
    }
    // this.barService.getBarByLocation('hannover')
    //   .subscribe(data => {
    //     console.log(data);
    //   })
  }

}
