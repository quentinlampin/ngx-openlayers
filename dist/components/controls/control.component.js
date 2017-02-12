"use strict";
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var map_component_1 = require('../map.component');
var ControlComponent = (function () {
    function ControlComponent(map) {
        this.map = map;
        this.componentType = 'control';
    }
    ControlComponent.prototype.ngOnInit = function () {
        this.element = this.wrapper.nativeElement.children[0];
        this.instance = new openlayers_1.control.Control(this);
        this.map.instance.addControl(this.instance);
    };
    ControlComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-attribution');
        this.map.instance.removeControl(this.instance);
    };
    ControlComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control',
                    template: "<div #wrapper><ng-content></ng-content></div>"
                },] },
    ];
    /** @nocollapse */
    ControlComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    ControlComponent.propDecorators = {
        'wrapper': [{ type: core_1.ViewChild, args: ['wrapper',] },],
    };
    return ControlComponent;
}());
exports.ControlComponent = ControlComponent;
//# sourceMappingURL=control.component.js.map