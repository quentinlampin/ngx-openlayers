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
var content_component_1 = require("../content.component");
var ControlComponent = (function () {
    function ControlComponent(map) {
        this.map = map;
        this.componentType = 'control';
    }
    ControlComponent.prototype.ngOnInit = function () {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new openlayers_1.control.Control(this);
            this.map.instance.addControl(this.instance);
        }
    };
    ControlComponent.prototype.ngOnDestroy = function () {
        if (this.instance) {
            this.map.instance.removeControl(this.instance);
        }
    };
    return ControlComponent;
}());
__decorate([
    core_1.ContentChild(content_component_1.ContentComponent),
    __metadata("design:type", content_component_1.ContentComponent)
], ControlComponent.prototype, "content", void 0);
ControlComponent = __decorate([
    core_1.Component({
        selector: 'aol-control',
        template: "<ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [map_component_1.MapComponent])
], ControlComponent);
exports.ControlComponent = ControlComponent;
//# sourceMappingURL=control.component.js.map