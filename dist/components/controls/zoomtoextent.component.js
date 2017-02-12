"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var map_component_1 = require('../map.component');
var ControlZoomToExtentComponent = (function (_super) {
    __extends(ControlZoomToExtentComponent, _super);
    function ControlZoomToExtentComponent(map) {
        // console.log('instancing aol-control-zoomtoextent');
        _super.call(this);
        this.map = map;
    }
    ControlZoomToExtentComponent.prototype.ngOnInit = function () {
        this.map.instance.addControl(this);
    };
    ControlZoomToExtentComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoomtoextent');
        this.map.instance.removeControl(this);
    };
    ControlZoomToExtentComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control-zoomtoextent',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ControlZoomToExtentComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return ControlZoomToExtentComponent;
}(openlayers_1.control.ZoomToExtent));
exports.ControlZoomToExtentComponent = ControlZoomToExtentComponent;
//# sourceMappingURL=zoomtoextent.component.js.map