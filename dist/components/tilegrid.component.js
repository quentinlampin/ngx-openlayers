"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_system_1 = require("../map-system");
var TileGridComponent = (function () {
    function TileGridComponent(mapSystem) {
        this.mapSystem = mapSystem;
    }
    TileGridComponent.prototype.ngOnInit = function () {
        if (!this.resolutions) {
            this.instance = this.mapSystem.tilegrid.createXYZ(this);
        }
        else {
            this.instance = new this.mapSystem.tilegrid.TileGrid(this);
        }
    };
    TileGridComponent.prototype.ngOnChanges = function (changes) {
        if (!this.resolutions) {
            this.instance = this.mapSystem.tilegrid.createXYZ(this);
        }
        else {
            this.instance = new this.mapSystem.tilegrid.TileGrid(this);
        }
    };
    return TileGridComponent;
}());
TileGridComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-tilegrid',
                template: ''
            },] },
];
/** @nocollapse */
TileGridComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
]; };
TileGridComponent.propDecorators = {
    'extent': [{ type: core_1.Input },],
    'maxZoom': [{ type: core_1.Input },],
    'minZoom': [{ type: core_1.Input },],
    'tileSize': [{ type: core_1.Input },],
    'origin': [{ type: core_1.Input },],
    'resolutions': [{ type: core_1.Input },],
};
exports.TileGridComponent = TileGridComponent;
//# sourceMappingURL=tilegrid.component.js.map