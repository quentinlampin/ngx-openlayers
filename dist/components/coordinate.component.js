"use strict";
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
    CoordinateComponent.prototype.ngOnChanges = function (changes) {
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
CoordinateComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-coordinate',
                template: "<div class=\"aol-coordinate\"></div>"
            },] },
];
/** @nocollapse */
CoordinateComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
    { type: view_component_1.ViewComponent, decorators: [{ type: core_1.Optional },] },
    { type: geometry_components_1.GeometryPointComponent, decorators: [{ type: core_1.Optional },] },
    { type: overlay_component_1.OverlayComponent, decorators: [{ type: core_1.Optional },] },
]; };
CoordinateComponent.propDecorators = {
    'x': [{ type: core_1.Input },],
    'y': [{ type: core_1.Input },],
    'srid': [{ type: core_1.Input },],
};
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
    CollectionCoordinatesComponent.prototype.ngOnChanges = function (changes) {
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
CollectionCoordinatesComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-collection-coordinates',
                template: "<div class=\"aol-collection-coordinates\"></div>"
            },] },
];
/** @nocollapse */
CollectionCoordinatesComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
    { type: geometry_components_1.GeometryLinestringComponent, decorators: [{ type: core_1.Optional },] },
    { type: geometry_components_1.GeometryPolygonComponent, decorators: [{ type: core_1.Optional },] },
]; };
CollectionCoordinatesComponent.propDecorators = {
    'coordinates': [{ type: core_1.Input },],
    'srid': [{ type: core_1.Input },],
};
exports.CollectionCoordinatesComponent = CollectionCoordinatesComponent;
//# sourceMappingURL=coordinate.component.js.map