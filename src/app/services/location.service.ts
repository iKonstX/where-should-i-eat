import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

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
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public restaurants: IRestaurants[] = [];
  public filters: object[];

  constructor(private http: HttpClient) { }

  private location = new BehaviorSubject<any>({ lat: 0, lng: 0 }); // true is your initial value
  location$ = this.location.asObservable();

  private set locations(value: any) {
    this.location.next(value);
  }

  private get locations(): any {
    return this.location.getValue()
  }

  public getCurrentLocation(): any {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition((response) => {
        this.locations = {
          lat: response.coords.latitude,
          lng: response.coords.longitude
        };
      });
    }
    // TODO: message that geolocation not available
    else {
    }
  }

  public loadRestaurants(coords: ILocation = this.locations) {
    let params = new HttpParams().set("filter1", "1").set("paramName2", "paramValue2");
    return this.http.get('http://localhost:3000/places', { params })

  }
}
