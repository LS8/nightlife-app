import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() locations: object[];
  @Input() lat: number;
  @Input() lng: number;


  constructor() { }

  ngOnInit() {
  }

  onClick(markerCoords) {
    this.lat = markerCoords.latitude;
    this.lng = markerCoords.longitude;
  }

  mouseOver(locationName) {
    // console.log(locationName);
  }

}
