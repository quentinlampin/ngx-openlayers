"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("./map.component");
var openlayers_1 = require("openlayers");
var content_component_1 = require("./content.component");
var OverlayComponent = (function () {
    function OverlayComponent(map) {
        this.map = map;
        this.componentType = 'overlay';
    }
    OverlayComponent.prototype.ngOnInit = function () {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new openlayers_1.Overlay(this);
            this.map.instance.addOverlay(this.instance);
        }
    };
    OverlayComponent.prototype.ngOnDestroy = function () {
        if (this.instance) {
            this.map.instance.removeOverlay(this.instance);
        }
    };
    return OverlayComponent;
}());
OverlayComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-overlay',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
OverlayComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
]; };
OverlayComponent.propDecorators = {
    'content': [{ type: core_1.ContentChild, args: [content_component_1.ContentComponent,] },],
    'id': [{ type: core_1.Input },],
    'offset': [{ type: core_1.Input },],
    'positioning': [{ type: core_1.Input },],
    'stopEvent': [{ type: core_1.Input },],
    'insertFirst': [{ type: core_1.Input },],
    'autoPan': [{ type: core_1.Input },],
    'autoPanAnimation': [{ type: core_1.Input },],
    'autoPanMargin': [{ type: core_1.Input },],
};
exports.OverlayComponent = OverlayComponent;
//# sourceMappingURL=overlay.component.js.map