"use strict";
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var map_component_1 = require('../map.component');
var ControlComponent = (function () {
    function ControlComponent(map, elementRef) {
        this.map = map;
        this.elementRef = elementRef;
        this.componentType = 'control';
    }
    ControlComponent.prototype.ngOnInit = function () {
        this.element = this.elementRef.nativeElement.children[0];
        this.instance = new openlayers_1.control.Control(this);
        this.map.instance.addControl(this.instance);
    };
    ControlComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeControl(this.instance);
    };
    ControlComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ControlComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
        { type: core_1.ElementRef, },
    ]; };
    return ControlComponent;
}());
exports.ControlComponent = ControlComponent;
//# sourceMappingURL=control.component.js.map