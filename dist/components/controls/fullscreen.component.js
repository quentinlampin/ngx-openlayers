"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var map_component_1 = require('../map.component');
var ControlFullScreenComponent = (function (_super) {
    __extends(ControlFullScreenComponent, _super);
    function ControlFullScreenComponent(map) {
        // console.log('instancing aol-control-fullscreen');
        _super.call(this);
        this.map = map;
    }
    ControlFullScreenComponent.prototype.ngOnInit = function () {
        this.map.instance.addControl(this);
    };
    ControlFullScreenComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-fullscreen');
        this.map.instance.removeControl(this);
    };
    ControlFullScreenComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-control-fullscreen',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    ControlFullScreenComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return ControlFullScreenComponent;
}(openlayers_1.control.FullScreen));
exports.ControlFullScreenComponent = ControlFullScreenComponent;
//# sourceMappingURL=fullscreen.component.js.map