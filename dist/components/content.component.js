"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContentComponent = (function () {
    function ContentComponent(elementRef) {
        this.elementRef = elementRef;
    }
    return ContentComponent;
}());
ContentComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-content',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
ContentComponent.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=content.component.js.map