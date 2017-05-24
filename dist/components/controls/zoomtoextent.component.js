"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var ControlZoomToExtentComponent = (function () {
    function ControlZoomToExtentComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-zoomtoextent');
    }
    ControlZoomToExtentComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.control.ZoomToExtent(this);
        this.map.instance.addControl(this.instance);
    };
    ControlZoomToExtentComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoomtoextent');
        this.map.instance.removeControl(this.instance);
    };
    return ControlZoomToExtentComponent;
}());
ControlZoomToExtentComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-control-zoomtoextent',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
ControlZoomToExtentComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
]; };
exports.ControlZoomToExtentComponent = ControlZoomToExtentComponent;
//# sourceMappingURL=zoomtoextent.component.js.map