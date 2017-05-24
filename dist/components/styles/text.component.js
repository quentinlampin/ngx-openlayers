"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var style_component_1 = require("./style.component");
var StyleTextComponent = (function () {
    function StyleTextComponent(host) {
        this.host = host;
        this.componentType = 'style-text';
        if (!host) {
            throw new Error('aol-style-text must be a descendant of aol-style');
        }
        // console.log('creating aol-style-text with: ', this);
    }
    StyleTextComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.style.Text instance with: ', this);
        this.instance = new openlayers_1.style.Text(this);
        this.host.instance.setText(this.instance);
    };
    StyleTextComponent.prototype.ngOnChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes['font']) {
            this.instance.setFont(changes['font'].currentValue);
        }
        if (changes['offsetX']) {
            this.instance.setOffsetX(changes['offsetX'].currentValue);
        }
        if (changes['offsetY']) {
            this.instance.setOffsetY(changes['offsetY'].currentValue);
        }
        if (changes['scale']) {
            this.instance.setScale(changes['scale'].currentValue);
        }
        if (changes['rotation']) {
            this.instance.setRotation(changes['rotation'].currentValue);
        }
        if (changes['text']) {
            this.instance.setText(changes['text'].currentValue);
        }
        if (changes['textAlign']) {
            this.instance.setTextAlign(changes['textAlign'].currentValue);
        }
        if (changes['textBaseLine']) {
            this.instance.setTextBaseline(changes['textBaseLine'].currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-text, setting new properties: ', changes);
    };
    return StyleTextComponent;
}());
StyleTextComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-style-text',
                template: "<div class=\"aol-style-text\"></div>",
            },] },
];
/** @nocollapse */
StyleTextComponent.ctorParameters = function () { return [
    { type: style_component_1.StyleComponent, decorators: [{ type: core_1.Optional },] },
]; };
StyleTextComponent.propDecorators = {
    'font': [{ type: core_1.Input },],
    'offsetX': [{ type: core_1.Input },],
    'offsetY': [{ type: core_1.Input },],
    'scale': [{ type: core_1.Input },],
    'rotateWithView': [{ type: core_1.Input },],
    'rotation': [{ type: core_1.Input },],
    'text': [{ type: core_1.Input },],
    'textAlign': [{ type: core_1.Input },],
    'textBaseLine': [{ type: core_1.Input },],
};
exports.StyleTextComponent = StyleTextComponent;
//# sourceMappingURL=text.component.js.map