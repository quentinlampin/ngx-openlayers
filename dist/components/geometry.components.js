"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var feature_component_1 = require("./feature.component");
var GeometryLinestringComponent = (function () {
    function GeometryLinestringComponent(host) {
        this.host = host;
        this.componentType = 'geometry-linestring';
        // console.log('instancing aol-geometry-linestring');
    }
    GeometryLinestringComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.geom.LineString([]);
        this.host.instance.setGeometry(this.instance);
    };
    GeometryLinestringComponent.prototype.ngOnDestroy = function () {
        // this.host.setGeometry(null);
    };
    return GeometryLinestringComponent;
}());
GeometryLinestringComponent = __decorate([
    core_1.Component({
        selector: 'aol-geometry-linestring',
        template: "<ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [feature_component_1.FeatureComponent])
], GeometryLinestringComponent);
exports.GeometryLinestringComponent = GeometryLinestringComponent;
var GeometryPointComponent = (function () {
    function GeometryPointComponent(host) {
        this.host = host;
        this.componentType = 'geometry-point';
        // console.log('creating aol-geometry-point');
    }
    GeometryPointComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.geom.Point([0, 0]); // defaulting coordinates to [0,0]. To be overridden in child component.
        this.host.instance.setGeometry(this.instance);
    };
    GeometryPointComponent.prototype.ngOnDestroy = function () {
        // this.host.setGeometry(null);
    };
    return GeometryPointComponent;
}());
GeometryPointComponent = __decorate([
    core_1.Component({
        selector: 'aol-geometry-point',
        template: "<ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [feature_component_1.FeatureComponent])
], GeometryPointComponent);
exports.GeometryPointComponent = GeometryPointComponent;
var GeometryPolygonComponent = (function () {
    function GeometryPolygonComponent(host) {
        this.host = host;
        this.componentType = 'geometry-polygon';
        // console.log('creating aol-geometry-polygon');
    }
    GeometryPolygonComponent.prototype.ngOnInit = function () {
        // defaulting coordinates to [0,0]. To be overridden in child component.
        this.instance = new openlayers_1.geom.Polygon([[[0, 0], [1, 0], [1, 1]]]);
        this.host.instance.setGeometry(this.instance);
    };
    GeometryPolygonComponent.prototype.ngOnDestroy = function () {
        // this.host.setGeometry(null);
    };
    return GeometryPolygonComponent;
}());
GeometryPolygonComponent = __decorate([
    core_1.Component({
        selector: 'aol-geometry-polygon',
        template: "<ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [feature_component_1.FeatureComponent])
], GeometryPolygonComponent);
exports.GeometryPolygonComponent = GeometryPolygonComponent;
//# sourceMappingURL=geometry.components.js.map