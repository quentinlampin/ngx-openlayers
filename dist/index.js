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
var components_1 = require("./components");
__export(require("./components"));
var COMPONENTS = [
    components_1.MapComponent,
    components_1.ViewComponent,
    components_1.LayerTileComponent,
    components_1.LayerVectorComponent,
    components_1.LayerVectorTileComponent,
    components_1.SourceOsmComponent,
    components_1.SourceBingmapsComponent,
    components_1.SourceVectorComponent,
    components_1.SourceXYZComponent,
    components_1.SourceVectorTileComponent,
    components_1.FeatureComponent,
    components_1.GeometryLinestringComponent,
    components_1.GeometryPointComponent,
    components_1.GeometryPolygonComponent,
    components_1.CoordinateComponent,
    components_1.CollectionCoordinatesComponent,
    components_1.StyleComponent,
    components_1.StyleCircleComponent,
    components_1.StyleFillComponent,
    components_1.StyleIconComponent,
    components_1.StyleStrokeComponent,
    components_1.StyleTextComponent,
    components_1.DefaultControlComponent,
    components_1.ControlComponent,
    components_1.ControlAttributionComponent,
    components_1.ControlFullScreenComponent,
    components_1.ControlMousePositionComponent,
    components_1.ControlOverviewMapComponent,
    components_1.ControlRotateComponent,
    components_1.ControlScaleLineComponent,
    components_1.ControlZoomComponent,
    components_1.ControlZoomSliderComponent,
    components_1.ControlZoomToExtentComponent,
    components_1.FormatMVTComponent,
    components_1.TileGridComponent,
    components_1.DefaultInteractionComponent,
    components_1.DoubleClickZoomInteractionComponent,
    components_1.DragAndDropInteractionComponent,
    components_1.DragBoxInteractionComponent,
    components_1.DragPanInteractionComponent,
    components_1.DragRotateInteractionComponent,
    components_1.DragRotateAndZoomInteractionComponent,
    components_1.DragZoomInteractionComponent,
    components_1.OverlayComponent,
    components_1.ContentComponent,
    components_1.AttributionComponent,
    components_1.AttributionsComponent
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