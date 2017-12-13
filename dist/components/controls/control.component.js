"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("../map.component");
var content_component_1 = require("../content.component");
var map_system_1 = require("../../map-system");
var ControlComponent = (function () {
    function ControlComponent(mapSystem, map) {
        this.mapSystem = mapSystem;
        this.map = map;
        this.componentType = 'control';
    }
    ControlComponent.prototype.ngOnInit = function () {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new this.mapSystem.control.Control(this);
            this.map.instance.addControl(this.instance);
        }
    };
    ControlComponent.prototype.ngOnDestroy = function () {
        if (this.instance) {
            this.map.instance.removeControl(this.instance);
        }
    };
    return ControlComponent;
}());
ControlComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-control',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
ControlComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: map_component_1.MapComponent, },
]; };
ControlComponent.propDecorators = {
    'content': [{ type: core_1.ContentChild, args: [content_component_1.ContentComponent,] },],
};
exports.ControlComponent = ControlComponent;
//# sourceMappingURL=control.component.js.map