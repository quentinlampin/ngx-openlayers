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
var map_component_1 = require("../map.component");
var ControlZoomToExtentComponent = (function (_super) {
    __extends(ControlZoomToExtentComponent, _super);
    function ControlZoomToExtentComponent(map) {
        var _this = 
        // console.log('instancing aol-control-zoomtoextent');
        _super.call(this) || this;
        _this.map = map;
        return _this;
    }
    ControlZoomToExtentComponent.prototype.ngOnInit = function () {
        this.map.instance.addControl(this);
    };
    ControlZoomToExtentComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoomtoextent');
        this.map.instance.removeControl(this);
    };
    return ControlZoomToExtentComponent;
}(openlayers_1.control.ZoomToExtent));
ControlZoomToExtentComponent = __decorate([
    core_1.Component({
        selector: 'aol-control-zoomtoextent',
        template: "<ng-content></ng-content>"
    }),
    __param(0, core_1.Host()),
    __metadata("design:paramtypes", [map_component_1.MapComponent])
], ControlZoomToExtentComponent);
exports.ControlZoomToExtentComponent = ControlZoomToExtentComponent;
//# sourceMappingURL=zoomtoextent.component.js.map