import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapComponent } from './map.component';
import { AngularCesiumModule } from 'angular-cesium';
import { BillboardLayerExampleComponent } from './billboard-layer-example/billboard-layer-example.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  AngularCesiumModule.forRoot({fixEntitiesShadows: false, customPipes: []}) 
  ],
  declarations: [ AppComponent, MapComponent, BillboardLayerExampleComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
