"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var map_component_1 = require('./map.component');
var ControlAttributionComponent = (function (_super) {
    __extends(ControlAttributionComponent, _super);
    function ControlAttributionComponent(map) {
        // console.log('instancing aol-control-attribution');
        _super.call(this);
        this.host = map;
        this.componentType = 'control';
        map.instance.addControl(this);
    }
    ControlAttributionComponent.prototype.ngOnDestroy = function () {
        console.log('removing aol-control-attribution');
        this.host.instance.removeControl(this);
    };
    ControlAttributionComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control-attribution',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ControlAttributionComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return ControlAttributionComponent;
}(openlayers_1.control.Attribution));
exports.ControlAttributionComponent = ControlAttributionComponent;
var ControlFullScreenComponent = (function (_super) {
    __extends(ControlFullScreenComponent, _super);
    function ControlFullScreenComponent(map) {
        // console.log('instancing aol-control-fullscreen');
        _super.call(this);
        this._host_ = map;
        map.instance.addControl(this);
    }
    ControlFullScreenComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-fullscreen');
        this._host_.instance.removeControl(this);
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
var ControlMousePositionComponent = (function (_super) {
    __extends(ControlMousePositionComponent, _super);
    function ControlMousePositionComponent(map) {
        // console.log('instancing aol-control-mouseposition');
        _super.call(this);
        this._host_ = map;
        map.instance.addControl(this);
    }
    ControlMousePositionComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-mouseposition');
        this._host_.instance.removeControl(this);
    };
    ControlMousePositionComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control-mouseposition',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ControlMousePositionComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return ControlMousePositionComponent;
}(openlayers_1.control.MousePosition));
exports.ControlMousePositionComponent = ControlMousePositionComponent;
var ControlOverviewMapComponent = (function (_super) {
    __extends(ControlOverviewMapComponent, _super);
    function ControlOverviewMapComponent(map) {
        // console.log('instancing aol-control-overviewmap');
        _super.call(this);
        this._host_ = map;
        map.instance.addControl(this);
    }
    ControlOverviewMapComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-overviewmap');
        this._host_.instance.removeControl(this);
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
        this._host_ = map;
        map.instance.addControl(this);
    }
    ControlRotateComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-rotate');
        this._host_.instance.removeControl(this);
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
        this._host_ = map;
        map.instance.addControl(this);
    }
    ControlScaleLineComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-scaleline');
        this._host_.instance.removeControl(this);
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
        this._host_ = map;
        map.instance.addControl(this);
    }
    ControlZoomComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoom');
        this._host_.instance.removeControl(this);
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
        this._host_ = map;
        map.instance.addControl(this);
    }
    ControlZoomSliderComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoomslider');
        this._host_.instance.removeControl(this);
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
        this._host_ = map;
        map.instance.addControl(this);
    }
    ControlZoomToExtentComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoomtoextent');
        this._host_.instance.removeControl(this);
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