import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetupService } from '../../services/setup.service'
import { LocationService } from '../../services/location.service'
import { MatStepper } from '@angular/material/stepper';

export enum ELocation {
  AWAIT = 0,
  GRANTED = 1,
  DENIED = 2
}

export enum ERestaurants {
  AWAIT = 0,
  FOUND = 1,
  NOTFOUND = 2
}

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  ELocation = ELocation;
  ERestaurant = ERestaurants;
  public stepState: any;
  public locState: any;
  min = 1;
  max = 50;
  enterManual = false;
  constructor(private setupService: SetupService, private locationService: LocationService) {
    this.stepState = this.setupService.state;
    this.locState = this.locationService.state;
    this.setupService.setStep(1);
  }

  ngOnInit() {
  }

  toggleManual() {
    this.enterManual = !this.enterManual;
  }

  handleAddressChange(event) {
    this.locationService.setCurrentLocation({ latitude: event.geometry.location.lat(), longitude: event.geometry.location.lng() })
  }

  selectionChange(event: any) {
    switch (event.selectedIndex) {
      case 0: {
        this.setupService.setStep(1);
        break;
      }
      case 1: {
        this.setupService.setStep(2);
        this.locationService.getCurrentLocation();
        break;
      }
      case 2: {
        this.setupService.setStep(3);
        this.locationService.loadRestaurants();
        break;
      }
    }
  }
}
