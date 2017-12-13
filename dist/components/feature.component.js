"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sources_1 = require("./sources");
var map_system_1 = require("../map-system");
var FeatureComponent = (function () {
    function FeatureComponent(mapSystem, host) {
        this.mapSystem = mapSystem;
        this.host = host;
        this.componentType = 'feature';
    }
    FeatureComponent.prototype.ngOnInit = function () {
        this.instance = new this.mapSystem.Feature();
        if (this.id !== undefined) {
            this.instance.setId(this.id);
        }
        this.host.instance.addFeature(this.instance);
    };
    FeatureComponent.prototype.ngOnDestroy = function () {
        this.host.instance.removeFeature(this.instance);
    };
    FeatureComponent.prototype.ngOnChanges = function (changes) {
        if (this.instance) {
            this.instance.setId(this.id);
        }
    };
    return FeatureComponent;
}());
FeatureComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-feature',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
FeatureComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: sources_1.SourceVectorComponent, },
]; };
FeatureComponent.propDecorators = {
    'id': [{ type: core_1.Input },],
};
exports.FeatureComponent = FeatureComponent;
//# sourceMappingURL=feature.component.js.map