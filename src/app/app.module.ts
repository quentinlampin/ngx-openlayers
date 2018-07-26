import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularOpenlayersModule } from 'ngx-openlayers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ClusterComponent } from './cluster/cluster.component';
import { BasicComponent } from './basic/basic.component';
import { RasterComponent } from './raster/raster.component';
import { ExamplesListComponent } from './examples-list/examples-list.component';
import { ExamplesItemComponent } from './examples-item/examples-item.component';
import { MapPositionComponent } from './map-position/map-position.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ClusterComponent,
    RasterComponent,
    ExamplesListComponent,
    ExamplesItemComponent,
    MapPositionComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, AngularOpenlayersModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
