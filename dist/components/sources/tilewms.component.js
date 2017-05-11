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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var layers_1 = require("../layers");
var source_component_1 = require("./source.component");
var SourceTileWMSComponent = SourceTileWMSComponent_1 = (function (_super) {
    __extends(SourceTileWMSComponent, _super);
    function SourceTileWMSComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceTileWMSComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.source.TileWMS(this);
        this.host.instance.setSource(this.instance);
    };
    return SourceTileWMSComponent;
}(source_component_1.SourceComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SourceTileWMSComponent.prototype, "cacheSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SourceTileWMSComponent.prototype, "crossOrigin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SourceTileWMSComponent.prototype, "gutter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SourceTileWMSComponent.prototype, "hidpi", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SourceTileWMSComponent.prototype, "params", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SourceTileWMSComponent.prototype, "projection", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SourceTileWMSComponent.prototype, "reprojectionErrorThreshold", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SourceTileWMSComponent.prototype, "serverType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", openlayers_1.tilegrid.TileGrid)
], SourceTileWMSComponent.prototype, "tileGrid", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], SourceTileWMSComponent.prototype, "tileLoadFunction", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SourceTileWMSComponent.prototype, "url", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SourceTileWMSComponent.prototype, "urls", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SourceTileWMSComponent.prototype, "wrapX", void 0);
SourceTileWMSComponent = SourceTileWMSComponent_1 = __decorate([
    core_1.Component({
        selector: 'aol-source-tilewms',
        template: "<ng-content></ng-content>",
        providers: [
            { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceTileWMSComponent_1; }) }
        ]
    }),
    __param(0, core_1.Host()),
    __metadata("design:paramtypes", [layers_1.LayerTileComponent])
], SourceTileWMSComponent);
exports.SourceTileWMSComponent = SourceTileWMSComponent;
var SourceTileWMSComponent_1;
//# sourceMappingURL=tilewms.component.js.map