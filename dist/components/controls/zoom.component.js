"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var ControlZoomComponent = (function () {
    function ControlZoomComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-zoom');
    }
    ControlZoomComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.control.Zoom(this);
        this.map.instance.addControl(this.instance);
    };
    ControlZoomComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoom');
        this.map.instance.removeControl(this.instance);
    };
    return ControlZoomComponent;
}());
ControlZoomComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-control-zoom',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
ControlZoomComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
]; };
exports.ControlZoomComponent = ControlZoomComponent;
//# sourceMappingURL=zoom.component.js.map