///<reference path="components/interactions/dragrotate.component.ts"/>
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './components/map.component';
import {ViewComponent} from './components/view.component';
import {GraticuleComponent} from './components/graticule.component';
import {LayerGroupComponent} from './components/layers/layergroup.component';
import {LayerImageComponent} from './components/layers/layerimage.component';
import {LayerTileComponent} from './components/layers/layertile.component';
import {LayerVectorComponent} from './components/layers/layervector.component';
import {LayerVectorTileComponent} from './components/layers/layervectortile.component';
import {SourceOsmComponent} from './components/sources/osm.component';
import {SourceBingmapsComponent} from './components/sources/bingmaps.component';
import {SourceVectorComponent} from './components/sources/vector.component';
import {SourceXYZComponent} from './components/sources/xyz.component';
import {SourceVectorTileComponent} from './components/sources/vectortile.component';
import {SourceTileWMSComponent} from './components/sources/tilewms.component';
import {SourceTileWMTSComponent} from './components/sources/tilewmts.component';
import {SourceGeoJSONComponent} from './components/sources/geojson.component';
import {SourceImageStaticComponent} from './components/sources/imagestatic.component';
import {SourceImageWMSComponent} from './components/sources/imagewms.component';
import {FeatureComponent} from './components/feature.component';
import {GeometryLinestringComponent, GeometryPointComponent, GeometryPolygonComponent} from './components/geometry.components';
import {CollectionCoordinatesComponent, CoordinateComponent} from './components/coordinate.component';
import {StyleComponent} from './components/styles/style.component';
import {StyleCircleComponent} from './components/styles/circle.component';
import {StyleFillComponent} from './components/styles/fill.component';
import {StyleIconComponent} from './components/styles/icon.component';
import {StyleStrokeComponent} from './components/styles/stroke.component';
import {StyleTextComponent} from './components/styles/text.component';
import {DefaultControlComponent} from './components/controls/default.component';
import {ControlComponent} from './components/controls/control.component';
import {ControlAttributionComponent} from './components/controls/attribution.component';
import {ControlFullScreenComponent} from './components/controls/fullscreen.component';
import {ControlMousePositionComponent} from './components/controls/mouseposition.component';
import {ControlOverviewMapComponent} from './components/controls/overviewmap.component';
import {ControlRotateComponent} from './components/controls/rotate.component';
import {ControlScaleLineComponent} from './components/controls/scaleline.component';
import {ControlZoomComponent} from './components/controls/zoom.component';
import {ControlZoomSliderComponent} from './components/controls/zoomslider.component';
import {ControlZoomToExtentComponent} from './components/controls/zoomtoextent.component';
import {FormatMVTComponent} from './components/formats/mvt.component';
import {TileGridComponent} from './components/tilegrid.component';
import {TileGridWMTSComponent} from './components/tilegridwmts.component';
import {DefaultInteractionComponent} from './components/interactions/default.component';
import {DoubleClickZoomInteractionComponent} from './components/interactions/doubleclickzoom.component';
import {DragAndDropInteractionComponent} from './components/interactions/draganddrop.component';
import {DragPanInteractionComponent} from './components/interactions/dragpan.component';
import {DragRotateInteractionComponent} from './components/interactions/dragrotate.component';
import {DragBoxInteractionComponent} from './components/interactions/dragbox.component';
import {DragRotateAndZoomInteractionComponent} from './components/interactions/dragrotateandzoom.component';
import {DragZoomInteractionComponent} from './components/interactions/dragzoom.component';
import {MouseWheelZoomInteractionComponent} from './components/interactions/mousewheelzoom.component';
import {PinchZoomInteractionComponent} from './components/interactions/pinchzoom.component';
import {DrawInteractionComponent} from './components/interactions/draw.component';
import {SelectInteractionComponent} from './components/interactions/select.component';
import {ModifyInteractionComponent} from './components/interactions/modify.component';
import {TranslateInteractionComponent} from './components/interactions/translate.component';
import {OverlayComponent} from './components/overlay.component';
import {ContentComponent} from './components/content.component';
import {AttributionComponent} from './components/attribution.component';
import {AttributionsComponent} from './components/attributions.component';

export {
  MapComponent,
  ViewComponent,
  GraticuleComponent,
  LayerGroupComponent,
  LayerImageComponent,
  LayerTileComponent,
  LayerVectorComponent,
  LayerVectorTileComponent,
  SourceOsmComponent,
  SourceBingmapsComponent,
  SourceVectorComponent,
  SourceXYZComponent,
  SourceVectorTileComponent,
  SourceTileWMSComponent,
  SourceTileWMTSComponent,
  SourceGeoJSONComponent,
  SourceImageStaticComponent,
  SourceImageWMSComponent,
  FeatureComponent,
  GeometryLinestringComponent,
  GeometryPointComponent,
  GeometryPolygonComponent,
  CollectionCoordinatesComponent,
  CoordinateComponent,
  StyleComponent,
  StyleCircleComponent,
  StyleFillComponent,
  StyleIconComponent,
  StyleStrokeComponent,
  StyleTextComponent,
  DefaultControlComponent,
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
  TileGridWMTSComponent,
  DefaultInteractionComponent,
  DoubleClickZoomInteractionComponent,
  DragAndDropInteractionComponent,
  DragPanInteractionComponent,
  DragRotateInteractionComponent,
  DragBoxInteractionComponent,
  DragRotateAndZoomInteractionComponent,
  DragZoomInteractionComponent,
  MouseWheelZoomInteractionComponent,
  PinchZoomInteractionComponent,
  DrawInteractionComponent,
  SelectInteractionComponent,
  ModifyInteractionComponent,
  TranslateInteractionComponent,
  OverlayComponent,
  ContentComponent,
  AttributionComponent,
  AttributionsComponent
};

const COMPONENTS = [
  MapComponent,

  ViewComponent,
  GraticuleComponent,

  LayerGroupComponent,
  LayerImageComponent,
  LayerTileComponent,
  LayerVectorComponent,
  LayerVectorTileComponent,

  SourceOsmComponent,
  SourceBingmapsComponent,
  SourceVectorComponent,
  SourceXYZComponent,
  SourceVectorTileComponent,
  SourceTileWMSComponent,
  SourceTileWMTSComponent,
  SourceGeoJSONComponent,
  SourceImageStaticComponent,
  SourceImageWMSComponent,
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

  DefaultControlComponent,
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
  TileGridWMTSComponent,

  DefaultInteractionComponent,
  DoubleClickZoomInteractionComponent,
  DragAndDropInteractionComponent,
  DragBoxInteractionComponent,
  DragPanInteractionComponent,
  DragRotateInteractionComponent,
  DragRotateAndZoomInteractionComponent,
  DragZoomInteractionComponent,
  MouseWheelZoomInteractionComponent,
  PinchZoomInteractionComponent,
  DrawInteractionComponent,
  SelectInteractionComponent,
  ModifyInteractionComponent,
  TranslateInteractionComponent,

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
export class AngularOpenlayersModule { }
