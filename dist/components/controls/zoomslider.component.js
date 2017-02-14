"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var map_component_1 = require('../map.component');
var ControlZoomSliderComponent = (function (_super) {
    __extends(ControlZoomSliderComponent, _super);
    function ControlZoomSliderComponent(map) {
        // console.log('instancing aol-control-zoomslider');
        _super.call(this);
        this.map = map;
    }
    ControlZoomSliderComponent.prototype.ngOnInit = function () {
        this.map.instance.addControl(this);
    };
    ControlZoomSliderComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoomslider');
        this.map.instance.removeControl(this);
    };
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
    return ControlZoomSliderComponent;
}(openlayers_1.control.ZoomSlider));
exports.ControlZoomSliderComponent = ControlZoomSliderComponent;
//# sourceMappingURL=zoomslider.component.js.map