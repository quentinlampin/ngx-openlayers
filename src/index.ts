import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map.component';
import { ViewComponent } from './components/view.component';
import { LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent } from './components/layers';
import {
  SourceBingmapsComponent, SourceOsmComponent, SourceVectorComponent, SourceVectorTileComponent,
  SourceXYZComponent
} from './components/sources';
import { FeatureComponent } from './components/feature.component';
import { GeometryLinestringComponent, GeometryPointComponent, GeometryPolygonComponent } from './components/geometry.components';
import { CollectionCoordinatesComponent, CoordinateComponent } from './components/coordinate.component';
import {
  StyleCircleComponent, StyleComponent, StyleFillComponent, StyleIconComponent, StyleStrokeComponent,
  StyleTextComponent
} from './components/styles';
import {
  ControlAttributionComponent, ControlFullScreenComponent, ControlMousePositionComponent,
  ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent, ControlZoomComponent, ControlZoomSliderComponent,
  ControlZoomToExtentComponent, DefaultControlComponent,  ControlComponent
} from './components/controls';
import { FormatMVTComponent } from './components/formats';
import { TileGridComponent } from './components/tilegrid.component';
import { DefaultInteractionComponent } from './components/interactions/default.component';
import { DragRotateInteractionComponent } from './components/interactions/dragrotate.component';
import { DragRotateAndZoomInteractionComponent } from './components/interactions/dragrotateandzoom.component';
import { OverlayComponent } from './components/overlay.component';

export * from './components';

const COMPONENTS = [
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
  ControlComponent,
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
  DragRotateAndZoomInteractionComponent,
  DefaultControlComponent,
  OverlayComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS
})
export class AngularOpenlayersModule {}
