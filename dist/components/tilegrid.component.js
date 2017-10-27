"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var TileGridComponent = (function () {
    function TileGridComponent() {
    }
    TileGridComponent.prototype.ngOnInit = function () {
        if (!this.resolutions) {
            this.instance = openlayers_1.tilegrid.createXYZ(this);
        }
        else {
            this.instance = new openlayers_1.tilegrid.TileGrid(this);
        }
    };
    TileGridComponent.prototype.ngOnChanges = function (changes) {
        if (!this.resolutions) {
            this.instance = openlayers_1.tilegrid.createXYZ(this);
        }
        else {
            this.instance = new openlayers_1.tilegrid.TileGrid(this);
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
TileGridComponent.ctorParameters = function () { return []; };
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