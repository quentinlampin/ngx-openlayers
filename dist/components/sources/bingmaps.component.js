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
var SourceBingmapsComponent = (function (_super) {
    __extends(SourceBingmapsComponent, _super);
    function SourceBingmapsComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.imagerySet = 'Aerial';
        return _this;
    }
    SourceBingmapsComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.source.BingMaps(this);
        this.host.instance.setSource(this.instance);
    };
    return SourceBingmapsComponent;
}(source_component_1.SourceComponent));
SourceBingmapsComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-source-bingmaps',
                template: "<div class=\"aol-source-bingmaps\"></div>",
                providers: [
                    { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceBingmapsComponent; }) }
                ]
            },] },
];
/** @nocollapse */
SourceBingmapsComponent.ctorParameters = function () { return [
    { type: layers_1.LayerTileComponent, decorators: [{ type: core_1.Host },] },
]; };
SourceBingmapsComponent.propDecorators = {
    'cacheSize': [{ type: core_1.Input },],
    'hidpi': [{ type: core_1.Input },],
    'culture': [{ type: core_1.Input },],
    'key': [{ type: core_1.Input },],
    'imagerySet': [{ type: core_1.Input },],
    'maxZoom': [{ type: core_1.Input },],
    'reprojectionErrorThreshold': [{ type: core_1.Input },],
    'tileLoadFunction': [{ type: core_1.Input },],
    'wrapX': [{ type: core_1.Input },],
};
exports.SourceBingmapsComponent = SourceBingmapsComponent;
//# sourceMappingURL=bingmaps.component.js.map