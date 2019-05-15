import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service'
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { setRestaurants } from 'src/app/states/location.actions';

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
  state$: any;
  constructor(private locationService: LocationService, private store: Store<{ state: any }>) {
  }


  ngOnInit() {
    this.store.subscribe((val) => {
      this.state$ = val.state
      console.log(this.state$)
    });
    console.log(this.state$)
    this.loadMap()
  }

  loadMap() {
    this.locationService.getCurrentLocation();
    this.locationService.loadRestaurants().subscribe((res: any) => {
      res.forEach((restaurant: any) => {
        this.store.dispatch(new setRestaurants({
          restaurants: {
            geometry: restaurant.geometry.location,
            icon: restaurant.icon,
            name: restaurant.name,
            isOpen: restaurant.opening_hours,
            address: restaurant.vicinity
          }
        }));
      })
      this.selectRandomRestaurant();
    });
  }

  public selectRandomRestaurant() {
    const restaurantSize = this.state$.restaurants.length;
    const pickRestaurant = Math.floor(Math.random() * restaurantSize) + 1;

    this.selectedRestaurant = this.state$.restaurants[pickRestaurant - 1]

    console.log(this.selectedRestaurant)
  }

}
