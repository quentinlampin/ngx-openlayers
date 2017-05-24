"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var ControlMousePositionComponent = (function () {
    function ControlMousePositionComponent(map, element) {
        this.map = map;
        this.element = element;
    }
    ControlMousePositionComponent.prototype.ngOnInit = function () {
        this.target = this.element.nativeElement;
        // console.log('ol.control.MousePosition init: ', this);
        this.instance = new openlayers_1.control.MousePosition(this);
        this.map.instance.addControl(this.instance);
    };
    ControlMousePositionComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-mouseposition');
        this.map.instance.removeControl(this.instance);
    };
    return ControlMousePositionComponent;
}());
ControlMousePositionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-control-mouseposition',
                template: ""
            },] },
];
/** @nocollapse */
ControlMousePositionComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
    { type: core_1.ElementRef, },
]; };
ControlMousePositionComponent.propDecorators = {
    'coordinateFormat': [{ type: core_1.Input },],
    'projection': [{ type: core_1.Input },],
};
exports.ControlMousePositionComponent = ControlMousePositionComponent;
//# sourceMappingURL=mouseposition.component.js.map