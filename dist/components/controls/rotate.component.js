"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("../map.component");
var map_system_1 = require("../../map-system");
var ControlRotateComponent = (function () {
    function ControlRotateComponent(mapSystem, map) {
        this.mapSystem = mapSystem;
        this.map = map;
        // console.log('instancing aol-control-rotate');
    }
    ControlRotateComponent.prototype.ngOnInit = function () {
        this.instance = new this.mapSystem.control.Rotate(this);
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
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: map_component_1.MapComponent, },
]; };
exports.ControlRotateComponent = ControlRotateComponent;
//# sourceMappingURL=rotate.component.js.map