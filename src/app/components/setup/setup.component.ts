import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetupService } from '../../services/setup.service'
import { LocationService } from '../../services/location.service'
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  public stepState: any;
  public locState: any;
  value = 0;
  min = 1;
  max = 50;
  constructor(private setupService: SetupService, private locationService: LocationService) {
    this.stepState = this.setupService.state;
    this.locState = this.locationService.state;
    this.setupService.setStep(1);
  }

  ngOnInit() {
  }

  nextStep(stepper: MatStepper) {
    stepper.next();
    this.setupService.nextStep();
  }

  prevStep(stepper: MatStepper) {
    stepper.previous();
    this.setupService.prevStep();
  }

  loadRestaurants(stepper: MatStepper) {
    this.locationService.loadRestaurants()
    this.nextStep(stepper);
  }

}
