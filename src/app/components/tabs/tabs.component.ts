import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(private locationService: LocationService) { }

  ngOnInit() {

  }
  ngAfterViewInit() {
  }


}
