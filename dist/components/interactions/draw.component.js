"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var DrawInteractionComponent = (function () {
    function DrawInteractionComponent(map) {
        this.map = map;
        this.onChange = new core_1.EventEmitter();
        this.onChangeActive = new core_1.EventEmitter();
        this.onDrawEnd = new core_1.EventEmitter();
        this.onDrawStart = new core_1.EventEmitter();
        this.onPropertyChange = new core_1.EventEmitter();
    }
    DrawInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new openlayers_1.interaction.Draw(this);
        this.instance.on('change', function (event) { return _this.onChange.emit(event); });
        this.instance.on('change:active', function (event) { return _this.onChangeActive.emit(event); });
        this.instance.on('drawend', function (event) { return _this.onDrawEnd.emit(event); });
        this.instance.on('drawstart', function (event) { return _this.onDrawStart.emit(event); });
        this.instance.on('propertychange', function (event) { return _this.onPropertyChange.emit(event); });
        this.map.instance.addInteraction(this.instance);
    };
    DrawInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    return DrawInteractionComponent;
}());
DrawInteractionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-interaction-draw',
                template: ''
            },] },
];
/** @nocollapse */
DrawInteractionComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
]; };
DrawInteractionComponent.propDecorators = {
    'clickTolerance': [{ type: core_1.Input },],
    'features': [{ type: core_1.Input },],
    'source': [{ type: core_1.Input },],
    'snapTolerance': [{ type: core_1.Input },],
    'type': [{ type: core_1.Input },],
    'maxPoints': [{ type: core_1.Input },],
    'minPoints': [{ type: core_1.Input },],
    'finishCondition': [{ type: core_1.Input },],
    'style': [{ type: core_1.Input },],
    'geometryFunction': [{ type: core_1.Input },],
    'geometryName': [{ type: core_1.Input },],
    'condition': [{ type: core_1.Input },],
    'freehandCondition': [{ type: core_1.Input },],
    'freehand': [{ type: core_1.Input },],
    'wrapX': [{ type: core_1.Input },],
    'onChange': [{ type: core_1.Output },],
    'onChangeActive': [{ type: core_1.Output },],
    'onDrawEnd': [{ type: core_1.Output },],
    'onDrawStart': [{ type: core_1.Output },],
    'onPropertyChange': [{ type: core_1.Output },],
};
exports.DrawInteractionComponent = DrawInteractionComponent;
//# sourceMappingURL=draw.component.js.map