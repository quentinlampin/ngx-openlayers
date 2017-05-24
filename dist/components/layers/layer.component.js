"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LayerComponent = (function () {
    function LayerComponent(host) {
        this.host = host;
        this.componentType = 'layer';
    }
    LayerComponent.prototype.ngOnInit = function () {
        this.host.instance.addLayer(this.instance);
    };
    LayerComponent.prototype.ngOnDestroy = function () {
        this.host.instance.removeLayer(this.instance);
    };
    LayerComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-layer, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    return LayerComponent;
}());
LayerComponent.propDecorators = {
    'opacity': [{ type: core_1.Input },],
    'visible': [{ type: core_1.Input },],
    'extent': [{ type: core_1.Input },],
    'zIndex': [{ type: core_1.Input },],
    'minResolution': [{ type: core_1.Input },],
    'maxResolution': [{ type: core_1.Input },],
};
exports.LayerComponent = LayerComponent;
//# sourceMappingURL=layer.component.js.map