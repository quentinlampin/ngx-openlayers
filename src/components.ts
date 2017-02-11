import {  MapComponent } from './components/map.component';
import { LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent } from './components/layer.components';
import {
  SourceOsmComponent, SourceBingmapsComponent, SourceVectorComponent, SourceXYZComponent,
  SourceVectorTileComponent } from './components/source.components';
import {  ViewComponent } from './components/view.component';
import {  FeatureComponent } from './components/feature.component';
import {  GeometryLinestringComponent, GeometryPointComponent, GeometryPolygonComponent } from './components/geometry.components';
import {  CoordinateComponent, CollectionCoordinatesComponent } from './components/coordinate.component';
import {  StyleComponent, StyleCircleComponent, StyleFillComponent, StyleIconComponent,
          StyleStrokeComponent, StyleTextComponent } from './components/style.components';
import {  ControlAttributionComponent, ControlFullScreenComponent, ControlMousePositionComponent,
          ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent,
          ControlZoomComponent, ControlZoomSliderComponent, ControlZoomToExtentComponent
} from './components/control.components';
import { FormatMVTComponent } from './components/format.component';
import { TileGridComponent } from './components/tilegrid.component';
import { DefaultInteractionComponent, DragRotateInteractionComponent,
         DragRotateAndZoomInteractionComponent } from './components/interactions';

// Export all components
export * from './components/map.component';
export * from './components/view.component';
export * from './components/layer.components';
export * from './components/source.components';
export * from './components/feature.component';
export * from './components/geometry.components';
export * from './components/coordinate.component';
export * from './components/style.components';
export * from './components/control.components';
export * from './components/interactions';

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
