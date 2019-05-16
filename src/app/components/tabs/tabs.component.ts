import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service'
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { setRestaurants } from 'src/app/states/location/location.actions';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  state: any;
  constructor(private locationService: LocationService) {
    this.state = locationService.state;
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
  }


}
