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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("./map.component");
var geometry_components_1 = require("./geometry.components");
var view_component_1 = require("./view.component");
var overlay_component_1 = require("./overlay.component");
var CoordinateComponent = (function () {
    function CoordinateComponent(map, viewHost, geometryPointHost, overlayHost) {
        this.map = map;
        this.srid = 'EPSG:3857';
        // console.log('instancing aol-coordinate');
        if (geometryPointHost !== null) {
            this.host = geometryPointHost;
        }
        else if (viewHost !== null) {
            this.host = viewHost;
        }
        else if (overlayHost !== null) {
            this.host = overlayHost;
        }
    }
    CoordinateComponent.prototype.ngOnChanges = function () {
        var referenceProjection;
        var referenceProjectionCode;
        var transformedCoordinates;
        referenceProjection = this.map.instance.getView().getProjection();
        referenceProjectionCode = referenceProjection ? referenceProjection.getCode() : 'EPSG:3857';
        if (this.srid === referenceProjectionCode) {
            transformedCoordinates = [this.x, this.y];
        }
        else {
            transformedCoordinates = openlayers_1.proj.transform([this.x, this.y], this.srid, referenceProjectionCode);
        }
        switch (this.host.componentType) {
            case 'geometry-point':
                this.host.instance.setCoordinates(transformedCoordinates);
                break;
            case 'view':
                this.host.instance.setCenter(transformedCoordinates);
                break;
            case 'overlay':
                this.host.instance.setPosition(transformedCoordinates);
                break;
        }
    };
    return CoordinateComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CoordinateComponent.prototype, "x", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CoordinateComponent.prototype, "y", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CoordinateComponent.prototype, "srid", void 0);
CoordinateComponent = __decorate([
    core_1.Component({
        selector: 'aol-coordinate',
        template: "<div class=\"aol-coordinate\"></div>"
    }),
    __param(1, core_1.Optional()),
    __param(2, core_1.Optional()),
    __param(3, core_1.Optional()),
    __metadata("design:paramtypes", [map_component_1.MapComponent,
        view_component_1.ViewComponent,
        geometry_components_1.GeometryPointComponent,
        overlay_component_1.OverlayComponent])
], CoordinateComponent);
exports.CoordinateComponent = CoordinateComponent;
var CollectionCoordinatesComponent = (function () {
    function CollectionCoordinatesComponent(map, geometryLinestring, geometryPolygon) {
        this.map = map;
        this.srid = 'EPSG:3857';
        // console.log('creating aol-collection-coordinates');
        if (!!geometryLinestring) {
            this.host = geometryLinestring;
        }
        else if (!!geometryPolygon) {
            this.host = geometryPolygon;
        }
        else {
            throw new Error('aol-collection-coordinates must be a child of a geometry component');
        }
    }
    CollectionCoordinatesComponent.prototype.ngOnChanges = function () {
        var referenceProjection;
        var referenceProjectionCode;
        var transformedCoordinates;
        // console.log('coordinates change: ', this.coordinates);
        referenceProjection = this.map.instance.getView().getProjection();
        referenceProjectionCode = referenceProjection ? referenceProjection.getCode() : 'EPSG:3857';
        if (this.srid === referenceProjectionCode) {
            transformedCoordinates = this.coordinates;
        }
        else {
            transformedCoordinates = [];
            this.coordinates.forEach(function (coordinate) {
                transformedCoordinates.push(openlayers_1.proj.transform(coordinate, this.srid, referenceProjectionCode));
            }.bind(this));
        }
        switch (this.host.componentType) {
            case 'geometry-linestring':
                this.host.instance.setCoordinates(transformedCoordinates);
                break;
            case 'geometry-polygon':
                this.host.instance.setCoordinates([transformedCoordinates]);
                break;
            default:
                throw new Error('aol-collection-coordinates\' host is of unknown type: ' + this.host.componentType);
        }
    };
    return CollectionCoordinatesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CollectionCoordinatesComponent.prototype, "coordinates", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CollectionCoordinatesComponent.prototype, "srid", void 0);
CollectionCoordinatesComponent = __decorate([
    core_1.Component({
        selector: 'aol-collection-coordinates',
        template: "<div class=\"aol-collection-coordinates\"></div>"
    }),
    __param(1, core_1.Optional()),
    __param(2, core_1.Optional()),
    __metadata("design:paramtypes", [map_component_1.MapComponent,
        geometry_components_1.GeometryLinestringComponent,
        geometry_components_1.GeometryPolygonComponent])
], CollectionCoordinatesComponent);
exports.CollectionCoordinatesComponent = CollectionCoordinatesComponent;
//# sourceMappingURL=coordinate.component.js.map