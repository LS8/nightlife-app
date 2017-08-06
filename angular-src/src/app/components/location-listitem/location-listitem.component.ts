import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-listitem',
  templateUrl: './location-listitem.component.html',
  styleUrls: ['./location-listitem.component.css']
})
export class LocationListitemComponent {

  constructor() { }

  @Input() location: object;

}
