import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private fixated: boolean = false;
  private openedInfoWindowId: number;

  @Input() locations: object[];
  @Input() lat: number;
  @Input() lng: number;


  constructor() { }

  ngOnInit() {
  }

  onClick(markerCoords, infoWindowId) {
    this.fixated = true;
    this.openedInfoWindowId = infoWindowId;
    this.lat = markerCoords.latitude;
    this.lng = markerCoords.longitude;
  }

  mouseOver(infoWindow) {
    infoWindow.open();
  }

  mouseOut(infoWindow) {
    if (!this.fixated || infoWindow._id != this.openedInfoWindowId) {
      infoWindow.close();
    }
  }

  infoWindowClose(id) {
    if (id == this.openedInfoWindowId) {
      this.fixated = false;
    }
  }

}
