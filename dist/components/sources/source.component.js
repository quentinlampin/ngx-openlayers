"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var layers_1 = require("../layers");
var map_system_1 = require("../../map-system");
var SourceComponent = (function () {
    function SourceComponent(mapSystem, host) {
        this.mapSystem = mapSystem;
        this.host = host;
        this.componentType = 'source';
    }
    SourceComponent.prototype.ngOnInit = function () {
        this.host.instance.setSource(this.instance);
    };
    SourceComponent.prototype.ngOnDestroy = function () {
        this.host.instance.setSource(null);
    };
    return SourceComponent;
}());
/** @nocollapse */
SourceComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: layers_1.LayerComponent, decorators: [{ type: core_1.Host },] },
]; };
SourceComponent.propDecorators = {
    'attributions': [{ type: core_1.Input },],
};
exports.SourceComponent = SourceComponent;
//# sourceMappingURL=source.component.js.map