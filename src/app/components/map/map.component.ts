import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service'
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { setRestaurants, setSelectedRestaurant } from 'src/app/states/location/location.actions';

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
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  selectedRestaurant: any;
  state: any;
  store: any;
  constructor(private locationService: LocationService) {
    this.state = locationService.state;
    this.store = locationService.store;
  }


  ngOnInit() {
  }

}
