"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var format_component_1 = require("./format.component");
var FormatMVTComponent = FormatMVTComponent_1 = (function (_super) {
    __extends(FormatMVTComponent, _super);
    function FormatMVTComponent() {
        var _this = _super.call(this) || this;
        _this.instance = new openlayers_1.format.MVT(_this);
        return _this;
    }
    return FormatMVTComponent;
}(format_component_1.FormatComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], FormatMVTComponent.prototype, "featureClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FormatMVTComponent.prototype, "geometryName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FormatMVTComponent.prototype, "layerName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], FormatMVTComponent.prototype, "layers", void 0);
FormatMVTComponent = FormatMVTComponent_1 = __decorate([
    core_1.Component({
        selector: 'aol-format-mvt',
        template: '',
        providers: [
            { provide: format_component_1.FormatComponent, useExisting: core_1.forwardRef(function () { return FormatMVTComponent_1; }) }
        ]
    }),
    __metadata("design:paramtypes", [])
], FormatMVTComponent);
exports.FormatMVTComponent = FormatMVTComponent;
var FormatMVTComponent_1;
//# sourceMappingURL=mvt.component.js.map