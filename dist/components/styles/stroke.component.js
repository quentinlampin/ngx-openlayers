"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var style_component_1 = require("./style.component");
var circle_component_1 = require("./circle.component");
var text_component_1 = require("./text.component");
var StyleStrokeComponent = (function () {
    function StyleStrokeComponent(styleHost, styleCircleHost, styleTextHost) {
        if (!styleHost) {
            throw new Error('aol-style-stroke must be a descendant of aol-style');
        }
        if (!!styleTextHost) {
            this.host = styleTextHost;
        }
        else if (!!styleCircleHost) {
            this.host = styleCircleHost;
        }
        else {
            this.host = styleHost;
        }
        // console.log('creating aol-style-stroke with: ', this);
    }
    StyleStrokeComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.style.Stroke instance with: ', this);
        this.instance = new openlayers_1.style.Stroke(this);
        switch (this.host.componentType) {
            case 'style':
                this.host.instance.setStroke(this.instance);
                // console.log('setting ol.style instance\'s stroke:', this.host);
                break;
            case 'style-text':
                this.host.instance.setStroke(this.instance);
                break;
            case 'style-circle':
                this.host.stroke = this.instance;
                // console.log('setting ol.style.circle instance\'s stroke:', this.host);
                break;
            default:
                throw new Error('unknown host type: ' + this.host);
        }
    };
    StyleStrokeComponent.prototype.ngOnChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes['color']) {
            this.instance.setColor(changes['color'].currentValue);
        }
        if (changes['lineCap']) {
            this.instance.setLineCap(changes['lineCap'].currentValue);
        }
        if (changes['lineDash']) {
            this.instance.setLineDash(changes['lineDash'].currentValue);
        }
        if (changes['lineJoin']) {
            this.instance.setLineJoin(changes['lineJoin'].currentValue);
        }
        if (changes['miterLimit']) {
            this.instance.setMiterLimit(changes['miterLimit'].currentValue);
        }
        if (changes['width']) {
            this.instance.setWidth(changes['width'].currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-stroke, setting new properties: ', changes);
    };
    return StyleStrokeComponent;
}());
StyleStrokeComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-style-stroke',
                template: "<div class=\"aol-style-stroke\"></div>",
            },] },
];
/** @nocollapse */
StyleStrokeComponent.ctorParameters = function () { return [
    { type: style_component_1.StyleComponent, decorators: [{ type: core_1.Optional },] },
    { type: circle_component_1.StyleCircleComponent, decorators: [{ type: core_1.Optional },] },
    { type: text_component_1.StyleTextComponent, decorators: [{ type: core_1.Optional },] },
]; };
StyleStrokeComponent.propDecorators = {
    'color': [{ type: core_1.Input },],
    'lineCap': [{ type: core_1.Input },],
    'lineDash': [{ type: core_1.Input },],
    'lineJoin': [{ type: core_1.Input },],
    'miterLimit': [{ type: core_1.Input },],
    'width': [{ type: core_1.Input },],
};
exports.StyleStrokeComponent = StyleStrokeComponent;
//# sourceMappingURL=stroke.component.js.map