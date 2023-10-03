import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { AddressMainComponent } from './components/address-main/address-main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyDtnAASFjTTT2ufOxKKlD_RlrJ7axBleT0'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }