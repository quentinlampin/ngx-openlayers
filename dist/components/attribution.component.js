"use strict";
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var AttributionComponent = (function () {
    function AttributionComponent(elementRef) {
        this.elementRef = elementRef;
    }
    AttributionComponent.prototype.ngOnInit = function () {
        this.html = this.elementRef.nativeElement.innerHTML;
        this.instance = new openlayers_1.Attribution(this);
    };
    AttributionComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-attribution',
                    template: '<ng-content></ng-content>'
                },] },
    ];
    /** @nocollapse */
    AttributionComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return AttributionComponent;
}());
exports.AttributionComponent = AttributionComponent;
//# sourceMappingURL=attribution.component.js.map