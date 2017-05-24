"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var PinchZoomInteractionComponent = (function () {
    function PinchZoomInteractionComponent(map) {
        this.map = map;
    }
    PinchZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.interaction.PinchZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    PinchZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    return PinchZoomInteractionComponent;
}());
PinchZoomInteractionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-interaction-pinchzoom',
                template: ''
            },] },
];
/** @nocollapse */
PinchZoomInteractionComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
]; };
PinchZoomInteractionComponent.propDecorators = {
    'duration': [{ type: core_1.Input },],
    'constrainResolution': [{ type: core_1.Input },],
};
exports.PinchZoomInteractionComponent = PinchZoomInteractionComponent;
//# sourceMappingURL=pinchzoom.component.js.map