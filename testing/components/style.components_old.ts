import {Component, ContentChild, Directive, EventEmitter, Host, Input, Output} from '@angular/core';
import {style} from 'openlayers';
import {FeatureComponent} from './feature.component';

@Directive({
    selector: 'aol-style-icon'
})
export class StyleIconDirective {

    // For usage info see: http://openlayers.org/en/latest/apidoc/ol.style.Icon.html
    @Input() anchor: [number, number];
    @Input() anchorXUnits: style.IconAnchorUnits;
    @Input() anchorYUnits: style.IconAnchorUnits;
    @Input() anchorOrigin: style.IconOrigin;
    @Input() color: [number, number, number, number];
    @Input() crossOrigin: style.IconOrigin;
    @Input() img: string;
    @Input() offset: [number, number];
    @Input() offsetOrigin: style.IconOrigin;
    @Input() opacity: number;
    @Input() scale: number;
    @Input() snapToPixel: boolean;
    @Input() rotateWithView: boolean;
    @Input() rotation: number;
    @Input() size: [number, number];
    @Input() imgSize: [number, number];
    @Input() src: string;

    @Output() onChanged = new EventEmitter<any>();

    constructor() {}
}

@Component({
    selector: 'aol-style',
    template: `<ng-content></ng-content>`
})
export class StyleComponent {
    private _host_: FeatureComponent;
    private childSubscription$: any;

    @ContentChild(StyleIconDirective) iconStyleDirective: StyleIconDirective;

    constructor( @Host() feature: FeatureComponent) {
        this._host_ = feature;
    }
}
