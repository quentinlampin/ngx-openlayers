import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MapComponent } from './components/map.component';
import { ViewComponent } from './components/view.component';
import { LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent } from './components/layer.components';
import {
  SourceBingmapsComponent, SourceOsmComponent, SourceVectorComponent, SourceVectorTileComponent,
  SourceXYZComponent
} from './components/source.components';
import { FeatureComponent } from './components/feature.component';
import { GeometryLinestringComponent, GeometryPointComponent, GeometryPolygonComponent } from './components/geometry.components';
import { CollectionCoordinatesComponent, CoordinateComponent } from './components/coordinate.component';
import {
  StyleCircleComponent, StyleComponent, StyleFillComponent, StyleIconComponent, StyleStrokeComponent,
  StyleTextComponent
} from './components/style.components';
import {
  ControlAttributionComponent, ControlFullScreenComponent, ControlMousePositionComponent,
  ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent, ControlZoomComponent, ControlZoomSliderComponent,
  ControlZoomToExtentComponent
} from './components/control.components';
import { FormatMVTComponent } from './components/format.component';
import { TileGridComponent } from './components/tilegrid.component';
import { DefaultInteractionComponent } from './components/interactions/default.component';
import { DragRotateInteractionComponent } from './components/interactions/dragrotate.component';
import { DragRotateAndZoomInteractionComponent } from './components/interactions/dragrotateandzoom.component';

export const COMPONENTS: any[] = [
  MapComponent,
  ViewComponent,
  LayerTileComponent,
  LayerVectorComponent,
  LayerVectorTileComponent,
  SourceOsmComponent,
  SourceBingmapsComponent,
  SourceVectorComponent,
  SourceXYZComponent,
  SourceVectorTileComponent,
  FeatureComponent,
  GeometryLinestringComponent,
  GeometryPointComponent,
  GeometryPolygonComponent,
  CoordinateComponent,
  CollectionCoordinatesComponent,
  StyleComponent,
  StyleCircleComponent,
  StyleFillComponent,
  StyleIconComponent,
  StyleStrokeComponent,
  StyleTextComponent,
  ControlAttributionComponent,
  ControlFullScreenComponent,
  ControlMousePositionComponent,
  ControlOverviewMapComponent,
  ControlRotateComponent,
  ControlScaleLineComponent,
  ControlZoomComponent,
  ControlZoomSliderComponent,
  ControlZoomToExtentComponent,
  FormatMVTComponent,
  TileGridComponent,
  DefaultInteractionComponent,
  DragRotateInteractionComponent,
  DragRotateAndZoomInteractionComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS
})
export class AngularOpenlayersModule {}
