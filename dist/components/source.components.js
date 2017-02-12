"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var layers_1 = require('./layers');
var format_component_1 = require('./format.component');
var tilegrid_component_1 = require('./tilegrid.component');
var SourceComponent = (function () {
    function SourceComponent(host) {
        this.host = host;
        this.componentType = 'source';
    }
    SourceComponent.prototype.ngOnInit = function () {
        this.host.instance.setSource(this.instance);
    };
    SourceComponent.prototype.ngOnDestroy = function () {
        this.host.instance.setSource(null);
    };
    /** @nocollapse */
    SourceComponent.ctorParameters = function () { return [
        { type: layers_1.LayerComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return SourceComponent;
}());
exports.SourceComponent = SourceComponent;
var SourceOsmComponent = (function (_super) {
    __extends(SourceOsmComponent, _super);
    function SourceOsmComponent(layer) {
        _super.call(this, layer);
    }
    SourceOsmComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.source.OSM(this);
        this.host.instance.setSource(this.instance);
    };
    SourceOsmComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-source-osm',
                    template: "<div class=\"aol-source-osm\"></div>",
                    providers: [
                        { provide: SourceComponent, useExisting: core_1.forwardRef(function () { return SourceOsmComponent; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    SourceOsmComponent.ctorParameters = function () { return [
        { type: layers_1.LayerTileComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return SourceOsmComponent;
}(SourceComponent));
exports.SourceOsmComponent = SourceOsmComponent;
var SourceBingmapsComponent = (function (_super) {
    __extends(SourceBingmapsComponent, _super);
    function SourceBingmapsComponent(layer) {
        _super.call(this, layer);
        this.imagerySet = 'Aerial';
    }
    SourceBingmapsComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.source.BingMaps(this);
        this.host.instance.setSource(this.instance);
    };
    SourceBingmapsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-source-bingmaps',
                    template: "<div class=\"aol-source-bingmaps\"></div>",
                    providers: [
                        { provide: SourceComponent, useExisting: core_1.forwardRef(function () { return SourceBingmapsComponent; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    SourceBingmapsComponent.ctorParameters = function () { return [
        { type: layers_1.LayerTileComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    SourceBingmapsComponent.propDecorators = {
        'key': [{ type: core_1.Input },],
        'imagerySet': [{ type: core_1.Input },],
    };
    return SourceBingmapsComponent;
}(SourceComponent));
exports.SourceBingmapsComponent = SourceBingmapsComponent;
var SourceVectorComponent = (function (_super) {
    __extends(SourceVectorComponent, _super);
    function SourceVectorComponent(layer) {
        _super.call(this, layer);
    }
    SourceVectorComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.source.Vector(this);
        this.host.instance.setSource(this.instance);
    };
    SourceVectorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-source-vector',
                    template: "<ng-content></ng-content>",
                    providers: [
                        { provide: SourceComponent, useExisting: core_1.forwardRef(function () { return SourceVectorComponent; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    SourceVectorComponent.ctorParameters = function () { return [
        { type: layers_1.LayerVectorComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    SourceVectorComponent.propDecorators = {
        'attributions': [{ type: core_1.Input },],
        'overlaps': [{ type: core_1.Input },],
        'useSpatialIndex': [{ type: core_1.Input },],
        'wrapX': [{ type: core_1.Input },],
    };
    return SourceVectorComponent;
}(SourceComponent));
exports.SourceVectorComponent = SourceVectorComponent;
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
                        { provide: SourceComponent, useExisting: core_1.forwardRef(function () { return SourceXYZComponent; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    SourceXYZComponent.ctorParameters = function () { return [
        { type: layers_1.LayerTileComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    SourceXYZComponent.propDecorators = {
        'attributions': [{ type: core_1.Input },],
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
}(SourceComponent));
exports.SourceXYZComponent = SourceXYZComponent;
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
                        { provide: SourceComponent, useExisting: core_1.forwardRef(function () { return SourceVectorTileComponent; }) }
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
        'formatComponent': [{ type: core_1.ContentChild, args: [format_component_1.FormatComponent,] },],
        'tileGridComponent': [{ type: core_1.ContentChild, args: [tilegrid_component_1.TileGridComponent,] },],
    };
    return SourceVectorTileComponent;
}(SourceComponent));
exports.SourceVectorTileComponent = SourceVectorTileComponent;
//# sourceMappingURL=source.components.js.map