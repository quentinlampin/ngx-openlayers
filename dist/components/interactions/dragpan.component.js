"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("../map.component");
var map_system_1 = require("../../map-system");
var DragPanInteractionComponent = (function () {
    function DragPanInteractionComponent(mapSystem, map) {
        this.mapSystem = mapSystem;
        this.map = map;
    }
    DragPanInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new this.mapSystem.interaction.DragPan(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragPanInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    return DragPanInteractionComponent;
}());
DragPanInteractionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-interaction-dragpan',
                template: ''
            },] },
];
/** @nocollapse */
DragPanInteractionComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: map_component_1.MapComponent, },
]; };
DragPanInteractionComponent.propDecorators = {
    'condition': [{ type: core_1.Input },],
    'kinetic': [{ type: core_1.Input },],
};
exports.DragPanInteractionComponent = DragPanInteractionComponent;
//# sourceMappingURL=dragpan.component.js.map