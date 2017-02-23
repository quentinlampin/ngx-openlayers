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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var MapComponent = (function () {
    function MapComponent(host) {
        this.host = host;
        this.componentType = 'map';
        this.width = '100%';
        this.height = '100%';
        this.onClick = new core_1.EventEmitter();
        this.onDblClick = new core_1.EventEmitter();
        this.onMoveEnd = new core_1.EventEmitter();
        this.onPointerDrag = new core_1.EventEmitter();
        this.onPointerMove = new core_1.EventEmitter();
        this.onPostCompose = new core_1.EventEmitter();
        this.onPostRender = new core_1.EventEmitter();
        this.onPreCompose = new core_1.EventEmitter();
        this.onPropertyChange = new core_1.EventEmitter();
        this.onSingleClick = new core_1.EventEmitter();
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('creating ol.Map instance with:', this);
        this.instance = new openlayers_1.Map(this);
        this.instance.setTarget(this.host.nativeElement.firstElementChild);
        this.instance.on('click', function (event) { return _this.onClick.emit(event); });
        this.instance.on('dblclick', function (event) { return _this.onDblClick.emit(event); });
        this.instance.on('moveend', function (event) { return _this.onMoveEnd.emit(event); });
        this.instance.on('pointerdrag', function (event) { return _this.onPointerDrag.emit(event); });
        this.instance.on('pointermove', function (event) { return _this.onPointerMove.emit(event); });
        this.instance.on('postcompose', function (event) { return _this.onPostCompose.emit(event); });
        this.instance.on('postrender', function (event) { return _this.onPostRender.emit(event); });
        this.instance.on('precompose', function (event) { return _this.onPreCompose.emit(event); });
        this.instance.on('propertychange', function (event) { return _this.onPropertyChange.emit(event); });
        this.instance.on('singleclick', function (event) { return _this.onSingleClick.emit(event); });
    };
    MapComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-map, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        this.instance.updateSize();
    };
    return MapComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MapComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MapComponent.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MapComponent.prototype, "pixelRatio", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MapComponent.prototype, "keyboardEventTarget", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MapComponent.prototype, "loadTilesWhileAnimating", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MapComponent.prototype, "loadTilesWhileInteracting", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MapComponent.prototype, "logo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MapComponent.prototype, "renderer", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MapComponent.prototype, "onClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MapComponent.prototype, "onDblClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MapComponent.prototype, "onMoveEnd", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MapComponent.prototype, "onPointerDrag", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MapComponent.prototype, "onPointerMove", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MapComponent.prototype, "onPostCompose", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MapComponent.prototype, "onPostRender", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MapComponent.prototype, "onPreCompose", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MapComponent.prototype, "onPropertyChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MapComponent.prototype, "onSingleClick", void 0);
MapComponent = __decorate([
    core_1.Component({
        selector: 'aol-map',
        template: "<div [style.width]=\"width\" [style.height]=\"height\"></div><ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map