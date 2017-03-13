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
var source_component_1 = require("./sources/source.component");
var attribution_component_1 = require("./attribution.component");
var AttributionsComponent = (function () {
    function AttributionsComponent(source) {
        this.source = source;
    }
    /* we can do this at the very end */
    AttributionsComponent.prototype.ngAfterViewInit = function () {
        if (this.attributions.length) {
            this.instance = this.attributions.map(function (cmp) { return cmp.instance; });
            // console.log('setting attributions:', this.instance);
            this.source.instance.setAttributions(this.instance);
        }
    };
    return AttributionsComponent;
}());
__decorate([
    core_1.ContentChildren(attribution_component_1.AttributionComponent),
    __metadata("design:type", core_1.QueryList)
], AttributionsComponent.prototype, "attributions", void 0);
AttributionsComponent = __decorate([
    core_1.Component({
        selector: 'aol-attributions',
        template: '<ng-content></ng-content>'
    }),
    __param(0, core_1.Host()),
    __metadata("design:paramtypes", [source_component_1.SourceComponent])
], AttributionsComponent);
exports.AttributionsComponent = AttributionsComponent;
//# sourceMappingURL=attributions.component.js.map