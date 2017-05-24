"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var MapComponent = (function () {
    function MapComponent(host) {
        this.host = host;
        this.componentType = 'map';
        this.width = '100%';
        this.height = '100%';
        // we pass empty arrays to not get default controls/interactions because we have our own directives
        this.controls = [];
        this.interactions = [];
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
MapComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-map',
                template: "<div [style.width]=\"width\" [style.height]=\"height\"></div><ng-content></ng-content>"
            },] },
];
/** @nocollapse */
MapComponent.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
MapComponent.propDecorators = {
    'width': [{ type: core_1.Input },],
    'height': [{ type: core_1.Input },],
    'pixelRatio': [{ type: core_1.Input },],
    'keyboardEventTarget': [{ type: core_1.Input },],
    'loadTilesWhileAnimating': [{ type: core_1.Input },],
    'loadTilesWhileInteracting': [{ type: core_1.Input },],
    'logo': [{ type: core_1.Input },],
    'renderer': [{ type: core_1.Input },],
    'onClick': [{ type: core_1.Output },],
    'onDblClick': [{ type: core_1.Output },],
    'onMoveEnd': [{ type: core_1.Output },],
    'onPointerDrag': [{ type: core_1.Output },],
    'onPointerMove': [{ type: core_1.Output },],
    'onPostCompose': [{ type: core_1.Output },],
    'onPostRender': [{ type: core_1.Output },],
    'onPreCompose': [{ type: core_1.Output },],
    'onPropertyChange': [{ type: core_1.Output },],
    'onSingleClick': [{ type: core_1.Output },],
};
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map