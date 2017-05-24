"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var DefaultControlComponent = (function () {
    function DefaultControlComponent(map) {
        this.map = map;
    }
    DefaultControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('ol.control.defaults init: ', this);
        this.instance = openlayers_1.control.defaults(this);
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