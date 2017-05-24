"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var source_component_1 = require("./sources/source.component");
var attribution_component_1 = require("./attribution.component");
var AttributionsComponent = (function () {
    function AttributionsComponent(source) {
        this.source = source;
    }
    /* we can do this at the very end */
    AttributionsComponent.prototype.ngAfterViewInit = function () {
        if (this.attributions.length) {
            this.instance = this.attributions.map(function (cmp) { return cmp.instance; });
            // console.log('setting attributions:', this.instance);
            this.source.instance.setAttributions(this.instance);
        }
    };
    return AttributionsComponent;
}());
AttributionsComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-attributions',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
AttributionsComponent.ctorParameters = function () { return [
    { type: source_component_1.SourceComponent, decorators: [{ type: core_1.Host },] },
]; };
AttributionsComponent.propDecorators = {
    'attributions': [{ type: core_1.ContentChildren, args: [attribution_component_1.AttributionComponent,] },],
};
exports.AttributionsComponent = AttributionsComponent;
//# sourceMappingURL=attributions.component.js.map