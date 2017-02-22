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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var layers_1 = require("../layers");
var source_component_1 = require("./source.component");
var SourceOsmComponent = SourceOsmComponent_1 = (function (_super) {
    __extends(SourceOsmComponent, _super);
    function SourceOsmComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceOsmComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.source.OSM(this);
        this.host.instance.setSource(this.instance);
    };
    return SourceOsmComponent;
}(source_component_1.SourceComponent));
SourceOsmComponent = SourceOsmComponent_1 = __decorate([
    core_1.Component({
        selector: 'aol-source-osm',
        template: "<div class=\"aol-source-osm\"></div>",
        providers: [
            { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceOsmComponent_1; }) }
        ]
    }),
    __param(0, core_1.Host()),
    __metadata("design:paramtypes", [layers_1.LayerTileComponent])
], SourceOsmComponent);
exports.SourceOsmComponent = SourceOsmComponent;
var SourceOsmComponent_1;
//# sourceMappingURL=osm.component.js.map