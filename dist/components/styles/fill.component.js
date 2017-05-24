"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var style_component_1 = require("./style.component");
var circle_component_1 = require("./circle.component");
var text_component_1 = require("./text.component");
var StyleFillComponent = (function () {
    function StyleFillComponent(styleHost, styleCircleHost, styleTextHost) {
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
        // console.log('creating aol-style-fill with: ', this);
    }
    StyleFillComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.style.Fill instance with: ', this);
        this.instance = new openlayers_1.style.Fill(this);
        switch (this.host.componentType) {
            case 'style':
                this.host.instance.setFill(this.instance);
                // console.log('setting ol.style instance\'s fill:', this.host);
                break;
            case 'style-text':
                this.host.instance.setFill(this.instance);
                break;
            case 'style-circle':
                this.host.fill = this.instance;
                // console.log('setting ol.style.circle instance\'s fill:', this.host);
                break;
            default:
                throw new Error('unknown host type: ' + this.host);
        }
    };
    StyleFillComponent.prototype.ngOnChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes['color']) {
            this.instance.setColor(changes['color'].currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-fill, setting new color: ', changes);
    };
    return StyleFillComponent;
}());
StyleFillComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-style-fill',
                template: "<div class=\"aol-style-fill\"></div>",
            },] },
];
/** @nocollapse */
StyleFillComponent.ctorParameters = function () { return [
    { type: style_component_1.StyleComponent, decorators: [{ type: core_1.Optional },] },
    { type: circle_component_1.StyleCircleComponent, decorators: [{ type: core_1.Optional },] },
    { type: text_component_1.StyleTextComponent, decorators: [{ type: core_1.Optional },] },
]; };
StyleFillComponent.propDecorators = {
    'color': [{ type: core_1.Input },],
};
exports.StyleFillComponent = StyleFillComponent;
//# sourceMappingURL=fill.component.js.map