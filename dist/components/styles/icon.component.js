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
var StyleIconComponent = (function () {
    function StyleIconComponent(host) {
        this.host = host;
    }
    StyleIconComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.style.Icon instance with: ', this);
        this.instance = new openlayers_1.style.Icon(this);
        this.host.instance.setImage(this.instance);
    };
    StyleIconComponent.prototype.ngOnChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes['opacity']) {
            this.instance.setOpacity(changes['opacity'].currentValue);
        }
        if (changes['rotation']) {
            this.instance.setRotation(changes['rotation'].currentValue);
        }
        if (changes['scale']) {
            this.instance.setScale(changes['scale'].currentValue);
        }
        if (changes['src']) {
            this.instance = new openlayers_1.style.Icon(this);
            this.host.instance.setImage(this.instance);
        }
        this.host.update();
        // console.log('changes detected in aol-style-icon: ', changes);
    };
    return StyleIconComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], StyleIconComponent.prototype, "anchor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StyleIconComponent.prototype, "anchorXUnits", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StyleIconComponent.prototype, "anchorYUnits", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StyleIconComponent.prototype, "anchorOrigin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], StyleIconComponent.prototype, "color", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StyleIconComponent.prototype, "crossOrigin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StyleIconComponent.prototype, "img", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], StyleIconComponent.prototype, "offset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StyleIconComponent.prototype, "offsetOrigin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StyleIconComponent.prototype, "opacity", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StyleIconComponent.prototype, "scale", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], StyleIconComponent.prototype, "snapToPixel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], StyleIconComponent.prototype, "rotateWithView", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StyleIconComponent.prototype, "rotation", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], StyleIconComponent.prototype, "size", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], StyleIconComponent.prototype, "imgSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], StyleIconComponent.prototype, "src", void 0);
StyleIconComponent = __decorate([
    core_1.Component({
        selector: 'aol-style-icon',
        template: "<div class=\"aol-style-icon\"></div>",
    }),
    __param(0, core_1.Host()),
    __metadata("design:paramtypes", [style_component_1.StyleComponent])
], StyleIconComponent);
exports.StyleIconComponent = StyleIconComponent;
//# sourceMappingURL=icon.component.js.map