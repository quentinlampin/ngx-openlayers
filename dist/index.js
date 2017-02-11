"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var components_1 = require('./components');
__export(require('./components'));
var AngularOpenlayersModule = (function () {
    function AngularOpenlayersModule() {
    }
    AngularOpenlayersModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: components_1.COMPONENTS,
                    imports: [common_1.CommonModule],
                    exports: components_1.COMPONENTS
                },] },
    ];
    /** @nocollapse */
    AngularOpenlayersModule.ctorParameters = function () { return []; };
    return AngularOpenlayersModule;
}());
exports.AngularOpenlayersModule = AngularOpenlayersModule;
//# sourceMappingURL=index.js.map