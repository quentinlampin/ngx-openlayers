"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var map_component_1 = require("../map.component");
var DefaultInteractionComponent = (function () {
    function DefaultInteractionComponent(map) {
        this.map = map;
    }
    DefaultInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = openlayers_1.interaction.defaults();
        this.instance.forEach(function (interaction) { return _this.map.instance.addInteraction(interaction); });
    };
    DefaultInteractionComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.instance.forEach(function (interaction) { return _this.map.instance.removeInteraction(interaction); });
    };
    return DefaultInteractionComponent;
}());
DefaultInteractionComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-interaction-default',
                template: ''
            },] },
];
/** @nocollapse */
DefaultInteractionComponent.ctorParameters = function () { return [
    { type: map_component_1.MapComponent, },
]; };
exports.DefaultInteractionComponent = DefaultInteractionComponent;
//# sourceMappingURL=default.component.js.map