"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var map_component_1 = require('./map.component');
var ControlAttributionComponent = (function () {
    function ControlAttributionComponent(map, element) {
        this.map = map;
        this.element = element;
        this.componentType = 'control';
    }
    ControlAttributionComponent.prototype.ngOnInit = function () {
        this.target = this.element.nativeElement;
        // console.log('ol.control.Attribution init: ', this);
        this.instance = new openlayers_1.control.Attribution(this);
        this.map.instance.addControl(this.instance);
    };
    ControlAttributionComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-attribution');
        this.map.instance.removeControl(this.instance);
    };
    ControlAttributionComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control-attribution',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ControlAttributionComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
        { type: core_1.ElementRef, },
    ]; };
    ControlAttributionComponent.propDecorators = {
        'collapsible': [{ type: core_1.Input },],
    };
    return ControlAttributionComponent;
}());
exports.ControlAttributionComponent = ControlAttributionComponent;
var ControlFullScreenComponent = (function (_super) {
    __extends(ControlFullScreenComponent, _super);
    function ControlFullScreenComponent(map) {
        // console.log('instancing aol-control-fullscreen');
        _super.call(this);
        this.map = map;
    }
    ControlFullScreenComponent.prototype.ngOnInit = function () {
        this.map.instance.addControl(this);
    };
    ControlFullScreenComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-fullscreen');
        this.map.instance.removeControl(this);
    };
    ControlFullScreenComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control-fullscreen',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ControlFullScreenComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return ControlFullScreenComponent;
}(openlayers_1.control.FullScreen));
exports.ControlFullScreenComponent = ControlFullScreenComponent;
var ControlMousePositionComponent = (function () {
    function ControlMousePositionComponent(map, element) {
        this.map = map;
        this.element = element;
    }
    ControlMousePositionComponent.prototype.ngOnInit = function () {
        this.target = this.element.nativeElement;
        // console.log('ol.control.MousePosition init: ', this);
        this.instance = new openlayers_1.control.MousePosition(this);
        this.map.instance.addControl(this.instance);
    };
    ControlMousePositionComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-mouseposition');
        this.map.instance.removeControl(this.instance);
    };
    ControlMousePositionComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control-mouseposition',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ControlMousePositionComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
        { type: core_1.ElementRef, },
    ]; };
    ControlMousePositionComponent.propDecorators = {
        'coordinateFormat': [{ type: core_1.Input },],
        'projection': [{ type: core_1.Input },],
    };
    return ControlMousePositionComponent;
}());
exports.ControlMousePositionComponent = ControlMousePositionComponent;
var ControlOverviewMapComponent = (function (_super) {
    __extends(ControlOverviewMapComponent, _super);
    function ControlOverviewMapComponent(map) {
        // console.log('instancing aol-control-overviewmap');
        _super.call(this);
        this.map = map;
    }
    ControlOverviewMapComponent.prototype.ngOnInit = function () {
        this.map.instance.addControl(this);
    };
    ControlOverviewMapComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-overviewmap');
        this.map.instance.removeControl(this);
    };
    ControlOverviewMapComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control-overviewmap',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ControlOverviewMapComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return ControlOverviewMapComponent;
}(openlayers_1.control.OverviewMap));
exports.ControlOverviewMapComponent = ControlOverviewMapComponent;
var ControlRotateComponent = (function (_super) {
    __extends(ControlRotateComponent, _super);
    function ControlRotateComponent(map) {
        // console.log('instancing aol-control-rotate');
        _super.call(this);
        this.map = map;
    }
    ControlRotateComponent.prototype.ngOnInit = function () {
        this.map.instance.addControl(this);
    };
    ControlRotateComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-rotate');
        this.map.instance.removeControl(this);
    };
    ControlRotateComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control-rotate',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ControlRotateComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return ControlRotateComponent;
}(openlayers_1.control.Rotate));
exports.ControlRotateComponent = ControlRotateComponent;
var ControlScaleLineComponent = (function (_super) {
    __extends(ControlScaleLineComponent, _super);
    function ControlScaleLineComponent(map) {
        // console.log('instancing aol-control-scaleline');
        _super.call(this);
        this.map = map;
    }
    ControlScaleLineComponent.prototype.ngOnInit = function () {
        this.map.instance.addControl(this);
    };
    ControlScaleLineComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-scaleline');
        this.map.instance.removeControl(this);
    };
    ControlScaleLineComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control-scaleline',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ControlScaleLineComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return ControlScaleLineComponent;
}(openlayers_1.control.ScaleLine));
exports.ControlScaleLineComponent = ControlScaleLineComponent;
var ControlZoomComponent = (function (_super) {
    __extends(ControlZoomComponent, _super);
    function ControlZoomComponent(map) {
        // console.log('instancing aol-control-zoom');
        _super.call(this);
        this.map = map;
    }
    ControlZoomComponent.prototype.ngOnInit = function () {
        this.map.instance.addControl(this);
    };
    ControlZoomComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoom');
        this.map.instance.removeControl(this);
    };
    ControlZoomComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control-zoom',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ControlZoomComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return ControlZoomComponent;
}(openlayers_1.control.Zoom));
exports.ControlZoomComponent = ControlZoomComponent;
var ControlZoomSliderComponent = (function (_super) {
    __extends(ControlZoomSliderComponent, _super);
    function ControlZoomSliderComponent(map) {
        // console.log('instancing aol-control-zoomslider');
        _super.call(this);
        this.map = map;
    }
    ControlZoomSliderComponent.prototype.ngOnInit = function () {
        this.map.instance.addControl(this);
    };
    ControlZoomSliderComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoomslider');
        this.map.instance.removeControl(this);
    };
    ControlZoomSliderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control-zoomslider',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ControlZoomSliderComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return ControlZoomSliderComponent;
}(openlayers_1.control.ZoomSlider));
exports.ControlZoomSliderComponent = ControlZoomSliderComponent;
var ControlZoomToExtentComponent = (function (_super) {
    __extends(ControlZoomToExtentComponent, _super);
    function ControlZoomToExtentComponent(map) {
        // console.log('instancing aol-control-zoomtoextent');
        _super.call(this);
        this.map = map;
    }
    ControlZoomToExtentComponent.prototype.ngOnInit = function () {
        this.map.instance.addControl(this);
    };
    ControlZoomToExtentComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoomtoextent');
        this.map.instance.removeControl(this);
    };
    ControlZoomToExtentComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control-zoomtoextent',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ControlZoomToExtentComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return ControlZoomToExtentComponent;
}(openlayers_1.control.ZoomToExtent));
exports.ControlZoomToExtentComponent = ControlZoomToExtentComponent;
//# sourceMappingURL=control.components.js.map