"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("../map.component");
var map_system_1 = require("../../map-system");
var DragZoomInteractionComponent = (function () {
    function DragZoomInteractionComponent(mapSystem, map) {
        this.mapSystem = mapSystem;
        this.map = map;
    }
    DragZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new this.mapSystem.interaction.DragZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    return DragZoomInteractionComponent;
}());
DragZoomInteractionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-interaction-dragzoom',
                template: ''
            },] },
];
/** @nocollapse */
DragZoomInteractionComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: map_component_1.MapComponent, },
]; };
DragZoomInteractionComponent.propDecorators = {
    'className': [{ type: core_1.Input },],
    'condition': [{ type: core_1.Input },],
    'duration': [{ type: core_1.Input },],
    'out': [{ type: core_1.Input },],
};
exports.DragZoomInteractionComponent = DragZoomInteractionComponent;
//# sourceMappingURL=dragzoom.component.js.map