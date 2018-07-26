import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: ExamplesListComponent },
  {
    path: 'examples',
    component: ExamplesItemComponent,
    children: [
      { path: 'basic', component: BasicComponent },
      { path: 'map-position', component: MapPositionComponent },
      { path: 'cursor-position', component: CursorPositionComponent },
      { path: 'display-geometry', component: DisplayGeometryComponent },
      { path: 'display-geojson-source', component: DisplayGeojsonSourceComponent },
      { path: 'draw-polygon', component: DrawPolygonComponent },
      { path: 'cluster', component: ClusterComponent },
      { path: 'raster', component: RasterComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
