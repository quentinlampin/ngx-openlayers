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
var map_component_1 = require("./map.component");
var ViewComponent = (function () {
    function ViewComponent(host) {
        this.host = host;
        this.componentType = 'view';
    }
    ViewComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.View instance with: ', this);
        this.instance = new openlayers_1.View(this);
        this.host.instance.setView(this.instance);
    };
    ViewComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'zoom':
                        /** Work-around: setting the zoom via setProperties does not work. */
                        this.instance.setZoom(changes[key].currentValue);
                        break;
                    default:
                        break;
                }
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-view, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-view');
    };
    return ViewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ViewComponent.prototype, "constrainRotation", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ViewComponent.prototype, "enableRotation", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ViewComponent.prototype, "extent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ViewComponent.prototype, "maxResolution", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ViewComponent.prototype, "minResolution", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ViewComponent.prototype, "maxZoom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ViewComponent.prototype, "minZoom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ViewComponent.prototype, "resolution", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ViewComponent.prototype, "resolutions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ViewComponent.prototype, "rotation", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ViewComponent.prototype, "zoom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ViewComponent.prototype, "zoomFactor", void 0);
ViewComponent = __decorate([
    core_1.Component({
        selector: 'aol-view',
        template: "<ng-content></ng-content>"
    }),
    __param(0, core_1.Host()),
    __metadata("design:paramtypes", [map_component_1.MapComponent])
], ViewComponent);
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view.component.js.map