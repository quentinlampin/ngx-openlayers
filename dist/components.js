"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var map_component_1 = require('./components/map.component');
var layer_components_1 = require('./components/layer.components');
var source_components_1 = require('./components/source.components');
var view_component_1 = require('./components/view.component');
var feature_component_1 = require('./components/feature.component');
var geometry_components_1 = require('./components/geometry.components');
var coordinate_component_1 = require('./components/coordinate.component');
var style_components_1 = require('./components/style.components');
var control_components_1 = require('./components/control.components');
var format_component_1 = require('./components/format.component');
var tilegrid_component_1 = require('./components/tilegrid.component');
// Export all components
__export(require('./components/map.component'));
__export(require('./components/view.component'));
__export(require('./components/layer.components'));
__export(require('./components/source.components'));
__export(require('./components/feature.component'));
__export(require('./components/geometry.components'));
__export(require('./components/coordinate.component'));
__export(require('./components/style.components'));
__export(require('./components/control.components'));
exports.COMPONENTS = [
    map_component_1.MapComponent,
    view_component_1.ViewComponent,
    layer_components_1.LayerTileComponent,
    layer_components_1.LayerVectorComponent,
    layer_components_1.LayerVectorTileComponent,
    source_components_1.SourceOsmComponent,
    source_components_1.SourceBingmapsComponent,
    source_components_1.SourceVectorComponent,
    source_components_1.SourceXYZComponent,
    source_components_1.SourceVectorTileComponent,
    feature_component_1.FeatureComponent,
    geometry_components_1.GeometryLinestringComponent,
    geometry_components_1.GeometryPointComponent,
    geometry_components_1.GeometryPolygonComponent,
    coordinate_component_1.CoordinateComponent,
    coordinate_component_1.CollectionCoordinatesComponent,
    style_components_1.StyleComponent,
    style_components_1.StyleComponent,
    style_components_1.StyleCircleComponent,
    style_components_1.StyleFillComponent,
    style_components_1.StyleIconComponent,
    style_components_1.StyleStrokeComponent,
    style_components_1.StyleTextComponent,
    control_components_1.ControlAttributionComponent,
    control_components_1.ControlFullScreenComponent,
    control_components_1.ControlMousePositionComponent,
    control_components_1.ControlOverviewMapComponent,
    control_components_1.ControlRotateComponent,
    control_components_1.ControlScaleLineComponent,
    control_components_1.ControlZoomComponent,
    control_components_1.ControlZoomSliderComponent,
    control_components_1.ControlZoomToExtentComponent,
    format_component_1.FormatMVTComponent,
    tilegrid_component_1.TileGridComponent
];
//# sourceMappingURL=components.js.map