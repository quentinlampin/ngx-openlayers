import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AngularOpenlayersModule} from 'ngx-openlayers';

import {AppComponent} from './app.component';
import { ol } from 'ol-cesium';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularOpenlayersModule.forRoot(ol)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
