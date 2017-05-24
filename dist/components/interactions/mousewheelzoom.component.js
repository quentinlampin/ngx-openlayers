"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var MouseWheelZoomInteractionComponent = (function () {
    function MouseWheelZoomInteractionComponent(map) {
        this.map = map;
    }
    MouseWheelZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.interaction.MouseWheelZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    MouseWheelZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    return MouseWheelZoomInteractionComponent;
}());
MouseWheelZoomInteractionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-interaction-mousewheelzoom',
                template: ''
            },] },
];
/** @nocollapse */
MouseWheelZoomInteractionComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
]; };
MouseWheelZoomInteractionComponent.propDecorators = {
    'duration': [{ type: core_1.Input },],
    'timeout': [{ type: core_1.Input },],
    'useAnchor': [{ type: core_1.Input },],
};
exports.MouseWheelZoomInteractionComponent = MouseWheelZoomInteractionComponent;
//# sourceMappingURL=mousewheelzoom.component.js.map