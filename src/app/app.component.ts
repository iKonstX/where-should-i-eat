import { Component } from '@angular/core';
import { LocationService } from './services/location.service'

interface ILocation {
  lat: number;
  lng: number;
}

interface IRestaurants {
  geometry: ILocation;
  icon: string;
  name: string;
  isOpen: boolean;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'where-should-i-eat';
  public location: ILocation = { lat: 0, lng: 0 };
  public restaurants: IRestaurants[] = [];
  constructor(private locationService: LocationService) {
  }


}
