import { Routes } from '@angular/router';
import { ClusterComponent } from './cluster/cluster.component';
import { SimpleComponent } from './simple/simple.component';
import { RasterComponent } from './raster/raster.component';
import { ExamplesListComponent } from './examples-list/examples-list.component';
import { ExamplesItemComponent } from './examples-item/examples-item.component';
import { MapPositionComponent } from './map-position/map-position.component';
import { CursorPositionComponent } from './cursor-position/cursor-position.component';
import { DisplayGeometryComponent } from './display-geometry/display-geometry.component';
import { DisplayGeojsonSourceComponent } from './display-geojson-source/display-geojson-source.component';
import { DrawFeaturesComponent } from './draw-features/draw-features.component';
import { ModifyPolygonComponent } from './modify-polygon/modify-polygon.component';
import { SideBySideComponent } from './side-by-side/side-by-side.component';
import { SwipeComponent } from './swipe/swipe.component';
import { OverlayComponent } from './overlay/overlay.component';
import { ColorSelectHoverComponent } from './color-select-hover/color-select-hover.component';
import { MarkerComponent } from './marker/marker.component';
import { ArcgisImageComponent } from './arcgis-image/arcgis-image.component';
import { ImageWMSComponent } from './image-wms/image-wms.component';
import { ViewProjectionUpdateComponent } from './view-projection-update/view-projection-update.component';
import { UTFGridComponent } from './utfgrid/utfgrid.component';
import { OverviewComponent } from './overview/overview.component';
import { TileJsonComponent } from './tile-json/tile-json.component';
import { SelectInteractionComponent } from './select-interaction/select-interaction.component';
import { ImageStaticComponent } from './image-static/image-static.component';
import { GraticuleComponent } from './graticule/graticule.component';
import { SnapInteractionComponent } from './snap-interaction/snap-interaction.component';

export const routes: Routes = [
  { path: '', component: ExamplesListComponent },
  {
    path: 'examples',
    component: ExamplesItemComponent,
    children: [
      { path: 'simple', component: SimpleComponent },
      { path: 'map-position', component: MapPositionComponent },
      { path: 'cursor-position', component: CursorPositionComponent },
      { path: 'display-geometry', component: DisplayGeometryComponent },
      { path: 'display-geojson-source', component: DisplayGeojsonSourceComponent },
      { path: 'draw-features', component: DrawFeaturesComponent },
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
      { path: 'view-projection-update', component: ViewProjectionUpdateComponent },
      { path: 'overview', component: OverviewComponent },
      { path: 'utf-grid', component: UTFGridComponent },
      { path: 'image-static', component: ImageStaticComponent },
      { path: 'select-interaction', component: SelectInteractionComponent },
      { path: 'tile-json', component: TileJsonComponent },
      { path: 'graticule', component: GraticuleComponent },
      { path: 'snap', component: SnapInteractionComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];
