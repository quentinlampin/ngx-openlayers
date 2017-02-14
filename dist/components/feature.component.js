"use strict";
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var sources_1 = require('./sources');
var FeatureComponent = (function () {
    function FeatureComponent(host) {
        this.host = host;
        this.componentType = 'feature';
    }
    FeatureComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.Feature();
        this.host.instance.addFeature(this.instance);
    };
    FeatureComponent.prototype.ngOnDestroy = function () {
        this.host.instance.removeFeature(this.instance);
    };
    FeatureComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-feature',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    FeatureComponent.ctorParameters = function () { return [
        { type: sources_1.SourceVectorComponent, },
    ]; };
    return FeatureComponent;
}());
exports.FeatureComponent = FeatureComponent;
//# sourceMappingURL=feature.component.js.map