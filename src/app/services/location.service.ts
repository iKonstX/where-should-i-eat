import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { setRestaurants, setCurrentLocation, setSelectedRestaurant, setLocationAccess, setRestaurantResult } from 'src/app/states/location/location.actions';
import { setStep } from '../states/setup/setup.actions';
import { ELocationAccess, ERestaurants } from '../states/location/location.reducers';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public filters: object[];
  public state: any;
  constructor(private http: HttpClient, public store: Store<{ locationState: any }>) {
    this.store.subscribe((val) => {
      this.state = val.locationState
    });
  }

  public async setCurrentLocation(loc) {
    this.store.dispatch(new setCurrentLocation({
      location: {
        lat: loc.latitude,
        lng: loc.longitude
      }
    }));
    this.store.dispatch(new setLocationAccess({
      access: ELocationAccess.GRANTED
    }));
  }

  public async getCurrentLocation() {
    if (navigator.geolocation) {
      return await navigator.geolocation.getCurrentPosition((response) => {
        this.store.dispatch(new setCurrentLocation({
          location: {
            lat: response.coords.latitude,
            lng: response.coords.longitude
          }
        }));
        this.store.dispatch(new setLocationAccess({
          access: ELocationAccess.GRANTED
        }));
      },
        (err) => {
          this.store.dispatch(new setLocationAccess({
            access: ELocationAccess.DENIED
          }));
        });
    }
    // TODO: message that geolocation not available
    else {
      return false;
    }
  }

  public loadRestaurants() {

    this.store.dispatch(new setRestaurantResult({ result: ERestaurants.AWAIT }));

    let params = new HttpParams().set("lat", String(this.state.location.lat)).set("lng", String(this.state.location.lng))
      .set("radius", String(this.state.filters.radius));

    return this.http.get('http://localhost:3000/places', { params }).subscribe((res: any) => {
      console.log(res)
      if (res.length === 0) {
        this.store.dispatch(new setRestaurantResult({ result: ERestaurants.NOTFOUND }));
        return;
      }

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
    }, err => {
      this.store.dispatch(new setRestaurantResult({ result: ERestaurants.NOTFOUND }));
      return;
    });
  }

  public selectRandomRestaurant() {
    const restaurantSize = this.state.restaurants.length;
    const pickRestaurant = Math.floor(Math.random() * restaurantSize) + 1;

    this.store.dispatch(new setSelectedRestaurant({ restaurant: this.state.restaurants[pickRestaurant - 1] }))
    this.store.dispatch(new setStep({ step: 4 }))
  }

}
