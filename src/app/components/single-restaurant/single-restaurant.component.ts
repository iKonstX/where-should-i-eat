import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { setRestaurants } from 'src/app/states/location/location.actions';

@Component({
  selector: 'app-single-restaurant',
  templateUrl: './single-restaurant.component.html',
  styleUrls: ['./single-restaurant.component.css']
})
export class SingleRestaurantComponent implements OnInit {
  state$: any;
  constructor(private store: Store<{ locationState: any }>) {
    this.store.subscribe((val) => {
      this.state$ = val.locationState
    });
  }

  ngOnInit() {
  }

}
