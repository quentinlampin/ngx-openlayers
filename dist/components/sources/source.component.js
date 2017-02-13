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
var layers_1 = require("../layers");
var SourceComponent = (function () {
    function SourceComponent(host) {
        this.host = host;
        this.componentType = 'source';
    }
    SourceComponent.prototype.ngOnInit = function () {
        this.host.instance.setSource(this.instance);
    };
    SourceComponent.prototype.ngOnDestroy = function () {
        this.host.instance.setSource(null);
    };
    return SourceComponent;
}());
SourceComponent = __decorate([
    __param(0, core_1.Host()),
    __metadata("design:paramtypes", [layers_1.LayerComponent])
], SourceComponent);
exports.SourceComponent = SourceComponent;
//# sourceMappingURL=source.component.js.map