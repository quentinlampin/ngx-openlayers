"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var ControlAttributionComponent = (function () {
    function ControlAttributionComponent(map, element) {
        this.map = map;
        this.element = element;
        this.componentType = 'control';
    }
    ControlAttributionComponent.prototype.ngOnInit = function () {
        this.target = this.element.nativeElement;
        // console.log('ol.control.Attribution init: ', this);
        this.instance = new openlayers_1.control.Attribution(this);
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
    { type: map_component_1.MapComponent, },
    { type: core_1.ElementRef, },
]; };
ControlAttributionComponent.propDecorators = {
    'collapsible': [{ type: core_1.Input },],
};
exports.ControlAttributionComponent = ControlAttributionComponent;
//# sourceMappingURL=attribution.component.js.map