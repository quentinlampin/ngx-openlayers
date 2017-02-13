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
var sources_1 = require("./sources");
var FeatureComponent = (function () {
    function FeatureComponent(source) {
        this.componentType = 'feature';
        // console.log('instancing aol-feature');
        this.host = source;
    }
    FeatureComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.Feature();
        this.host.instance.addFeature(this.instance);
    };
    FeatureComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-feature');
        this.host.instance.removeFeature(this);
    };
    return FeatureComponent;
}());
FeatureComponent = __decorate([
    core_1.Component({
        selector: 'aol-feature',
        template: "<ng-content></ng-content>"
    }),
    __param(0, core_1.Host()),
    __metadata("design:paramtypes", [sources_1.SourceVectorComponent])
], FeatureComponent);
exports.FeatureComponent = FeatureComponent;
//# sourceMappingURL=feature.component.js.map