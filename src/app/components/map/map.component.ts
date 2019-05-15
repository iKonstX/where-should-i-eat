import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service'
import { Subscription } from 'rxjs';

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
  public location: ILocation = { lat: 0, lng: 0 };
  public restaurants: IRestaurants[] = [];
  public selectedRestaurant: IRestaurants;
  public subscription: Subscription;
  constructor(private locationService: LocationService) {

  }


  ngOnInit() {
    this.subscription = this.locationService.location$
      .subscribe(location => this.location = location)
    this.loadMap()
  }

  loadMap() {
    this.locationService.getCurrentLocation();
    this.locationService.loadRestaurants().subscribe((res: any) => {
      res.forEach((restaurant: any) => {
        this.restaurants.push({
          geometry: restaurant.geometry.location,
          icon: restaurant.icon,
          name: restaurant.name,
          isOpen: restaurant.opening_hours,
          address: restaurant.vicinity
        })
      })
      this.selectRandomRestaurant();
    });
  }

  public selectRandomRestaurant(coords: IRestaurants[] = this.restaurants) {
    const restaurantSize = this.restaurants.length;
    const pickRestaurant = Math.floor(Math.random() * restaurantSize) + 1;

    this.selectedRestaurant = this.restaurants[pickRestaurant - 1]

    console.log(this.selectedRestaurant)
  }

}
