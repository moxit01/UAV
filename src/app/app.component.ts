import { Component , ElementRef} from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';

declare let L;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  map: Map;
  title = 'UAV-NEW';

}
