"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var ControlScaleLineComponent = (function () {
    function ControlScaleLineComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-scaleline');
    }
    ControlScaleLineComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.control.ScaleLine(this);
        this.map.instance.addControl(this.instance);
    };
    ControlScaleLineComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-scaleline');
        this.map.instance.removeControl(this.instance);
    };
    return ControlScaleLineComponent;
}());
ControlScaleLineComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-control-scaleline',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
ControlScaleLineComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
]; };
exports.ControlScaleLineComponent = ControlScaleLineComponent;
//# sourceMappingURL=scaleline.component.js.map