"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_system_1 = require("../map-system");
var AttributionComponent = (function () {
    function AttributionComponent(mapSystem, elementRef) {
        this.mapSystem = mapSystem;
        this.elementRef = elementRef;
    }
    AttributionComponent.prototype.ngOnInit = function () {
        this.html = this.elementRef.nativeElement.innerHTML;
        this.instance = new this.mapSystem.Attribution(this);
    };
    return AttributionComponent;
}());
AttributionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-attribution',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
AttributionComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: core_1.ElementRef, },
]; };
exports.AttributionComponent = AttributionComponent;
//# sourceMappingURL=attribution.component.js.map