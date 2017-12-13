"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("../map.component");
var map_system_1 = require("../../map-system");
var ControlFullScreenComponent = (function () {
    function ControlFullScreenComponent(mapSystem, map) {
        this.mapSystem = mapSystem;
        this.map = map;
        // console.log('instancing aol-control-fullscreen');
    }
    ControlFullScreenComponent.prototype.ngOnInit = function () {
        this.instance = new this.mapSystem.control.FullScreen(this);
        this.map.instance.addControl(this.instance);
    };
    ControlFullScreenComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-fullscreen');
        this.map.instance.removeControl(this.instance);
    };
    return ControlFullScreenComponent;
}());
ControlFullScreenComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-control-fullscreen',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
ControlFullScreenComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: map_component_1.MapComponent, },
]; };
exports.ControlFullScreenComponent = ControlFullScreenComponent;
//# sourceMappingURL=fullscreen.component.js.map