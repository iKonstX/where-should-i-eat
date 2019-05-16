import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-single-restaurant',
  templateUrl: './single-restaurant.component.html',
  styleUrls: ['./single-restaurant.component.css']
})
export class SingleRestaurantComponent implements OnInit {
  state: any;
  constructor(private locationService: LocationService) {
    this.state = locationService.state;
  }

  ngOnInit() {
  }

}
