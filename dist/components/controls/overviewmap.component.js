"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var ControlOverviewMapComponent = (function () {
    function ControlOverviewMapComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-overviewmap');
    }
    ControlOverviewMapComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.control.OverviewMap(this);
        this.map.instance.addControl(this.instance);
    };
    ControlOverviewMapComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-overviewmap');
        this.map.instance.removeControl(this.instance);
    };
    return ControlOverviewMapComponent;
}());
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
ControlOverviewMapComponent.propDecorators = {
    'collapsed': [{ type: core_1.Input },],
    'collapseLabel': [{ type: core_1.Input },],
    'collapsible': [{ type: core_1.Input },],
    'label': [{ type: core_1.Input },],
    'layers': [{ type: core_1.Input },],
    'target': [{ type: core_1.Input },],
    'tipLabel': [{ type: core_1.Input },],
    'view': [{ type: core_1.Input },],
};
exports.ControlOverviewMapComponent = ControlOverviewMapComponent;
//# sourceMappingURL=overviewmap.component.js.map