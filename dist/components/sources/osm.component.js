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
var SourceOsmComponent = (function (_super) {
    __extends(SourceOsmComponent, _super);
    function SourceOsmComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceOsmComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.source.OSM(this);
        this.host.instance.setSource(this.instance);
    };
    return SourceOsmComponent;
}(source_component_1.SourceComponent));
SourceOsmComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-source-osm',
                template: "<div class=\"aol-source-osm\"></div>",
                providers: [
                    { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceOsmComponent; }) }
                ]
            },] },
];
/** @nocollapse */
SourceOsmComponent.ctorParameters = function () { return [
    { type: layers_1.LayerTileComponent, decorators: [{ type: core_1.Host },] },
]; };
SourceOsmComponent.propDecorators = {
    'attributions': [{ type: core_1.Input },],
    'cacheSize': [{ type: core_1.Input },],
    'crossOrigin': [{ type: core_1.Input },],
    'maxZoom': [{ type: core_1.Input },],
    'opaque': [{ type: core_1.Input },],
    'reprojectionErrorThreshold': [{ type: core_1.Input },],
    'tileLoadFunction': [{ type: core_1.Input },],
    'url': [{ type: core_1.Input },],
    'wrapX': [{ type: core_1.Input },],
};
exports.SourceOsmComponent = SourceOsmComponent;
//# sourceMappingURL=osm.component.js.map