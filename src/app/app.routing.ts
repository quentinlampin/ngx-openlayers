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
import { ModifyPolygonComponent } from './modify-polygon/modify-polygon.component';
import { SideBySideComponent } from './side-by-side/side-by-side.component';
import { SwipeComponent } from './swipe/swipe.component';
import { OverlayComponent } from './overlay/overlay.component';
import { ColorSelectHoverComponent } from './color-select-hover/color-select-hover.component';
import { MarkerComponent } from './marker/marker.component';
import { ArcgisImageComponent } from './arcgis-image/arcgis-image.component';
import { ImageWMSComponent } from './image-wms/image-wms.component';

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
      { path: 'modify-polygon', component: ModifyPolygonComponent },
      { path: 'side-by-side', component: SideBySideComponent },
      { path: 'swipe', component: SwipeComponent },
      { path: 'overlay', component: OverlayComponent },
      { path: 'color-select-hover', component: ColorSelectHoverComponent },
      { path: 'marker', component: MarkerComponent },
      { path: 'cluster', component: ClusterComponent },
      { path: 'raster', component: RasterComponent },
      { path: 'arcgis-image', component: ArcgisImageComponent },
      { path: 'image-wms', component: ImageWMSComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
