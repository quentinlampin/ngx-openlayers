"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var openlayers_1 = require("openlayers");
var format_component_1 = require("./format.component");
var FormatMVTComponent = (function (_super) {
    __extends(FormatMVTComponent, _super);
    function FormatMVTComponent() {
        var _this = _super.call(this) || this;
        _this.instance = new openlayers_1.format.MVT(_this);
        return _this;
    }
    return FormatMVTComponent;
}(format_component_1.FormatComponent));
FormatMVTComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-format-mvt',
                template: '',
                providers: [
                    { provide: format_component_1.FormatComponent, useExisting: core_1.forwardRef(function () { return FormatMVTComponent; }) }
                ]
            },] },
];
/** @nocollapse */
FormatMVTComponent.ctorParameters = function () { return []; };
FormatMVTComponent.propDecorators = {
    'featureClass': [{ type: core_1.Input },],
    'geometryName': [{ type: core_1.Input },],
    'layerName': [{ type: core_1.Input },],
    'layers': [{ type: core_1.Input },],
};
exports.FormatMVTComponent = FormatMVTComponent;
//# sourceMappingURL=mvt.component.js.map