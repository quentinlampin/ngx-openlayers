"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("./map.component");
var ViewComponent = (function () {
    function ViewComponent(host) {
        this.host = host;
        this.componentType = 'view';
    }
    ViewComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.View instance with: ', this);
        this.instance = new openlayers_1.View(this);
        this.host.instance.setView(this.instance);
    };
    ViewComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
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
        }
        // console.log('changes detected in aol-view, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-view');
    };
    return ViewComponent;
}());
ViewComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-view',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
ViewComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
]; };
ViewComponent.propDecorators = {
    'constrainRotation': [{ type: core_1.Input },],
    'enableRotation': [{ type: core_1.Input },],
    'extent': [{ type: core_1.Input },],
    'maxResolution': [{ type: core_1.Input },],
    'minResolution': [{ type: core_1.Input },],
    'maxZoom': [{ type: core_1.Input },],
    'minZoom': [{ type: core_1.Input },],
    'resolution': [{ type: core_1.Input },],
    'resolutions': [{ type: core_1.Input },],
    'rotation': [{ type: core_1.Input },],
    'zoom': [{ type: core_1.Input },],
    'zoomFactor': [{ type: core_1.Input },],
    'center': [{ type: core_1.Input },],
    'projection': [{ type: core_1.Input },],
};
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view.component.js.map