"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("../map.component");
var map_system_1 = require("../../map-system");
var DragRotateInteractionComponent = (function () {
    function DragRotateInteractionComponent(mapSystem, map) {
        this.mapSystem = mapSystem;
        this.map = map;
    }
    DragRotateInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new this.mapSystem.interaction.DragRotate(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragRotateInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    return DragRotateInteractionComponent;
}());
DragRotateInteractionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-interaction-dragrotate',
                template: ''
            },] },
];
/** @nocollapse */
DragRotateInteractionComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: map_component_1.MapComponent, },
]; };
DragRotateInteractionComponent.propDecorators = {
    'condition': [{ type: core_1.Input },],
    'duration': [{ type: core_1.Input },],
};
exports.DragRotateInteractionComponent = DragRotateInteractionComponent;
//# sourceMappingURL=dragrotate.component.js.map