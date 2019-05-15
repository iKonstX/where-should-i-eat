import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { setRestaurants } from 'src/app/states/location.actions';

@Component({
  selector: 'app-single-restaurant',
  templateUrl: './single-restaurant.component.html',
  styleUrls: ['./single-restaurant.component.css']
})
export class SingleRestaurantComponent implements OnInit {
  state$: any;
  constructor(private store: Store<{ state: any }>) {
    this.store.subscribe((val) => {
      this.state$ = val.state
    });
  }

  ngOnInit() {
  }

}
