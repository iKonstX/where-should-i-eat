import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

//3rd party
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    SpinnerComponent,
    MapComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
