"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var layer_component_1 = require("./layer.component");
var LayerVectorTileComponent = (function (_super) {
    __extends(LayerVectorTileComponent, _super);
    function LayerVectorTileComponent(map) {
        return _super.call(this, map) || this;
    }
    LayerVectorTileComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.layer.VectorTile instance with:', this);
        this.instance = new openlayers_1.layer.VectorTile(this);
        _super.prototype.ngOnInit.call(this);
    };
    return LayerVectorTileComponent;
}(layer_component_1.LayerComponent));
LayerVectorTileComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-layer-vectortile',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
LayerVectorTileComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
]; };
LayerVectorTileComponent.propDecorators = {
    'renderBuffer': [{ type: core_1.Input },],
    'renderMode': [{ type: core_1.Input },],
    'renderOrder': [{ type: core_1.Input },],
    'style': [{ type: core_1.Input },],
    'updateWhileAnimating': [{ type: core_1.Input },],
    'updateWhileInteracting': [{ type: core_1.Input },],
    'visible': [{ type: core_1.Input },],
};
exports.LayerVectorTileComponent = LayerVectorTileComponent;
//# sourceMappingURL=layervectortile.component.js.map