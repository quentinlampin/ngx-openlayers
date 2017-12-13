"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("../map.component");
var map_system_1 = require("../../map-system");
var DragRotateAndZoomInteractionComponent = (function () {
    function DragRotateAndZoomInteractionComponent(mapSystem, map) {
        this.mapSystem = mapSystem;
        this.map = map;
    }
    DragRotateAndZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new this.mapSystem.interaction.DragRotateAndZoom(this);
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
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: map_component_1.MapComponent, },
]; };
DragRotateAndZoomInteractionComponent.propDecorators = {
    'condition': [{ type: core_1.Input },],
    'duration': [{ type: core_1.Input },],
};
exports.DragRotateAndZoomInteractionComponent = DragRotateAndZoomInteractionComponent;
//# sourceMappingURL=dragrotateandzoom.component.js.map