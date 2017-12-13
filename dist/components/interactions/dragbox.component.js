"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("../map.component");
var map_system_1 = require("../../map-system");
var DragBoxInteractionComponent = (function () {
    function DragBoxInteractionComponent(mapSystem, map) {
        this.mapSystem = mapSystem;
        this.map = map;
    }
    DragBoxInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new this.mapSystem.interaction.DragBox(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragBoxInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    return DragBoxInteractionComponent;
}());
DragBoxInteractionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-interaction-dragbox',
                template: ''
            },] },
];
/** @nocollapse */
DragBoxInteractionComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: map_component_1.MapComponent, },
]; };
DragBoxInteractionComponent.propDecorators = {
    'className': [{ type: core_1.Input },],
    'condition': [{ type: core_1.Input },],
    'boxEndCondition': [{ type: core_1.Input },],
};
exports.DragBoxInteractionComponent = DragBoxInteractionComponent;
//# sourceMappingURL=dragbox.component.js.map