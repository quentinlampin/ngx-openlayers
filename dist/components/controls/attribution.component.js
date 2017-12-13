"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("../map.component");
var map_system_1 = require("../../map-system");
var ControlAttributionComponent = (function () {
    function ControlAttributionComponent(mapSystem, map, element) {
        this.mapSystem = mapSystem;
        this.map = map;
        this.element = element;
        this.componentType = 'control';
    }
    ControlAttributionComponent.prototype.ngOnInit = function () {
        this.target = this.element.nativeElement;
        // console.log('ol.control.Attribution init: ', this);
        this.instance = new this.mapSystem.control.Attribution(this);
        this.map.instance.addControl(this.instance);
    };
    ControlAttributionComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-attribution');
        this.map.instance.removeControl(this.instance);
    };
    return ControlAttributionComponent;
}());
ControlAttributionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-control-attribution',
                template: ""
            },] },
];
/** @nocollapse */
ControlAttributionComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: map_component_1.MapComponent, },
    { type: core_1.ElementRef, },
]; };
ControlAttributionComponent.propDecorators = {
    'collapsible': [{ type: core_1.Input },],
};
exports.ControlAttributionComponent = ControlAttributionComponent;
//# sourceMappingURL=attribution.component.js.map