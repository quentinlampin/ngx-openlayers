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
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var DragBoxInteractionComponent = (function () {
    function DragBoxInteractionComponent(map) {
        this.map = map;
    }
    DragBoxInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.interaction.DragBox(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragBoxInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    return DragBoxInteractionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DragBoxInteractionComponent.prototype, "className", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], DragBoxInteractionComponent.prototype, "condition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], DragBoxInteractionComponent.prototype, "boxEndCondition", void 0);
DragBoxInteractionComponent = __decorate([
    core_1.Component({
        selector: 'aol-interaction-dragbox',
        template: ''
    }),
    __metadata("design:paramtypes", [map_component_1.MapComponent])
], DragBoxInteractionComponent);
exports.DragBoxInteractionComponent = DragBoxInteractionComponent;
//# sourceMappingURL=dragbox.component.js.map