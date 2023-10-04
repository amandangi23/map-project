import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AddressMainComponent } from './components/address-main/address-main.component';
import { MapComponent } from './components/autocomplete-address/map.component';
import { CordinatesLatLongComponent } from './components/cordinates-lat-long/cordinates-lat-long.component';
import { TestMarkerComponent } from './components/test-marker/test-marker.component';
import { UserCurrentLocationComponent } from './components/user-current-location/user-current-location.component';

@NgModule({
  declarations: [
    AppComponent, 
    MapComponent,
    AddressMainComponent,
    CordinatesLatLongComponent,
    TestMarkerComponent,
    UserCurrentLocationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }