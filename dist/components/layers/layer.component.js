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
var map_component_1 = require("../map.component");
var LayerComponent = (function () {
    function LayerComponent(host) {
        this.host = host;
        this.componentType = 'layer';
    }
    LayerComponent.prototype.ngOnInit = function () {
        this.host.instance.addLayer(this.instance);
    };
    LayerComponent.prototype.ngOnDestroy = function () {
        this.host.instance.removeLayer(this.instance);
    };
    LayerComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-layer, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    return LayerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LayerComponent.prototype, "opacity", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], LayerComponent.prototype, "visible", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], LayerComponent.prototype, "extent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LayerComponent.prototype, "zIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LayerComponent.prototype, "minResolution", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LayerComponent.prototype, "maxResolution", void 0);
LayerComponent = __decorate([
    __param(0, core_1.Host()),
    __metadata("design:paramtypes", [map_component_1.MapComponent])
], LayerComponent);
exports.LayerComponent = LayerComponent;
//# sourceMappingURL=layer.component.js.map