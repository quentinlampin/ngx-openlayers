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
var layers_1 = require("../layers");
var source_component_1 = require("./source.component");
var map_system_1 = require("../../map-system");
var SourceVectorComponent = (function (_super) {
    __extends(SourceVectorComponent, _super);
    function SourceVectorComponent(mapSystem, layer) {
        var _this = _super.call(this, mapSystem, layer) || this;
        _this.mapSystem = mapSystem;
        return _this;
    }
    SourceVectorComponent.prototype.ngOnInit = function () {
        this.instance = new this.mapSystem.source.Vector(this);
        this.host.instance.setSource(this.instance);
    };
    return SourceVectorComponent;
}(source_component_1.SourceComponent));
SourceVectorComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-source-vector',
                template: "<ng-content></ng-content>",
                providers: [
                    { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceVectorComponent; }) }
                ]
            },] },
];
/** @nocollapse */
SourceVectorComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: layers_1.LayerVectorComponent, decorators: [{ type: core_1.Host },] },
]; };
SourceVectorComponent.propDecorators = {
    'overlaps': [{ type: core_1.Input },],
    'useSpatialIndex': [{ type: core_1.Input },],
    'wrapX': [{ type: core_1.Input },],
    'url': [{ type: core_1.Input },],
    'format': [{ type: core_1.Input },],
    'strategy': [{ type: core_1.Input },],
};
exports.SourceVectorComponent = SourceVectorComponent;
//# sourceMappingURL=vector.component.js.map