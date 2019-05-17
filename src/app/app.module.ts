import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//3rd party
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";


// States
import { StoreModule } from '@ngrx/store';
import { ActionReducerMap } from "@ngrx/store";
import * as location from './states/location/location.reducers';
import * as setup from './states/setup/setup.reducers';

interface AppState {
  locationState: location.LocationState;
  setupState: setup.SetupState;
}

const reducers: ActionReducerMap<AppState> = {
  locationState: location.reducer,
  setupState: setup.reducer
};

import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MapComponent } from './components/map/map.component';
import { SingleRestaurantComponent } from './components/single-restaurant/single-restaurant.component';
import { SetupComponent } from './components/setup/setup.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    SpinnerComponent,
    MapComponent,
    SingleRestaurantComponent,
    SetupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAn19RJD6FC5aLwzr0AbsmzP4rmQjoJENU'
    }),
    BrowserAnimationsModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatListModule,
    HttpClientModule,
    MatToolbarModule,
    StoreModule.forRoot(reducers),
    MatButtonModule,
    MatSliderModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
