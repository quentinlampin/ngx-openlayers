"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var DragZoomInteractionComponent = (function () {
    function DragZoomInteractionComponent(map) {
        this.map = map;
    }
    DragZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.interaction.DragZoom(this);
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