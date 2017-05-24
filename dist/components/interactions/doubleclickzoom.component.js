"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var DoubleClickZoomInteractionComponent = (function () {
    function DoubleClickZoomInteractionComponent(map) {
        this.map = map;
    }
    DoubleClickZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.interaction.DoubleClickZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    DoubleClickZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    return DoubleClickZoomInteractionComponent;
}());
DoubleClickZoomInteractionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-interaction-doubleclickzoom',
                template: ''
            },] },
];
/** @nocollapse */
DoubleClickZoomInteractionComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
]; };
DoubleClickZoomInteractionComponent.propDecorators = {
    'duration': [{ type: core_1.Input },],
    'delta': [{ type: core_1.Input },],
};
exports.DoubleClickZoomInteractionComponent = DoubleClickZoomInteractionComponent;
//# sourceMappingURL=doubleclickzoom.component.js.map