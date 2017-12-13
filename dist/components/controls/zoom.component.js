"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("../map.component");
var map_system_1 = require("../../map-system");
var ControlZoomComponent = (function () {
    function ControlZoomComponent(mapSystem, map) {
        this.mapSystem = mapSystem;
        this.map = map;
        // console.log('instancing aol-control-zoom');
    }
    ControlZoomComponent.prototype.ngOnInit = function () {
        this.instance = new this.mapSystem.control.Zoom(this);
        this.map.instance.addControl(this.instance);
    };
    ControlZoomComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoom');
        this.map.instance.removeControl(this.instance);
    };
    return ControlZoomComponent;
}());
ControlZoomComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-control-zoom',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
ControlZoomComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: map_component_1.MapComponent, },
]; };
ControlZoomComponent.propDecorators = {
    'duration': [{ type: core_1.Input },],
    'zoomInLabel': [{ type: core_1.Input },],
    'zoomOutLabel': [{ type: core_1.Input },],
    'zoomInTipLabel': [{ type: core_1.Input },],
    'zoomOutTipLabel': [{ type: core_1.Input },],
    'delta': [{ type: core_1.Input },],
};
exports.ControlZoomComponent = ControlZoomComponent;
//# sourceMappingURL=zoom.component.js.map