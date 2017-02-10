"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var layer_components_1 = require("./layer.components");
var SourceComponent = (function () {
    function SourceComponent(layer) {
        this.componentType = 'source';
        this.host = layer;
    }
    SourceComponent.prototype.ngOnInit = function () {
        this.host.instance.setSource(this.instance);
    };
    SourceComponent.prototype.ngOnDestroy = function () {
        this.host.instance.setSource(null);
    };
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
                    template: "<div class=\"aol-source-osm\"></div>"
                },] },
    ];
    /** @nocollapse */
    SourceOsmComponent.ctorParameters = function () { return [
        { type: layer_components_1.LayerTileComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return SourceOsmComponent;
}(SourceComponent));
exports.SourceOsmComponent = SourceOsmComponent;
var SourceBingmapsComponent = (function (_super) {
    __extends(SourceBingmapsComponent, _super);
    function SourceBingmapsComponent(layer) {
        _super.call(this, layer);
    }
    SourceBingmapsComponent.prototype.ngOnInit = function () {
        this.imagerySet = this.imagerySet ? this.imagerySet : 'Aerial';
        this.instance = new openlayers_1.source.BingMaps(this);
        this.host.instance.setSource(this.instance);
    };
    SourceBingmapsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-source-bingmaps',
                    template: "<div class=\"aol-source-bingmaps\"></div>"
                },] },
    ];
    /** @nocollapse */
    SourceBingmapsComponent.ctorParameters = function () { return [
        { type: layer_components_1.LayerTileComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    SourceBingmapsComponent.propDecorators = {
        'key': [{ type: core_1.Input, args: ['key',] },],
        'imagerySet': [{ type: core_1.Input, args: ['imagerySet',] },],
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
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    SourceVectorComponent.ctorParameters = function () { return [
        { type: layer_components_1.LayerVectorComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    SourceVectorComponent.propDecorators = {
        'attributions': [{ type: core_1.Input, args: ['attributions',] },],
        'overlaps': [{ type: core_1.Input, args: ['overlaps',] },],
        'useSpatialIndex': [{ type: core_1.Input, args: ['useSpatialIndex',] },],
        'wrapX': [{ type: core_1.Input, args: ['wrapX',] },],
    };
    return SourceVectorComponent;
}(SourceComponent));
exports.SourceVectorComponent = SourceVectorComponent;
//# sourceMappingURL=source.components.js.map