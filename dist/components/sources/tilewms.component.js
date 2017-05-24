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
var layers_1 = require("../layers");
var source_component_1 = require("./source.component");
var SourceTileWMSComponent = (function (_super) {
    __extends(SourceTileWMSComponent, _super);
    function SourceTileWMSComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceTileWMSComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.source.TileWMS(this);
        this.host.instance.setSource(this.instance);
    };
    return SourceTileWMSComponent;
}(source_component_1.SourceComponent));
SourceTileWMSComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-source-tilewms',
                template: "<ng-content></ng-content>",
                providers: [
                    { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceTileWMSComponent; }) }
                ]
            },] },
];
/** @nocollapse */
SourceTileWMSComponent.ctorParameters = function () { return [
    { type: layers_1.LayerTileComponent, decorators: [{ type: core_1.Host },] },
]; };
SourceTileWMSComponent.propDecorators = {
    'cacheSize': [{ type: core_1.Input },],
    'crossOrigin': [{ type: core_1.Input },],
    'gutter': [{ type: core_1.Input },],
    'hidpi': [{ type: core_1.Input },],
    'params': [{ type: core_1.Input },],
    'projection': [{ type: core_1.Input },],
    'reprojectionErrorThreshold': [{ type: core_1.Input },],
    'serverType': [{ type: core_1.Input },],
    'tileGrid': [{ type: core_1.Input },],
    'tileLoadFunction': [{ type: core_1.Input },],
    'url': [{ type: core_1.Input },],
    'urls': [{ type: core_1.Input },],
    'wrapX': [{ type: core_1.Input },],
};
exports.SourceTileWMSComponent = SourceTileWMSComponent;
//# sourceMappingURL=tilewms.component.js.map