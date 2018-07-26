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
import { CursorPositionComponent } from './cursor-position/cursor-position.component';
import { DisplayGeometryComponent } from './display-geometry/display-geometry.component';
import { DisplayGeojsonSourceComponent } from './display-geojson-source/display-geojson-source.component';
import { DrawPolygonComponent } from './draw-polygon/draw-polygon.component';
import { ModifyPolygonComponent } from './modify-polygon/modify-polygon.component';
import { SideBySideComponent } from './side-by-side/side-by-side.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ClusterComponent,
    RasterComponent,
    ExamplesListComponent,
    ExamplesItemComponent,
    MapPositionComponent,
    CursorPositionComponent,
    DisplayGeometryComponent,
    DisplayGeojsonSourceComponent,
    DrawPolygonComponent,
    ModifyPolygonComponent,
    SideBySideComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, AngularOpenlayersModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
