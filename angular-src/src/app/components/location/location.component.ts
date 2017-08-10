import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { BarService } from '../../services/bar.service';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  private locations: object[];
  public loaded: boolean = false;
  private region;

  constructor(
    private flashMsg: FlashMessagesService,
    private route: ActivatedRoute,
    private barService: BarService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.barService.getBarByLocation(params.get('location')))
      .subscribe(data => {
        if (data.success) {
          this.locations = JSON.parse(data.info).businesses;
          this.loaded = true;
          this.region = JSON.parse(data.info).region.center;
        } else {
          return this.flashMsg.show(data.msg, { cssClass: 'notification is-danger' });
        }
      })
  }

}
