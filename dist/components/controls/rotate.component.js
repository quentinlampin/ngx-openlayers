"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var ControlRotateComponent = (function () {
    function ControlRotateComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-rotate');
    }
    ControlRotateComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.control.Rotate(this);
        this.map.instance.addControl(this.instance);
    };
    ControlRotateComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-rotate');
        this.map.instance.removeControl(this.instance);
    };
    return ControlRotateComponent;
}());
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
exports.ControlRotateComponent = ControlRotateComponent;
//# sourceMappingURL=rotate.component.js.map