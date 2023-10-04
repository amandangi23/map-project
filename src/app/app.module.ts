import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AddressMainComponent } from './components/address-main/address-main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MapComponent } from './components/autocomplete-address/map.component';
import { CordinatesLatLongComponent } from './components/cordinates-lat-long/cordinates-lat-long.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AddressMainComponent,
    CordinatesLatLongComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }