"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("../map.component");
var map_system_1 = require("../../map-system");
var DragAndDropInteractionComponent = (function () {
    function DragAndDropInteractionComponent(mapSystem, map) {
        this.mapSystem = mapSystem;
        this.map = map;
    }
    DragAndDropInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new this.mapSystem.interaction.DragAndDrop(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragAndDropInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    return DragAndDropInteractionComponent;
}());
DragAndDropInteractionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-interaction-draganddrop',
                template: ''
            },] },
];
/** @nocollapse */
DragAndDropInteractionComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: map_component_1.MapComponent, },
]; };
DragAndDropInteractionComponent.propDecorators = {
    'formatConstructors': [{ type: core_1.Input },],
    'projection': [{ type: core_1.Input },],
    'target': [{ type: core_1.Input },],
};
exports.DragAndDropInteractionComponent = DragAndDropInteractionComponent;
//# sourceMappingURL=draganddrop.component.js.map