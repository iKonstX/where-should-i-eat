import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './states/location.reducers';

import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

//3rd party
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MapComponent } from './components/map/map.component';
import { SingleRestaurantComponent } from './components/single-restaurant/single-restaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    SpinnerComponent,
    MapComponent,
    SingleRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAn19RJD6FC5aLwzr0AbsmzP4rmQjoJENU'
    }),
    BrowserAnimationsModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatListModule,
    HttpClientModule,
    MatToolbarModule,
    StoreModule.forRoot({ state: counterReducer }),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
