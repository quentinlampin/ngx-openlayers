"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var DragRotateAndZoomInteractionComponent = (function () {
    function DragRotateAndZoomInteractionComponent(map) {
        this.map = map;
    }
    DragRotateAndZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.interaction.DragRotateAndZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragRotateAndZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    return DragRotateAndZoomInteractionComponent;
}());
DragRotateAndZoomInteractionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-interaction-dragrotateandzoom',
                template: ''
            },] },
];
/** @nocollapse */
DragRotateAndZoomInteractionComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
]; };
DragRotateAndZoomInteractionComponent.propDecorators = {
    'condition': [{ type: core_1.Input },],
    'duration': [{ type: core_1.Input },],
};
exports.DragRotateAndZoomInteractionComponent = DragRotateAndZoomInteractionComponent;
//# sourceMappingURL=dragrotateandzoom.component.js.map