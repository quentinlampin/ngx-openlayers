"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("../map.component");
var map_system_1 = require("../../map-system");
var DoubleClickZoomInteractionComponent = (function () {
    function DoubleClickZoomInteractionComponent(mapSystem, map) {
        this.mapSystem = mapSystem;
        this.map = map;
    }
    DoubleClickZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new this.mapSystem.interaction.DoubleClickZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    DoubleClickZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    return DoubleClickZoomInteractionComponent;
}());
DoubleClickZoomInteractionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-interaction-doubleclickzoom',
                template: ''
            },] },
];
/** @nocollapse */
DoubleClickZoomInteractionComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: map_component_1.MapComponent, },
]; };
DoubleClickZoomInteractionComponent.propDecorators = {
    'duration': [{ type: core_1.Input },],
    'delta': [{ type: core_1.Input },],
};
exports.DoubleClickZoomInteractionComponent = DoubleClickZoomInteractionComponent;
//# sourceMappingURL=doubleclickzoom.component.js.map