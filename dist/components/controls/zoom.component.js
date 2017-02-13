"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var map_component_1 = require('../map.component');
var ControlZoomComponent = (function (_super) {
    __extends(ControlZoomComponent, _super);
    function ControlZoomComponent(map) {
        // console.log('instancing aol-control-zoom');
        _super.call(this);
        this.map = map;
    }
    ControlZoomComponent.prototype.ngOnInit = function () {
        this.map.instance.addControl(this);
    };
    ControlZoomComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoom');
        this.map.instance.removeControl(this);
    };
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
    return ControlZoomComponent;
}(openlayers_1.control.Zoom));
exports.ControlZoomComponent = ControlZoomComponent;
//# sourceMappingURL=zoom.component.js.map