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
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StyleTextComponent.prototype, "font", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StyleTextComponent.prototype, "offsetX", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StyleTextComponent.prototype, "offsetY", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StyleTextComponent.prototype, "scale", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], StyleTextComponent.prototype, "rotateWithView", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StyleTextComponent.prototype, "rotation", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StyleTextComponent.prototype, "text", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StyleTextComponent.prototype, "textAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StyleTextComponent.prototype, "textBaseLine", void 0);
StyleTextComponent = __decorate([
    core_1.Component({
        selector: 'aol-style-text',
        template: "<div class=\"aol-style-text\"></div>",
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [style_component_1.StyleComponent])
], StyleTextComponent);
exports.StyleTextComponent = StyleTextComponent;
//# sourceMappingURL=text.component.js.map