"use strict";
var core_1 = require('@angular/core');
var map_component_1 = require('./map.component');
var openlayers_1 = require('openlayers');
var OverlayComponent = (function () {
    function OverlayComponent(map, elementRef) {
        this.map = map;
        this.elementRef = elementRef;
        this.componentType = 'overlay';
    }
    OverlayComponent.prototype.ngOnInit = function () {
        this.element = this.elementRef.nativeElement.children[0];
        this.instance = new openlayers_1.Overlay(this);
        this.map.instance.addOverlay(this.instance);
    };
    OverlayComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeOverlay(this.instance);
    };
    OverlayComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-overlay',
                    template: '<ng-content></ng-content>'
                },] },
    ];
    /** @nocollapse */
    OverlayComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
        { type: core_1.ElementRef, },
    ]; };
    OverlayComponent.propDecorators = {
        'id': [{ type: core_1.Input },],
        'offset': [{ type: core_1.Input },],
        'positioning': [{ type: core_1.Input },],
        'stopEvent': [{ type: core_1.Input },],
        'insertFirst': [{ type: core_1.Input },],
        'autoPan': [{ type: core_1.Input },],
        'autoPanAnimation': [{ type: core_1.Input },],
        'autoPanMargin': [{ type: core_1.Input },],
    };
    return OverlayComponent;
}());
exports.OverlayComponent = OverlayComponent;
//# sourceMappingURL=overlay.component.js.map