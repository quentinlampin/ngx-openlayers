"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var map_component_1 = require("./components/map.component");
var view_component_1 = require("./components/view.component");
var layers_1 = require("./components/layers");
var sources_1 = require("./components/sources");
var feature_component_1 = require("./components/feature.component");
var geometry_components_1 = require("./components/geometry.components");
var coordinate_component_1 = require("./components/coordinate.component");
var styles_1 = require("./components/styles");
var controls_1 = require("./components/controls");
var formats_1 = require("./components/formats");
var tilegrid_component_1 = require("./components/tilegrid.component");
var default_component_1 = require("./components/interactions/default.component");
var dragrotate_component_1 = require("./components/interactions/dragrotate.component");
var dragrotateandzoom_component_1 = require("./components/interactions/dragrotateandzoom.component");
__export(require("./components"));
var COMPONENTS = [
    map_component_1.MapComponent,
    view_component_1.ViewComponent,
    layers_1.LayerTileComponent,
    layers_1.LayerVectorComponent,
    layers_1.LayerVectorTileComponent,
    sources_1.SourceOsmComponent,
    sources_1.SourceBingmapsComponent,
    sources_1.SourceVectorComponent,
    sources_1.SourceXYZComponent,
    sources_1.SourceVectorTileComponent,
    feature_component_1.FeatureComponent,
    geometry_components_1.GeometryLinestringComponent,
    geometry_components_1.GeometryPointComponent,
    geometry_components_1.GeometryPolygonComponent,
    coordinate_component_1.CoordinateComponent,
    coordinate_component_1.CollectionCoordinatesComponent,
    styles_1.StyleComponent,
    styles_1.StyleCircleComponent,
    styles_1.StyleFillComponent,
    styles_1.StyleIconComponent,
    styles_1.StyleStrokeComponent,
    styles_1.StyleTextComponent,
    controls_1.ControlComponent,
    controls_1.ControlAttributionComponent,
    controls_1.ControlFullScreenComponent,
    controls_1.ControlMousePositionComponent,
    controls_1.ControlOverviewMapComponent,
    controls_1.ControlRotateComponent,
    controls_1.ControlScaleLineComponent,
    controls_1.ControlZoomComponent,
    controls_1.ControlZoomSliderComponent,
    controls_1.ControlZoomToExtentComponent,
    formats_1.FormatMVTComponent,
    tilegrid_component_1.TileGridComponent,
    default_component_1.DefaultInteractionComponent,
    dragrotate_component_1.DragRotateInteractionComponent,
    dragrotateandzoom_component_1.DragRotateAndZoomInteractionComponent,
    controls_1.DefaultControlComponent
];
var AngularOpenlayersModule = (function () {
    function AngularOpenlayersModule() {
    }
    return AngularOpenlayersModule;
}());
AngularOpenlayersModule = __decorate([
    core_1.NgModule({
        declarations: COMPONENTS,
        imports: [common_1.CommonModule],
        exports: COMPONENTS
    })
], AngularOpenlayersModule);
exports.AngularOpenlayersModule = AngularOpenlayersModule;
//# sourceMappingURL=index.js.map