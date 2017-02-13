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
var formats_1 = require("../formats");
var tilegrid_component_1 = require("../tilegrid.component");
var source_component_1 = require("./source.component");
var SourceVectorTileComponent = SourceVectorTileComponent_1 = (function (_super) {
    __extends(SourceVectorTileComponent, _super);
    function SourceVectorTileComponent(layer) {
        return _super.call(this, layer) || this;
    }
    /* need the children to construct the OL3 object */
    SourceVectorTileComponent.prototype.ngAfterContentInit = function () {
        this.format = this.formatComponent.instance;
        this.tileGrid = this.tileGridComponent.instance;
        // console.log('creating ol.source.VectorTile instance with:', this);
        this.instance = new openlayers_1.source.VectorTile(this);
        this.host.instance.setSource(this.instance);
    };
    return SourceVectorTileComponent;
}(source_component_1.SourceComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SourceVectorTileComponent.prototype, "attributions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SourceVectorTileComponent.prototype, "cacheSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SourceVectorTileComponent.prototype, "overlaps", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SourceVectorTileComponent.prototype, "projection", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SourceVectorTileComponent.prototype, "tilePixelRatio", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], SourceVectorTileComponent.prototype, "tileUrlFunction", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SourceVectorTileComponent.prototype, "url", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SourceVectorTileComponent.prototype, "urls", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SourceVectorTileComponent.prototype, "wrapX", void 0);
__decorate([
    core_1.ContentChild(formats_1.FormatComponent),
    __metadata("design:type", formats_1.FormatComponent)
], SourceVectorTileComponent.prototype, "formatComponent", void 0);
__decorate([
    core_1.ContentChild(tilegrid_component_1.TileGridComponent),
    __metadata("design:type", tilegrid_component_1.TileGridComponent)
], SourceVectorTileComponent.prototype, "tileGridComponent", void 0);
SourceVectorTileComponent = SourceVectorTileComponent_1 = __decorate([
    core_1.Component({
        selector: 'aol-source-vectortile',
        template: "<ng-content></ng-content>",
        providers: [
            { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceVectorTileComponent_1; }) }
        ]
    }),
    __param(0, core_1.Host()),
    __metadata("design:paramtypes", [layers_1.LayerVectorTileComponent])
], SourceVectorTileComponent);
exports.SourceVectorTileComponent = SourceVectorTileComponent;
var SourceVectorTileComponent_1;
//# sourceMappingURL=vectortile.component.js.map