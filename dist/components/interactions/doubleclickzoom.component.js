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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var DoubleClickZoomInteractionComponent = (function () {
    function DoubleClickZoomInteractionComponent(map) {
        this.map = map;
    }
    DoubleClickZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.interaction.DoubleClickZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    DoubleClickZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    return DoubleClickZoomInteractionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DoubleClickZoomInteractionComponent.prototype, "duration", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DoubleClickZoomInteractionComponent.prototype, "delta", void 0);
DoubleClickZoomInteractionComponent = __decorate([
    core_1.Component({
        selector: 'aol-interaction-doubleclickzoom',
        template: ''
    }),
    __metadata("design:paramtypes", [map_component_1.MapComponent])
], DoubleClickZoomInteractionComponent);
exports.DoubleClickZoomInteractionComponent = DoubleClickZoomInteractionComponent;
//# sourceMappingURL=doubleclickzoom.component.js.map