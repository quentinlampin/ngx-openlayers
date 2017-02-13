"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var FormatComponent = (function () {
    function FormatComponent() {
        this.componentType = 'format';
    }
    return FormatComponent;
}());
exports.FormatComponent = FormatComponent;
var FormatMVTComponent = (function (_super) {
    __extends(FormatMVTComponent, _super);
    function FormatMVTComponent() {
        _super.call(this);
        this.instance = new openlayers_1.format.MVT(this);
    }
    FormatMVTComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-format-mvt',
                    template: '',
                    providers: [
                        { provide: FormatComponent, useExisting: core_1.forwardRef(function () { return FormatMVTComponent; }) }
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
    return FormatMVTComponent;
}(FormatComponent));
exports.FormatMVTComponent = FormatMVTComponent;
//# sourceMappingURL=format.component.js.map