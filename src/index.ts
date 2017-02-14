import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MapComponent, ViewComponent,
  LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent,
  SourceBingmapsComponent, SourceOsmComponent, SourceVectorComponent, SourceVectorTileComponent, SourceXYZComponent,
  FeatureComponent,
  GeometryLinestringComponent, GeometryPointComponent, GeometryPolygonComponent,
  CollectionCoordinatesComponent, CoordinateComponent,
  StyleCircleComponent, StyleComponent, StyleFillComponent, StyleIconComponent, StyleStrokeComponent, StyleTextComponent,
  ControlAttributionComponent, ControlFullScreenComponent, ControlMousePositionComponent,
  ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent, ControlZoomComponent, ControlZoomSliderComponent,
  ControlZoomToExtentComponent, DefaultControlComponent,  ControlComponent,
  FormatMVTComponent,
  TileGridComponent,
  DefaultInteractionComponent, DragRotateInteractionComponent, DragRotateAndZoomInteractionComponent,
  OverlayComponent,
  ContentComponent,
  AttributionComponent,
  AttributionsComponent
} from './components';

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
  OverlayComponent,
  ContentComponent,
  AttributionComponent,
  AttributionsComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS
})
export class AngularOpenlayersModule {}
