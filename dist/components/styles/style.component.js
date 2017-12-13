"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var feature_component_1 = require("../feature.component");
var layers_1 = require("../layers");
var map_system_1 = require("../../map-system");
var StyleComponent = (function () {
    function StyleComponent(mapSystem, featureHost, layerHost) {
        this.mapSystem = mapSystem;
        this.componentType = 'style';
        // console.log('creating aol-style');
        this.host = !!featureHost ? featureHost : layerHost;
        if (!this.host) {
            throw new Error('aol-style must be applied to a feature or a layer');
        }
    }
    StyleComponent.prototype.update = function () {
        // console.log('updating style\'s host: ', this.host);
        this.host.instance.changed();
    };
    StyleComponent.prototype.ngOnInit = function () {
        // console.log('creating aol-style instance with: ', this);
        this.instance = new this.mapSystem.style.Style(this);
        this.host.instance.setStyle(this.instance);
    };
    return StyleComponent;
}());
StyleComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-style',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
StyleComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: feature_component_1.FeatureComponent, decorators: [{ type: core_1.Optional },] },
    { type: layers_1.LayerVectorComponent, decorators: [{ type: core_1.Optional },] },
]; };
StyleComponent.propDecorators = {
    'geometry': [{ type: core_1.Input },],
    'fill': [{ type: core_1.Input },],
    'image': [{ type: core_1.Input },],
    'stroke': [{ type: core_1.Input },],
    'text': [{ type: core_1.Input },],
    'zIndex': [{ type: core_1.Input },],
};
exports.StyleComponent = StyleComponent;
//# sourceMappingURL=style.component.js.map