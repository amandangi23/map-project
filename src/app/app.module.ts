import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { AddressMainComponent } from './components/address-main/address-main.component';
import { UserCurrentLocationComponent } from './components/user-current-location/user-current-location.component';
import { TestMarkerComponent } from './components/test-marker/test-marker.component';
// import { AgmCoreModule } from '@agm/core';  
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello.component';


@NgModule({
  declarations: [
    AppComponent, 
    MapComponent,
    AddressMainComponent,
    UserCurrentLocationComponent,
    HelloComponent,
    TestMarkerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDtnAASFjTTT2ufOxKKlD_RlrJ7axBleT0',
    // }),  
    
  ], 
  providers: [],
  bootstrap: [AppComponent] 
}) 
export class AppModule { } 

// npm install @types/googlemaps@latest --save-dev

 