"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var map_component_1 = require('./components/map.component');
var view_component_1 = require('./components/view.component');
var layer_components_1 = require('./components/layer.components');
var source_components_1 = require('./components/source.components');
var feature_component_1 = require('./components/feature.component');
var geometry_components_1 = require('./components/geometry.components');
var coordinate_component_1 = require('./components/coordinate.component');
var style_components_1 = require('./components/style.components');
var control_components_1 = require('./components/control.components');
var format_component_1 = require('./components/format.component');
var tilegrid_component_1 = require('./components/tilegrid.component');
var default_component_1 = require('./components/interactions/default.component');
var dragrotate_component_1 = require('./components/interactions/dragrotate.component');
var dragrotateandzoom_component_1 = require('./components/interactions/dragrotateandzoom.component');
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
    tilegrid_component_1.TileGridComponent,
    default_component_1.DefaultInteractionComponent,
    dragrotate_component_1.DragRotateInteractionComponent,
    dragrotateandzoom_component_1.DragRotateAndZoomInteractionComponent
];
var AngularOpenlayersModule = (function () {
    function AngularOpenlayersModule() {
    }
    AngularOpenlayersModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: exports.COMPONENTS,
                    imports: [common_1.CommonModule],
                    exports: exports.COMPONENTS
                },] },
    ];
    /** @nocollapse */
    AngularOpenlayersModule.ctorParameters = function () { return []; };
    return AngularOpenlayersModule;
}());
exports.AngularOpenlayersModule = AngularOpenlayersModule;
//# sourceMappingURL=index.js.map