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
__decorate([
    core_1.Input(),
    __metadata("design:type", openlayers_1.style.Fill)
], StyleCircleComponent.prototype, "fill", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StyleCircleComponent.prototype, "radius", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], StyleCircleComponent.prototype, "snapToPixel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", openlayers_1.style.Stroke)
], StyleCircleComponent.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", openlayers_1.style.AtlasManager)
], StyleCircleComponent.prototype, "atlasManager", void 0);
StyleCircleComponent = __decorate([
    core_1.Component({
        selector: 'aol-style-circle',
        template: "<ng-content></ng-content>"
    }),
    __param(0, core_1.Host()),
    __metadata("design:paramtypes", [style_component_1.StyleComponent])
], StyleCircleComponent);
exports.StyleCircleComponent = StyleCircleComponent;
//# sourceMappingURL=circle.component.js.map