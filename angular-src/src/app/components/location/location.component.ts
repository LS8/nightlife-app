import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { BarService } from '../../services/bar.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  private locations: object[];
  private loaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private barService: BarService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.barService.getBarByLocation(params.get('location')))
      .subscribe(data => {
        console.log(data);

        if (data.success) {
          this.locations = JSON.parse(data.info).businesses;
          this.loaded = true;
          console.log(this.locations);
        }
      })
  }

}
