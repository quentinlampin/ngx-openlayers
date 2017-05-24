"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var style_component_1 = require("./style.component");
var StyleCircleComponent = (function () {
    function StyleCircleComponent(host) {
        this.host = host;
        this.componentType = 'style-circle';
    }
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     */
    StyleCircleComponent.prototype.update = function () {
        if (!!this.instance) {
            // console.log('setting ol.style.Circle instance\'s radius');
            this.instance.setRadius(this.radius);
        }
    };
    StyleCircleComponent.prototype.ngAfterContentInit = function () {
        // console.log('creating ol.style.Circle instance with: ', this);
        this.instance = new openlayers_1.style.Circle(this);
        this.host.instance.setImage(this.instance);
        this.host.update();
    };
    StyleCircleComponent.prototype.ngOnChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes['radius']) {
            this.instance.setRadius(changes['radius'].currentValue);
        }
        // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
    };
    StyleCircleComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-style-circle');
        this.host.instance.setImage(null);
    };
    return StyleCircleComponent;
}());
StyleCircleComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-style-circle',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
StyleCircleComponent.ctorParameters = function () { return [
    { type: style_component_1.StyleComponent, decorators: [{ type: core_1.Host },] },
]; };
StyleCircleComponent.propDecorators = {
    'fill': [{ type: core_1.Input },],
    'radius': [{ type: core_1.Input },],
    'snapToPixel': [{ type: core_1.Input },],
    'stroke': [{ type: core_1.Input },],
    'atlasManager': [{ type: core_1.Input },],
};
exports.StyleCircleComponent = StyleCircleComponent;
//# sourceMappingURL=circle.component.js.map