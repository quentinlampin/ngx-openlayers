"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("../map.component");
var map_system_1 = require("../../map-system");
var PinchZoomInteractionComponent = (function () {
    function PinchZoomInteractionComponent(mapSystem, map) {
        this.mapSystem = mapSystem;
        this.map = map;
    }
    PinchZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new this.mapSystem.interaction.PinchZoom(this);
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
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: map_component_1.MapComponent, },
]; };
PinchZoomInteractionComponent.propDecorators = {
    'duration': [{ type: core_1.Input },],
    'constrainResolution': [{ type: core_1.Input },],
};
exports.PinchZoomInteractionComponent = PinchZoomInteractionComponent;
//# sourceMappingURL=pinchzoom.component.js.map