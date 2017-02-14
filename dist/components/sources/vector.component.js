"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var layers_1 = require('../layers');
var source_component_1 = require('./source.component');
var SourceVectorComponent = (function (_super) {
    __extends(SourceVectorComponent, _super);
    function SourceVectorComponent(layer) {
        _super.call(this, layer);
    }
    SourceVectorComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.source.Vector(this);
        this.host.instance.setSource(this.instance);
    };
    SourceVectorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-source-vector',
                    template: "<ng-content></ng-content>",
                    providers: [
                        { provide: source_component_1.SourceComponent, useExisting: core_1.forwardRef(function () { return SourceVectorComponent; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    SourceVectorComponent.ctorParameters = function () { return [
        { type: layers_1.LayerVectorComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    SourceVectorComponent.propDecorators = {
        'overlaps': [{ type: core_1.Input },],
        'useSpatialIndex': [{ type: core_1.Input },],
        'wrapX': [{ type: core_1.Input },],
    };
    return SourceVectorComponent;
}(source_component_1.SourceComponent));
exports.SourceVectorComponent = SourceVectorComponent;
//# sourceMappingURL=vector.component.js.map