"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var layers_1 = require("../layers");
var SourceComponent = (function () {
    function SourceComponent(host) {
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
    { type: layers_1.LayerComponent, decorators: [{ type: core_1.Host },] },
]; };
SourceComponent.propDecorators = {
    'attributions': [{ type: core_1.Input },],
};
exports.SourceComponent = SourceComponent;
//# sourceMappingURL=source.component.js.map