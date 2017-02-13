"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var map_component_1 = require('../map.component');
var ControlRotateComponent = (function (_super) {
    __extends(ControlRotateComponent, _super);
    function ControlRotateComponent(map) {
        // console.log('instancing aol-control-rotate');
        _super.call(this);
        this.map = map;
    }
    ControlRotateComponent.prototype.ngOnInit = function () {
        this.map.instance.addControl(this);
    };
    ControlRotateComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-rotate');
        this.map.instance.removeControl(this);
    };
    ControlRotateComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control-rotate',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ControlRotateComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, },
    ]; };
    return ControlRotateComponent;
}(openlayers_1.control.Rotate));
exports.ControlRotateComponent = ControlRotateComponent;
//# sourceMappingURL=rotate.component.js.map