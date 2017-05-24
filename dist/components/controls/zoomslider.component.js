"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var ControlZoomSliderComponent = (function () {
    function ControlZoomSliderComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-zoomslider');
    }
    ControlZoomSliderComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.control.ZoomSlider(this);
        this.map.instance.addControl(this.instance);
    };
    ControlZoomSliderComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoomslider');
        this.map.instance.removeControl(this.instance);
    };
    return ControlZoomSliderComponent;
}());
ControlZoomSliderComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-control-zoomslider',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
ControlZoomSliderComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
]; };
exports.ControlZoomSliderComponent = ControlZoomSliderComponent;
//# sourceMappingURL=zoomslider.component.js.map