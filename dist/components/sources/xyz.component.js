"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var layers_1 = require('../layers');
var source_component_1 = require('./source.component');
var SourceXYZComponent = (function (_super) {
    __extends(SourceXYZComponent, _super);
    function SourceXYZComponent(layer) {
        _super.call(this, layer);
    }
    SourceXYZComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.source.XYZ instance with:', this);
        this.instance = new openlayers_1.source.XYZ(this);
        this.host.instance.setSource(this.instance);
    };
    SourceXYZComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-source-xyz',
                    template: "<ng-content></ng-content>",
                    providers: [
                        { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceXYZComponent; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    SourceXYZComponent.ctorParameters = function () { return [
        { type: layers_1.LayerTileComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    SourceXYZComponent.propDecorators = {
        'cacheSize': [{ type: core_1.Input },],
        'crossOrigin': [{ type: core_1.Input },],
        'opaque': [{ type: core_1.Input },],
        'projection': [{ type: core_1.Input },],
        'reprojectionErrorThreshold': [{ type: core_1.Input },],
        'minZoom': [{ type: core_1.Input },],
        'maxZoom': [{ type: core_1.Input },],
        'tilePixelRatio': [{ type: core_1.Input },],
        'tileSize': [{ type: core_1.Input },],
        'tileUrlFunction': [{ type: core_1.Input },],
        'url': [{ type: core_1.Input },],
        'urls': [{ type: core_1.Input },],
        'wrapX': [{ type: core_1.Input },],
    };
    return SourceXYZComponent;
}(source_component_1.SourceComponent));
exports.SourceXYZComponent = SourceXYZComponent;
//# sourceMappingURL=xyz.component.js.map