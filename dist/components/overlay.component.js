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
var map_component_1 = require("./map.component");
var openlayers_1 = require("openlayers");
var content_component_1 = require("./content.component");
var OverlayComponent = (function () {
    function OverlayComponent(map) {
        this.map = map;
        this.componentType = 'overlay';
    }
    OverlayComponent.prototype.ngOnInit = function () {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new openlayers_1.Overlay(this);
            this.map.instance.addOverlay(this.instance);
        }
    };
    OverlayComponent.prototype.ngOnDestroy = function () {
        if (this.instance) {
            this.map.instance.removeOverlay(this.instance);
        }
    };
    return OverlayComponent;
}());
__decorate([
    core_1.ContentChild(content_component_1.ContentComponent),
    __metadata("design:type", content_component_1.ContentComponent)
], OverlayComponent.prototype, "content", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OverlayComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], OverlayComponent.prototype, "offset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], OverlayComponent.prototype, "positioning", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OverlayComponent.prototype, "stopEvent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OverlayComponent.prototype, "insertFirst", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OverlayComponent.prototype, "autoPan", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OverlayComponent.prototype, "autoPanAnimation", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], OverlayComponent.prototype, "autoPanMargin", void 0);
OverlayComponent = __decorate([
    core_1.Component({
        selector: 'aol-overlay',
        template: '<ng-content></ng-content>'
    }),
    __metadata("design:paramtypes", [map_component_1.MapComponent])
], OverlayComponent);
exports.OverlayComponent = OverlayComponent;
//# sourceMappingURL=overlay.component.js.map