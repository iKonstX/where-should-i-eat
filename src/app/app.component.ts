import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LocationService } from './services/location.service';
import { SetupService } from './services/setup.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'where-should-i-eat';
  setupState: any;
  constructor(private locationService: LocationService, private setupService: SetupService) {
    this.locationService.getCurrentLocation();
    this.setupState = this.setupService.state;
  }


}
