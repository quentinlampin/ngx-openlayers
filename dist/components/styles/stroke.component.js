"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StyleStrokeComponent.prototype, "color", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StyleStrokeComponent.prototype, "lineCap", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], StyleStrokeComponent.prototype, "lineDash", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StyleStrokeComponent.prototype, "lineJoin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StyleStrokeComponent.prototype, "miterLimit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StyleStrokeComponent.prototype, "width", void 0);
StyleStrokeComponent = __decorate([
    core_1.Component({
        selector: 'aol-style-stroke',
        template: "<div class=\"aol-style-stroke\"></div>",
    }),
    __param(0, core_1.Optional()),
    __param(1, core_1.Optional()),
    __param(2, core_1.Optional()),
    __metadata("design:paramtypes", [style_component_1.StyleComponent,
        circle_component_1.StyleCircleComponent,
        text_component_1.StyleTextComponent])
], StyleStrokeComponent);
exports.StyleStrokeComponent = StyleStrokeComponent;
//# sourceMappingURL=stroke.component.js.map