"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var layers_1 = require('../layers');
var formats_1 = require('../formats');
var tilegrid_component_1 = require('../tilegrid.component');
var source_component_1 = require('./source.component');
var SourceVectorTileComponent = (function (_super) {
    __extends(SourceVectorTileComponent, _super);
    function SourceVectorTileComponent(layer) {
        _super.call(this, layer);
    }
    /* need the children to construct the OL3 object */
    SourceVectorTileComponent.prototype.ngAfterContentInit = function () {
        this.format = this.formatComponent.instance;
        this.tileGrid = this.tileGridComponent.instance;
        // console.log('creating ol.source.VectorTile instance with:', this);
        this.instance = new openlayers_1.source.VectorTile(this);
        this.host.instance.setSource(this.instance);
    };
    SourceVectorTileComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-source-vectortile',
                    template: "<ng-content></ng-content>",
                    providers: [
                        { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceVectorTileComponent; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    SourceVectorTileComponent.ctorParameters = function () { return [
        { type: layers_1.LayerVectorTileComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    SourceVectorTileComponent.propDecorators = {
        'attributions': [{ type: core_1.Input },],
        'cacheSize': [{ type: core_1.Input },],
        'overlaps': [{ type: core_1.Input },],
        'projection': [{ type: core_1.Input },],
        'tilePixelRatio': [{ type: core_1.Input },],
        'tileUrlFunction': [{ type: core_1.Input },],
        'url': [{ type: core_1.Input },],
        'urls': [{ type: core_1.Input },],
        'wrapX': [{ type: core_1.Input },],
        'formatComponent': [{ type: core_1.ContentChild, args: [formats_1.FormatComponent,] },],
        'tileGridComponent': [{ type: core_1.ContentChild, args: [tilegrid_component_1.TileGridComponent,] },],
    };
    return SourceVectorTileComponent;
}(source_component_1.SourceComponent));
exports.SourceVectorTileComponent = SourceVectorTileComponent;
//# sourceMappingURL=vectortile.component.js.map