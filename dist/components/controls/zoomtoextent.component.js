"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("../map.component");
var map_system_1 = require("../../map-system");
var ControlZoomToExtentComponent = (function () {
    function ControlZoomToExtentComponent(mapSystem, map) {
        this.mapSystem = mapSystem;
        this.map = map;
        // console.log('instancing aol-control-zoomtoextent');
    }
    ControlZoomToExtentComponent.prototype.ngOnInit = function () {
        this.instance = new this.mapSystem.control.ZoomToExtent(this);
        this.map.instance.addControl(this.instance);
    };
    ControlZoomToExtentComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoomtoextent');
        this.map.instance.removeControl(this.instance);
    };
    return ControlZoomToExtentComponent;
}());
ControlZoomToExtentComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-control-zoomtoextent',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
ControlZoomToExtentComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: map_component_1.MapComponent, },
]; };
ControlZoomToExtentComponent.propDecorators = {
    'className': [{ type: core_1.Input },],
    'label': [{ type: core_1.Input },],
    'tipLabel': [{ type: core_1.Input },],
    'extent': [{ type: core_1.Input },],
};
exports.ControlZoomToExtentComponent = ControlZoomToExtentComponent;
//# sourceMappingURL=zoomtoextent.component.js.map