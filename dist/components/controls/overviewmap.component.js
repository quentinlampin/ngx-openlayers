"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var map_component_1 = require('../map.component');
var ControlOverviewMapComponent = (function (_super) {
    __extends(ControlOverviewMapComponent, _super);
    function ControlOverviewMapComponent(map) {
        // console.log('instancing aol-control-overviewmap');
        _super.call(this);
        this.map = map;
    }
    ControlOverviewMapComponent.prototype.ngOnInit = function () {
        this.map.instance.addControl(this);
    };
    ControlOverviewMapComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-overviewmap');
        this.map.instance.removeControl(this);
    };
    ControlOverviewMapComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control-overviewmap',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ControlOverviewMapComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, },
    ]; };
    return ControlOverviewMapComponent;
}(openlayers_1.control.OverviewMap));
exports.ControlOverviewMapComponent = ControlOverviewMapComponent;
//# sourceMappingURL=overviewmap.component.js.map