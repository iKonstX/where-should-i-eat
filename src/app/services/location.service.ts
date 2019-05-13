import { Injectable } from '@angular/core';

interface ILocation {
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  location: ILocation;

  constructor() { }

  getCurrentLocation(): ILocation {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((response) => {
        this.location = {
          lat: response.coords.latitude,
          lng: response.coords.longitude
        }
      });
      return this.location;
    }
    // TODO: message that geolocation not available
    else { }
  }

}
