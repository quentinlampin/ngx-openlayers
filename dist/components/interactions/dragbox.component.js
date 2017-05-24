"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var DragBoxInteractionComponent = (function () {
    function DragBoxInteractionComponent(map) {
        this.map = map;
    }
    DragBoxInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.interaction.DragBox(this);
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
    { type: map_component_1.MapComponent, },
]; };
DragBoxInteractionComponent.propDecorators = {
    'className': [{ type: core_1.Input },],
    'condition': [{ type: core_1.Input },],
    'boxEndCondition': [{ type: core_1.Input },],
};
exports.DragBoxInteractionComponent = DragBoxInteractionComponent;
//# sourceMappingURL=dragbox.component.js.map