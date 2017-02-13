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
var map_component_1 = require("../map.component");
var ControlComponent = (function () {
    function ControlComponent(map, elementRef) {
        this.map = map;
        this.elementRef = elementRef;
        this.componentType = 'control';
    }
    ControlComponent.prototype.ngOnInit = function () {
        this.element = this.elementRef.nativeElement.children[0];
        this.instance = new openlayers_1.control.Control(this);
        this.map.instance.addControl(this.instance);
    };
    ControlComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeControl(this.instance);
    };
    return ControlComponent;
}());
ControlComponent = __decorate([
    core_1.Component({
        selector: 'aol-control',
        template: "<ng-content></ng-content>"
    }),
    __param(0, core_1.Host()),
    __metadata("design:paramtypes", [map_component_1.MapComponent,
        core_1.ElementRef])
], ControlComponent);
exports.ControlComponent = ControlComponent;
//# sourceMappingURL=control.component.js.map