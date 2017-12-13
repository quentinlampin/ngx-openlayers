"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var style_component_1 = require("./style.component");
var map_system_1 = require("../../map-system");
var StyleIconComponent = (function () {
    function StyleIconComponent(mapSystem, host) {
        this.mapSystem = mapSystem;
        this.host = host;
    }
    StyleIconComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.style.Icon instance with: ', this);
        this.instance = new this.mapSystem.style.Icon(this);
        this.host.instance.setImage(this.instance);
    };
    StyleIconComponent.prototype.ngOnChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes['opacity']) {
            this.instance.setOpacity(changes['opacity'].currentValue);
        }
        if (changes['rotation']) {
            this.instance.setRotation(changes['rotation'].currentValue);
        }
        if (changes['scale']) {
            this.instance.setScale(changes['scale'].currentValue);
        }
        if (changes['src']) {
            this.instance = new this.mapSystem.Icon(this);
            this.host.instance.setImage(this.instance);
        }
        this.host.update();
        // console.log('changes detected in aol-style-icon: ', changes);
    };
    return StyleIconComponent;
}());
StyleIconComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-style-icon',
                template: "<div class=\"aol-style-icon\"></div>",
            },] },
];
/** @nocollapse */
StyleIconComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: style_component_1.StyleComponent, decorators: [{ type: core_1.Host },] },
]; };
StyleIconComponent.propDecorators = {
    'anchor': [{ type: core_1.Input },],
    'anchorXUnits': [{ type: core_1.Input },],
    'anchorYUnits': [{ type: core_1.Input },],
    'anchorOrigin': [{ type: core_1.Input },],
    'color': [{ type: core_1.Input },],
    'crossOrigin': [{ type: core_1.Input },],
    'img': [{ type: core_1.Input },],
    'offset': [{ type: core_1.Input },],
    'offsetOrigin': [{ type: core_1.Input },],
    'opacity': [{ type: core_1.Input },],
    'scale': [{ type: core_1.Input },],
    'snapToPixel': [{ type: core_1.Input },],
    'rotateWithView': [{ type: core_1.Input },],
    'rotation': [{ type: core_1.Input },],
    'size': [{ type: core_1.Input },],
    'imgSize': [{ type: core_1.Input },],
    'src': [{ type: core_1.Input },],
};
exports.StyleIconComponent = StyleIconComponent;
//# sourceMappingURL=icon.component.js.map