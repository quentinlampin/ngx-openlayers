"use strict";
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var feature_component_1 = require("./feature.component");
var GeometryLinestringComponent = (function () {
    function GeometryLinestringComponent(feature) {
        this.componentType = 'geometry-linestring';
        // console.log('instancing aol-geometry-linestring');
        this.host = feature;
    }
    GeometryLinestringComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.geom.LineString([]);
        this.host.instance.setGeometry(this.instance);
    };
    GeometryLinestringComponent.prototype.ngOnDestroy = function () {
        // this.host.setGeometry(null);
    };
    GeometryLinestringComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-geometry-linestring',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    GeometryLinestringComponent.ctorParameters = function () { return [
        { type: feature_component_1.FeatureComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return GeometryLinestringComponent;
}());
exports.GeometryLinestringComponent = GeometryLinestringComponent;
var GeometryPointComponent = (function () {
    function GeometryPointComponent(feature) {
        this.componentType = 'geometry-point';
        // console.log('creating aol-geometry-point');
        this.host = feature;
    }
    GeometryPointComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.geom.Point([0, 0]); // defaulting coordinates to [0,0]. To be overridden in child component.
        this.host.instance.setGeometry(this.instance);
    };
    GeometryPointComponent.prototype.ngOnDestroy = function () {
        // this.host.setGeometry(null);
    };
    GeometryPointComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-geometry-point',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    GeometryPointComponent.ctorParameters = function () { return [
        { type: feature_component_1.FeatureComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return GeometryPointComponent;
}());
exports.GeometryPointComponent = GeometryPointComponent;
var GeometryPolygonComponent = (function () {
    function GeometryPolygonComponent(feature) {
        this.componentType = 'geometry-polygon';
        // console.log('creating aol-geometry-polygon');
        this.host = feature;
    }
    GeometryPolygonComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.geom.Polygon([[[0, 0], [1, 0], [1, 1]]]); // defaulting coordinates to [0,0]. To be overridden in child component.
        this.host.instance.setGeometry(this.instance);
    };
    GeometryPolygonComponent.prototype.ngOnDestroy = function () {
        // this.host.setGeometry(null);
    };
    GeometryPolygonComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-geometry-polygon',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    GeometryPolygonComponent.ctorParameters = function () { return [
        { type: feature_component_1.FeatureComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return GeometryPolygonComponent;
}());
exports.GeometryPolygonComponent = GeometryPolygonComponent;
//# sourceMappingURL=geometry.components.js.map