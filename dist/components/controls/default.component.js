"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("../map.component");
var map_system_1 = require("../../map-system");
var DefaultControlComponent = (function () {
    function DefaultControlComponent(mapSystem, map) {
        this.mapSystem = mapSystem;
        this.map = map;
    }
    DefaultControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('ol.control.defaults init: ', this);
        this.instance = this.mapSystem.control.defaults(this);
        this.instance.forEach(function (control) { return _this.map.instance.addControl(control); });
    };
    DefaultControlComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        // console.log('removing aol-control-defaults');
        this.instance.forEach(function (control) { return _this.map.instance.removeControl(control); });
    };
    return DefaultControlComponent;
}());
DefaultControlComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-control-defaults',
                template: ''
            },] },
];
/** @nocollapse */
DefaultControlComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: map_component_1.MapComponent, },
]; };
DefaultControlComponent.propDecorators = {
    'attribution': [{ type: core_1.Input },],
    'attributionOptions': [{ type: core_1.Input },],
    'rotate': [{ type: core_1.Input },],
    'rotateOptions': [{ type: core_1.Input },],
    'zoom': [{ type: core_1.Input },],
    'zoomOptions': [{ type: core_1.Input },],
};
exports.DefaultControlComponent = DefaultControlComponent;
//# sourceMappingURL=default.component.js.map