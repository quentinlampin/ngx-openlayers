/*
 * Public API Surface of ngx-openlayers
 */
import { NgModule } from '@angular/core';
import { SimpleGeometryComponent } from './lib/geom/simplegeometry.component';
import { SourceComponent } from './lib/sources/source.component';
import { ViewComponent } from './lib/view.component';
import { GraticuleComponent } from './lib/graticule.component';
import { LayerGroupComponent } from './lib/layers/layergroup.component';
import { LayerImageComponent } from './lib/layers/layerimage.component';
import { LayerTileComponent } from './lib/layers/layertile.component';
import { MapComponent } from './lib/map.component';
import { LayerVectorComponent } from './lib/layers/layervector.component';
import { LayerVectorTileComponent } from './lib/layers/layervectortile.component';
import { SourceOsmComponent } from './lib/sources/osm.component';
import { SourceBingmapsComponent } from './lib/sources/bingmaps.component';
import { SourceClusterComponent } from './lib/sources/cluster.component';
import { SourceVectorComponent } from './lib/sources/vector.component';
import { SourceXYZComponent } from './lib/sources/xyz.component';
import { SourceTileWMTSComponent } from './lib/sources/tilewmts.component';
import { SourceVectorTileComponent } from './lib/sources/vectortile.component';
import { SourceTileWMSComponent } from './lib/sources/tilewms.component';
import { SourceTileJSONComponent } from './lib/sources/tilejson.component';
import { SourceGeoJSONComponent } from './lib/sources/geojson.component';
import { SourceImageStaticComponent } from './lib/sources/imagestatic.component';
import { SourceImageWMSComponent } from './lib/sources/imagewms.component';
import { SourceImageArcGISRestComponent } from './lib/sources/imagearcgisrest.component';
import { SourceRasterComponent } from './lib/sources/raster.component';
import { FeatureComponent } from './lib/feature.component';
import { GeometryCircleComponent } from './lib/geom/geometrycircle.component';
import { GeometryLinestringComponent } from './lib/geom/geometrylinestring.component';
import { GeometryMultiLinestringComponent } from './lib/geom/geometrymultilinestring.component';
import { GeometryMultiPointComponent } from './lib/geom/geometrymultipoint.component';
import { GeometryMultiPolygonComponent } from './lib/geom/geometrymultipolygon.component';
import { GeometryPointComponent } from './lib/geom/geometrypoint.component';
import { GeometryPolygonComponent } from './lib/geom/geometrypolygon.component';
import { CoordinateComponent } from './lib/coordinate.component';
import { CollectionCoordinatesComponent } from './lib/collectioncoordinates.component';
import { StylesComponent } from './lib/styles/styles.component';
import { StyleComponent } from './lib/styles/style.component';
import { StyleCircleComponent } from './lib/styles/circle.component';
import { StyleStrokeComponent } from './lib/styles/stroke.component';
import { StyleIconComponent } from './lib/styles/icon.component';
import { StyleFillComponent } from './lib/styles/fill.component';
import { StyleTextComponent } from './lib/styles/text.component';
import { DefaultControlComponent } from './lib/controls/default.component';
import { ControlComponent } from './lib/controls/control.component';
import { ControlAttributionComponent } from './lib/controls/attribution.component';
import { ControlFullScreenComponent } from './lib/controls/fullscreen.component';
import { ControlMousePositionComponent } from './lib/controls/mouseposition.component';
import { ControlOverviewMapComponent } from './lib/controls/overviewmap.component';
import { ControlRotateComponent } from './lib/controls/rotate.component';
import { ControlScaleLineComponent } from './lib/controls/scaleline.component';
import { ControlZoomComponent } from './lib/controls/zoom.component';
import { ControlZoomSliderComponent } from './lib/controls/zoomslider.component';
import { ControlZoomToExtentComponent } from './lib/controls/zoomtoextent.component';
import { FormatMVTComponent } from './lib/formats/mvt.component';
import { TileGridComponent } from './lib/tilegrid.component';
import { TileGridWMTSComponent } from './lib/tilegridwmts.component';
import { DefaultInteractionComponent } from './lib/interactions/default.component';
import { DoubleClickZoomInteractionComponent } from './lib/interactions/doubleclickzoom.component';
import { DragAndDropInteractionComponent } from './lib/interactions/draganddrop.component';
import { DragBoxInteractionComponent } from './lib/interactions/dragbox.component';
import { DragPanInteractionComponent } from './lib/interactions/dragpan.component';
import { DragRotateInteractionComponent } from './lib/interactions/dragrotate.component';
import { DragRotateAndZoomInteractionComponent } from './lib/interactions/dragrotateandzoom.component';
import { DragZoomInteractionComponent } from './lib/interactions/dragzoom.component';
import { MouseWheelZoomInteractionComponent } from './lib/interactions/mousewheelzoom.component';
import { PinchZoomInteractionComponent } from './lib/interactions/pinchzoom.component';
import { DrawInteractionComponent } from './lib/interactions/draw.component';
import { SelectInteractionComponent } from './lib/interactions/select.component';
import { ModifyInteractionComponent } from './lib/interactions/modify.component';
import { TranslateInteractionComponent } from './lib/interactions/translate.component';
import { OverlayComponent } from './lib/overlay.component';
import { ContentComponent } from './lib/content.component';
import { AttributionsComponent } from './lib/attributions.component';
import { AttributionComponent } from './lib/attribution.component';
import { SourceUTFGridComponent } from './lib/sources/utfgrid.component';
import { LayerComponent } from './lib/layers/layer.component';
import { SnapInteractionComponent } from './lib/interactions/snap.component';

export {
  MapComponent,
  ViewComponent,
  GraticuleComponent,
  LayerComponent,
  LayerGroupComponent,
  LayerImageComponent,
  LayerTileComponent,
  LayerVectorComponent,
  LayerVectorTileComponent,
  SourceComponent,
  SourceOsmComponent,
  SourceBingmapsComponent,
  SourceClusterComponent,
  SourceUTFGridComponent,
  SourceVectorComponent,
  SourceXYZComponent,
  SourceVectorTileComponent,
  SourceTileWMSComponent,
  SourceTileWMTSComponent,
  SourceTileJSONComponent,
  SourceGeoJSONComponent,
  SourceImageStaticComponent,
  SourceImageWMSComponent,
  SourceRasterComponent,
  SourceImageArcGISRestComponent,
  SimpleGeometryComponent,
  FeatureComponent,
  GeometryLinestringComponent,
  GeometryMultiLinestringComponent,
  GeometryMultiPointComponent,
  GeometryMultiPolygonComponent,
  GeometryPointComponent,
  GeometryPolygonComponent,
  GeometryCircleComponent,
  CoordinateComponent,
  CollectionCoordinatesComponent,

  StylesComponent,
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
  SnapInteractionComponent,
  OverlayComponent,
  ContentComponent,
  AttributionsComponent,
  AttributionComponent,
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
  SourceClusterComponent,
  SourceUTFGridComponent,
  SourceVectorComponent,
  SourceXYZComponent,
  SourceVectorTileComponent,
  SourceTileWMSComponent,
  SourceTileWMTSComponent,
  SourceTileJSONComponent,
  SourceGeoJSONComponent,
  SourceImageStaticComponent,
  SourceImageWMSComponent,
  SourceImageArcGISRestComponent,
  SourceRasterComponent,

  FeatureComponent,
  GeometryLinestringComponent,
  GeometryMultiLinestringComponent,
  GeometryMultiPointComponent,
  GeometryMultiPolygonComponent,
  GeometryPointComponent,
  GeometryPolygonComponent,
  GeometryCircleComponent,
  CoordinateComponent,
  CollectionCoordinatesComponent,

  StylesComponent,
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
  AttributionsComponent,
  AttributionComponent,
];

/**
 * @deprecated please use standalone components instead
 */
@NgModule({
  imports: COMPONENTS,
  exports: COMPONENTS,
})
export class AngularOpenlayersModule {}
