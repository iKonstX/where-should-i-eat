import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { setRestaurants, setCurrentLocation } from 'src/app/states/location.actions';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public filters: object[];
  state$: any;
  constructor(private http: HttpClient, private store: Store<{ state: any }>) {
    this.store.subscribe((val) => {
      this.state$ = val.state
    });
  }

  public getCurrentLocation(): any {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition((response) => {
        this.store.dispatch(new setCurrentLocation({
          location: {
            lat: response.coords.latitude,
            lng: response.coords.longitude
          }
        }));
      });
    }
    // TODO: message that geolocation not available
    else {
    }
  }

  public loadRestaurants() {
    let params = new HttpParams().set("filter1", "1").set("paramName2", "paramValue2");
    return this.http.get('http://localhost:3000/places', { params })
  }

}
