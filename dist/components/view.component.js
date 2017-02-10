"use strict";
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var map_component_1 = require("./map.component");
var ViewComponent = (function () {
    function ViewComponent(map) {
        this.componentType = 'view';
        this.constrainRotation = undefined;
        this.enableRotation = undefined;
        this.extent = undefined;
        this.maxResolution = undefined;
        this.minResolution = undefined;
        this.maxZoom = undefined;
        this.minZoom = undefined;
        this.resolution = undefined;
        this.resolutions = undefined;
        this.rotation = undefined;
        this.zoom = undefined;
        this.zoomFactor = undefined;
        this.host = map;
    }
    ViewComponent.prototype.ngOnInit = function () {
        console.log('creating ol.View instance with: ', this);
        this.instance = new openlayers_1.View(this);
        this.host.instance.setView(this.instance);
    };
    ViewComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            switch (key) {
                case 'zoom':
                    /** Work-around: setting the zoom via setProperties does not work. */
                    this.instance.setZoom(changes[key].currentValue);
                    break;
                default:
                    break;
            }
            properties[key] = changes[key].currentValue;
        }
        console.log('changes detected in aol-view, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        console.log('removing aol-view');
    };
    ViewComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-view',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ViewComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    ViewComponent.propDecorators = {
        'constrainRotation': [{ type: core_1.Input, args: ['constrainRotation',] },],
        'enableRotation': [{ type: core_1.Input, args: ['enableRotation',] },],
        'extent': [{ type: core_1.Input, args: ['extent',] },],
        'maxResolution': [{ type: core_1.Input, args: ['maxResolution',] },],
        'minResolution': [{ type: core_1.Input, args: ['minResolution',] },],
        'maxZoom': [{ type: core_1.Input, args: ['maxZoom',] },],
        'minZoom': [{ type: core_1.Input, args: ['minZoom',] },],
        'resolution': [{ type: core_1.Input, args: ['resolution',] },],
        'resolutions': [{ type: core_1.Input, args: ['resolutions',] },],
        'rotation': [{ type: core_1.Input, args: ['rotation',] },],
        'zoom': [{ type: core_1.Input, args: ['zoom',] },],
        'zoomFactor': [{ type: core_1.Input, args: ['zoomFactor',] },],
    };
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view.component.js.map