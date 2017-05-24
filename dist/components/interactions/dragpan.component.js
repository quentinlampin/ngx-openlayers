"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var DragPanInteractionComponent = (function () {
    function DragPanInteractionComponent(map) {
        this.map = map;
    }
    DragPanInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.interaction.DragPan(this);
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
    { type: map_component_1.MapComponent, },
]; };
DragPanInteractionComponent.propDecorators = {
    'condition': [{ type: core_1.Input },],
    'kinetic': [{ type: core_1.Input },],
};
exports.DragPanInteractionComponent = DragPanInteractionComponent;
//# sourceMappingURL=dragpan.component.js.map