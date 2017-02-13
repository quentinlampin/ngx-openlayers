"use strict";
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var feature_component_1 = require('./feature.component');
var layers_1 = require('./layers');
var StyleComponent = (function () {
    function StyleComponent(featureHost, layerHost) {
        this.componentType = 'style';
        // console.log('creating aol-style');
        this.host = !!featureHost ? featureHost : layerHost;
        if (!this.host) {
            throw new Error('aol-style must be applied to a feature or a layer');
        }
    }
    StyleComponent.prototype.update = function () {
        // console.log('updating style\'s host: ', this.host);
        this.host.instance.changed();
    };
    StyleComponent.prototype.ngOnInit = function () {
        // console.log('creating aol-style instance with: ', this);
        this.instance = new openlayers_1.style.Style(this);
        this.host.instance.setStyle(this.instance);
    };
    StyleComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-style',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    StyleComponent.ctorParameters = function () { return [
        { type: feature_component_1.FeatureComponent, decorators: [{ type: core_1.Optional },] },
        { type: layers_1.LayerVectorComponent, decorators: [{ type: core_1.Optional },] },
    ]; };
    StyleComponent.propDecorators = {
        'geometry': [{ type: core_1.Input },],
        'fill': [{ type: core_1.Input },],
        'image': [{ type: core_1.Input },],
        'stroke': [{ type: core_1.Input },],
        'text': [{ type: core_1.Input },],
        'zIndex': [{ type: core_1.Input },],
    };
    return StyleComponent;
}());
exports.StyleComponent = StyleComponent;
var StyleCircleComponent = (function () {
    function StyleCircleComponent(host) {
        this.host = host;
        this.componentType = 'style-circle';
    }
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     */
    StyleCircleComponent.prototype.update = function () {
        if (!!this.instance) {
            // console.log('setting ol.style.Circle instance\'s radius');
            this.instance.setRadius(this.radius);
        }
    };
    StyleCircleComponent.prototype.ngAfterContentInit = function () {
        // console.log('creating ol.style.Circle instance with: ', this);
        this.instance = new openlayers_1.style.Circle(this);
        this.host.instance.setImage(this.instance);
        this.host.update();
    };
    StyleCircleComponent.prototype.ngOnChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes['radius']) {
            this.instance.setRadius(changes['radius'].currentValue);
        }
        // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
    };
    StyleCircleComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-style-circle');
        this.host.instance.setImage(null);
    };
    StyleCircleComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-style-circle',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    StyleCircleComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    StyleCircleComponent.propDecorators = {
        'fill': [{ type: core_1.Input },],
        'radius': [{ type: core_1.Input },],
        'snapToPixel': [{ type: core_1.Input },],
        'stroke': [{ type: core_1.Input },],
        'atlasManager': [{ type: core_1.Input },],
    };
    return StyleCircleComponent;
}());
exports.StyleCircleComponent = StyleCircleComponent;
var StyleFillComponent = (function () {
    function StyleFillComponent(styleHost, styleCircleHost, styleTextHost) {
        if (!styleHost) {
            throw new Error('aol-style-stroke must be a descendant of aol-style');
        }
        if (!!styleTextHost) {
            this.host = styleTextHost;
        }
        else if (!!styleCircleHost) {
            this.host = styleCircleHost;
        }
        else {
            this.host = styleHost;
        }
        // console.log('creating aol-style-fill with: ', this);
    }
    StyleFillComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.style.Fill instance with: ', this);
        this.instance = new openlayers_1.style.Fill(this);
        switch (this.host.componentType) {
            case 'style':
                this.host.instance.setFill(this.instance);
                // console.log('setting ol.style instance\'s fill:', this.host);
                break;
            case 'style-text':
                this.host.instance.setFill(this.instance);
                break;
            case 'style-circle':
                this.host.fill = this.instance;
                // console.log('setting ol.style.circle instance\'s fill:', this.host);
                break;
            default:
                throw new Error('unknown host type: ' + this.host);
        }
    };
    StyleFillComponent.prototype.ngOnChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes['color']) {
            this.instance.setColor(changes['color'].currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-fill, setting new color: ', changes);
    };
    StyleFillComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-style-fill',
                    template: "<div class=\"aol-style-fill\"></div>",
                },] },
    ];
    /** @nocollapse */
    StyleFillComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: core_1.Optional },] },
        { type: StyleCircleComponent, decorators: [{ type: core_1.Optional },] },
        { type: StyleTextComponent, decorators: [{ type: core_1.Optional },] },
    ]; };
    StyleFillComponent.propDecorators = {
        'color': [{ type: core_1.Input },],
    };
    return StyleFillComponent;
}());
exports.StyleFillComponent = StyleFillComponent;
var StyleIconComponent = (function () {
    function StyleIconComponent(host) {
        this.host = host;
    }
    StyleIconComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.style.Icon instance with: ', this);
        this.instance = new openlayers_1.style.Icon(this);
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
            this.instance = new openlayers_1.style.Icon(this);
            this.host.instance.setImage(this.instance);
        }
        this.host.update();
        // console.log('changes detected in aol-style-icon: ', changes);
    };
    StyleIconComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-style-icon',
                    template: "<div class=\"aol-style-icon\"></div>",
                },] },
    ];
    /** @nocollapse */
    StyleIconComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: core_1.Host },] },
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
    return StyleIconComponent;
}());
exports.StyleIconComponent = StyleIconComponent;
var StyleStrokeComponent = (function () {
    function StyleStrokeComponent(styleHost, styleCircleHost, styleTextHost) {
        if (!styleHost) {
            throw new Error('aol-style-stroke must be a descendant of aol-style');
        }
        if (!!styleTextHost) {
            this.host = styleTextHost;
        }
        else if (!!styleCircleHost) {
            this.host = styleCircleHost;
        }
        else {
            this.host = styleHost;
        }
        // console.log('creating aol-style-stroke with: ', this);
    }
    StyleStrokeComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.style.Stroke instance with: ', this);
        this.instance = new openlayers_1.style.Stroke(this);
        switch (this.host.componentType) {
            case 'style':
                this.host.instance.setStroke(this.instance);
                // console.log('setting ol.style instance\'s stroke:', this.host);
                break;
            case 'style-text':
                this.host.instance.setStroke(this.instance);
                break;
            case 'style-circle':
                this.host.stroke = this.instance;
                // console.log('setting ol.style.circle instance\'s stroke:', this.host);
                break;
            default:
                throw new Error('unknown host type: ' + this.host);
        }
    };
    StyleStrokeComponent.prototype.ngOnChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes['color']) {
            this.instance.setColor(changes['color'].currentValue);
        }
        if (changes['lineCap']) {
            this.instance.setLineCap(changes['lineCap'].currentValue);
        }
        if (changes['lineDash']) {
            this.instance.setLineDash(changes['lineDash'].currentValue);
        }
        if (changes['lineJoin']) {
            this.instance.setLineJoin(changes['lineJoin'].currentValue);
        }
        if (changes['miterLimit']) {
            this.instance.setMiterLimit(changes['miterLimit'].currentValue);
        }
        if (changes['width']) {
            this.instance.setWidth(changes['width'].currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-stroke, setting new properties: ', changes);
    };
    StyleStrokeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-style-stroke',
                    template: "<div class=\"aol-style-stroke\"></div>",
                },] },
    ];
    /** @nocollapse */
    StyleStrokeComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: core_1.Optional },] },
        { type: StyleCircleComponent, decorators: [{ type: core_1.Optional },] },
        { type: StyleTextComponent, decorators: [{ type: core_1.Optional },] },
    ]; };
    StyleStrokeComponent.propDecorators = {
        'color': [{ type: core_1.Input },],
        'lineCap': [{ type: core_1.Input },],
        'lineDash': [{ type: core_1.Input },],
        'lineJoin': [{ type: core_1.Input },],
        'miterLimit': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
    };
    return StyleStrokeComponent;
}());
exports.StyleStrokeComponent = StyleStrokeComponent;
var StyleTextComponent = (function () {
    function StyleTextComponent(host) {
        this.host = host;
        this.componentType = 'style-text';
        if (!host) {
            throw new Error('aol-style-text must be a descendant of aol-style');
        }
        // console.log('creating aol-style-text with: ', this);
    }
    StyleTextComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.style.Text instance with: ', this);
        this.instance = new openlayers_1.style.Text(this);
        this.host.instance.setText(this.instance);
    };
    StyleTextComponent.prototype.ngOnChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes['font']) {
            this.instance.setFont(changes['font'].currentValue);
        }
        if (changes['offsetX']) {
            this.instance.setOffsetX(changes['offsetX'].currentValue);
        }
        if (changes['offsetY']) {
            this.instance.setOffsetY(changes['offsetY'].currentValue);
        }
        if (changes['scale']) {
            this.instance.setScale(changes['scale'].currentValue);
        }
        if (changes['rotation']) {
            this.instance.setRotation(changes['rotation'].currentValue);
        }
        if (changes['text']) {
            this.instance.setText(changes['text'].currentValue);
        }
        if (changes['textAlign']) {
            this.instance.setTextAlign(changes['textAlign'].currentValue);
        }
        if (changes['textBaseLine']) {
            this.instance.setTextBaseline(changes['textBaseLine'].currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-text, setting new properties: ', changes);
    };
    StyleTextComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-style-text',
                    template: "<div class=\"aol-style-text\"></div>",
                },] },
    ];
    /** @nocollapse */
    StyleTextComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: core_1.Optional },] },
    ]; };
    StyleTextComponent.propDecorators = {
        'font': [{ type: core_1.Input },],
        'offsetX': [{ type: core_1.Input },],
        'offsetY': [{ type: core_1.Input },],
        'scale': [{ type: core_1.Input },],
        'rotateWithView': [{ type: core_1.Input },],
        'rotation': [{ type: core_1.Input },],
        'text': [{ type: core_1.Input },],
        'textAlign': [{ type: core_1.Input },],
        'textBaseLine': [{ type: core_1.Input },],
    };
    return StyleTextComponent;
}());
exports.StyleTextComponent = StyleTextComponent;
//# sourceMappingURL=style.components.js.map