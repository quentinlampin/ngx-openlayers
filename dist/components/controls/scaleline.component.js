"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var map_component_1 = require('../map.component');
var ControlScaleLineComponent = (function (_super) {
    __extends(ControlScaleLineComponent, _super);
    function ControlScaleLineComponent(map) {
        // console.log('instancing aol-control-scaleline');
        _super.call(this);
        this.map = map;
    }
    ControlScaleLineComponent.prototype.ngOnInit = function () {
        this.map.instance.addControl(this);
    };
    ControlScaleLineComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-scaleline');
        this.map.instance.removeControl(this);
    };
    ControlScaleLineComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control-scaleline',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ControlScaleLineComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return ControlScaleLineComponent;
}(openlayers_1.control.ScaleLine));
exports.ControlScaleLineComponent = ControlScaleLineComponent;
//# sourceMappingURL=scaleline.component.js.map