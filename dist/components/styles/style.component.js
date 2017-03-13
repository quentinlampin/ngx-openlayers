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
var feature_component_1 = require("../feature.component");
var layers_1 = require("../layers");
var StyleComponent = (function () {
    function StyleComponent(featureHost, layerHost) {
        this.componentType = 'style';
        // console.log('creating aol-style');
        this.host = !!featureHost ? featureHost : layerHost;
        if (!this.host) {
            throw new Error('aol-style must be applied to a feature or a layer');
        }
    }
    StyleComponent.prototype.update = function () {
        // console.log('updating style\'s host: ', this.host);
        this.host.instance.changed();
    };
    StyleComponent.prototype.ngOnInit = function () {
        // console.log('creating aol-style instance with: ', this);
        this.instance = new openlayers_1.style.Style(this);
        this.host.instance.setStyle(this.instance);
    };
    return StyleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StyleComponent.prototype, "geometry", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", openlayers_1.style.Fill)
], StyleComponent.prototype, "fill", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", openlayers_1.style.Image)
], StyleComponent.prototype, "image", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", openlayers_1.style.Stroke)
], StyleComponent.prototype, "stroke", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", openlayers_1.style.Text)
], StyleComponent.prototype, "text", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StyleComponent.prototype, "zIndex", void 0);
StyleComponent = __decorate([
    core_1.Component({
        selector: 'aol-style',
        template: "<ng-content></ng-content>"
    }),
    __param(0, core_1.Optional()),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [feature_component_1.FeatureComponent,
        layers_1.LayerVectorComponent])
], StyleComponent);
exports.StyleComponent = StyleComponent;
//# sourceMappingURL=style.component.js.map