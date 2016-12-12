import { Component, Directive, EventEmitter, Host, OnDestroy, OnChanges, AfterContentInit, Input, Output, ContentChild } from '@angular/core';
import { style } from 'openlayers';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { FeatureComponent } from "./feature.component";

@Directive({
    selector: 'aol-style-icon'
})
export class IconStyleDirective implements OnChanges {

    // For usage info see: http://openlayers.org/en/latest/apidoc/ol.style.Icon.html
    @Input('anchor') anchor: [number, number];
    @Input('anchorXUnits') anchorXUnits: string;
    @Input('anchorYUnits') anchorYUnits: string;
    @Input('anchorOrigin') anchorOrigin: string;
    @Input('color') color: [number, number, number, number];
    @Input('crossOrigin') crossOrigin: string;
    @Input('img') img: string;
    @Input('offset') offset: [number, number];
    @Input('offsetOrigin') offsetOrigin: string;
    @Input('opacity') opacity: number;
    @Input('scale') scale: number;
    @Input('snapToPixel') snapToPixel: boolean;
    @Input('rotateWithView') rotateWithView: boolean;
    @Input('rotation') rotation: number;
    @Input('size') size: [number, number];
    @Input('imgSize') imgSize: [number, number];
    @Input('src') src: string;

    @Output() onChanged = new EventEmitter<any>();

    ngOnChanges() {
        this.onChanged.emit(this.src);
    }
}

@Directive({
    selector: 'aol-style-stroke'
})
export class StrokeStyleDirective implements OnChanges {

    // For usage info see: http://openlayers.org/en/latest/apidoc/ol.style.Stroke.html
    @Input('color') color: [number, number, number, number];
    @Input('lineCap') lineCap: 'butt' | 'round' | 'square';
    @Input('lineJoin') lineJoin: 'bevel' | 'round' | 'miter';
    @Input('lineDash') lineDash: number[];
    @Input('miterLimit') miterLimit: number;
    @Input('width') width: number;

    @Output() onChanged = new EventEmitter<any>();

    ngOnChanges() {
        this.onChanged.emit();
    }
}

@Component({
    selector: 'aol-style',
    template: `<ng-content></ng-content>`
})
export class StyleComponent implements OnDestroy, AfterContentInit {
    private _host_: FeatureComponent;
    private childSubscription$: Subscription;

    @ContentChild(IconStyleDirective) iconStyleDirective: IconStyleDirective;
    @ContentChild(StrokeStyleDirective) strokeStyleDirective: StrokeStyleDirective;

    constructor( @Host() feature: FeatureComponent) {
        console.log('instancing aol-style');
        this._host_ = feature;
    }

    ngAfterContentInit() {
        this.update();
        if (this.iconStyleDirective) {
            this.childSubscription$ = this.iconStyleDirective.onChanged.subscribe((): void => this.update());
        }
        else if (this.strokeStyleDirective) {
            this.childSubscription$ = this.strokeStyleDirective.onChanged.subscribe((): void => this.update());
        }
    }

    update() {
        if (this.iconStyleDirective) {
            this.setIconStyle();
        }
        else if (this.strokeStyleDirective) {
            this.setStrokeStyle();
        }
    }

    ngOnDestroy() {
        this.childSubscription$.unsubscribe();
    }

    private setIconStyle() {
        this._host_.setStyle(new style.Style({
            image: new style.Icon({
                anchor: this.iconStyleDirective.anchor,
                anchorOrigin: this.iconStyleDirective.anchorOrigin,
                anchorXUnits: this.iconStyleDirective.anchorXUnits,
                anchorYUnits: this.iconStyleDirective.anchorYUnits,
                color: this.iconStyleDirective.color,
                crossOrigin: this.iconStyleDirective.crossOrigin,
                img: this.iconStyleDirective.img,
                offset: this.iconStyleDirective.offset,
                offsetOrigin: this.iconStyleDirective.offsetOrigin,
                opacity: this.iconStyleDirective.opacity,
                scale: this.iconStyleDirective.scale,
                snapToPixel: this.iconStyleDirective.snapToPixel,
                rotateWithView: this.iconStyleDirective.rotateWithView,
                rotation: this.iconStyleDirective.rotation,
                size: this.iconStyleDirective.size,
                imgSize: this.iconStyleDirective.imgSize,
                src: this.iconStyleDirective.src
            })
        }));
    }

    private setStrokeStyle() {
        this._host_.setStyle(new style.Style({
            stroke: new style.Stroke({
                color: this.strokeStyleDirective.color,
                lineCap: this.strokeStyleDirective.lineCap,
                lineJoin: this.strokeStyleDirective.lineJoin,
                lineDash: this.strokeStyleDirective.lineDash,
                miterLimit: this.strokeStyleDirective.miterLimit,
                width: this.strokeStyleDirective.width
            })
        }))
    }
}
