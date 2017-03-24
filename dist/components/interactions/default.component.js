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
var DefaultInteractionComponent = (function () {
    function DefaultInteractionComponent(map) {
        this.map = map;
    }
    DefaultInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = openlayers_1.interaction.defaults();
        this.instance.forEach(function (interaction) { return _this.map.instance.addInteraction(interaction); });
    };
    DefaultInteractionComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.instance.forEach(function (interaction) { return _this.map.instance.removeInteraction(interaction); });
    };
    return DefaultInteractionComponent;
}());
DefaultInteractionComponent = __decorate([
    core_1.Component({
        selector: 'aol-interaction-default',
        template: ''
    }),
    __metadata("design:paramtypes", [map_component_1.MapComponent])
], DefaultInteractionComponent);
exports.DefaultInteractionComponent = DefaultInteractionComponent;
//# sourceMappingURL=default.component.js.map