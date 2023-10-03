import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { AddressMainComponent } from './components/address-main/address-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AddressMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }