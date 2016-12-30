import { Component, Input, Host, Optional, OnInit, AfterContentInit, OnChanges, OnDestroy, SimpleChange, SimpleChanges } from '@angular/core';
import { style, geom, Color, ColorLike } from 'openlayers';
import {FeatureComponent} from './feature.component';
import {LayerVectorComponent} from './layer.components';

@Component({
  selector: 'aol-style',
  template: `<ng-content></ng-content>`
})
export class StyleComponent implements OnInit {
  private host: any;
  public instance: style.Style;
  public componentType: string = 'style';

  constructor(@Optional() featureHost: FeatureComponent, @Optional() layerHost: LayerVectorComponent) {
    console.log('creating aol-style');
    this.host = !!featureHost ? featureHost : layerHost;
    if(!this.host) { throw new Error('aol-style must be applied to a feature or a layer') }
  }

  update(){
    console.log('updating style\'s host: ', this.host);
    this.host.instance.changed();
  }

  ngOnInit(){
    console.log('creating aol-style instance with: ', this);
    this.instance = new style.Style(this);
    this.host.instance.setStyle(this.instance);
  }
}

@Component({
  selector: 'aol-style-circle',
  template: `<ng-content></ng-content>`
})
export class StyleCircleComponent implements AfterContentInit, OnChanges, OnDestroy {
  private host: StyleComponent;
  public componentType: string = 'style-circle';
  public instance: style.Circle;
  public fill: style.Fill|undefined;
  public stroke: style.Stroke|undefined;

  @Input('radius') radius: number = 10;
  @Input('snapToPixel') snapToPixel: boolean = true;
  
  constructor(@Host() style: StyleComponent) {
    console.log('creating aol-style-circle');
    this.host = style;
  }

  /**
   * WORK-AROUND: since the re-rendering is not triggered on style change
   * we trigger a radius change.
   * see openlayers #6233 and #5775
   */
  update(){
    if(!!this.instance) { 
      console.log('setting ol.style.Circle instance\'s radius');
      this.instance.setRadius(this.radius);
    }
  }

  ngAfterContentInit() {
    console.log('creating ol.style.Circle instance with: ', this);
    this.instance = new style.Circle(this);
    this.host.instance.setImage(this.instance);
    this.host.update();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!this.instance) { return }
    if(changes['radius']) { this.instance.setRadius(changes['radius'].currentValue) }
    console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
  }

  ngOnDestroy(){
    console.log('removing aol-style-circle');
    this.host.instance.setImage(null);
  }
}


@Component({
  selector: 'aol-style-fill',
  template: `<div class="aol-style-fill"></div>`,
})
export class StyleFillComponent implements OnInit, OnChanges {
  private host: any;
  public instance: style.Fill;

  @Input('color') color: Color|ColorLike|undefined;


  constructor(@Optional() styleHost: StyleComponent, @Optional() styleCircleHost: StyleCircleComponent) {
    this.host = !!styleCircleHost ? styleCircleHost : styleHost;
    console.log('creating aol-style-fill with: ', this);
  }

  ngOnInit(){
    console.log('creating ol.style.Fill instance with: ', this);
    this.instance = new style.Fill(this);
    switch(this.host.componentType){
      case 'style':
        this.host.instance.setFill(this.instance);
        console.log('setting ol.style instance\'s fill:', this.host);
        break;
      case 'style-circle':
        this.host.fill = this.instance;
        console.log('setting ol.style.circle instance\'s fill:', this.host);
        break;
      default:
        console.log('unknown host type: ', this.host);
        break;
    }
  }

  ngOnChanges(changes: SimpleChanges){
    if(!this.instance) { return }
    if(changes['color']) { this.instance.setColor(changes['color'].currentValue) }
    this.host.update();
    console.log('changes detected in aol-style-fill, setting new color: ', changes);
  }
}

@Component({
  selector: 'aol-style-icon',
  template: `<div class="aol-style-icon"></div>`,
})
export class StyleIconComponent implements OnInit, OnChanges {
  private host: any;
  public instance: style.Icon;


  @Input('anchor') anchor: [number, number];
  @Input('anchorXUnits') anchorXUnits: style.IconAnchorUnits;
  @Input('anchorYUnits') anchorYUnits: style.IconAnchorUnits;
  @Input('anchorOrigin') anchorOrigin: style.IconOrigin;
  @Input('color') color: [number, number, number, number];
  @Input('crossOrigin') crossOrigin: style.IconOrigin;
  @Input('img') img: string;
  @Input('offset') offset: [number, number];
  @Input('offsetOrigin') offsetOrigin: style.IconOrigin;
  @Input('opacity') opacity: number;
  @Input('scale') scale: number;
  @Input('snapToPixel') snapToPixel: boolean;
  @Input('rotateWithView') rotateWithView: boolean;
  @Input('rotation') rotation: number;
  @Input('size') size: [number, number];
  @Input('imgSize') imgSize: [number, number];
  @Input('src') src: string;


  constructor(@Host() styleHost: StyleComponent) {
    this.host =  styleHost;
    console.log('creating aol-style-icon with: ', this);
  }

  ngOnInit(){
    console.log('creating ol.style.Icon instance with: ', this);
    this.instance = new style.Icon(this);
    this.host.instance.setImage(this.instance);
  }

  ngOnChanges(changes: SimpleChanges){
    if(!this.instance) { return }
    if(changes['opacity']) { this.instance.setOpacity(changes['opacity'].currentValue) }
    if(changes['rotation']) { this.instance.setRotation(changes['rotation'].currentValue) }
    if(changes['scale']) { this.instance.setScale(changes['scale'].currentValue) }
    if(changes['src']) { 
      this.instance = new style.Icon(this); 
      this.host.instance.setImage(this.instance);
    }
    this.host.update();
    console.log('changes detected in aol-style-icon: ', changes);
  }
}

@Component({
  selector: 'aol-style-stroke',
  template: `<div class="aol-style-stroke"></div>`,
})
export class StyleStrokeComponent implements OnInit, OnChanges {
  public instance: style.Stroke;
  private host: any;

  @Input('color') color: Color|undefined;
  @Input('lineCap') lineCap: string|undefined;
  @Input('lineDash') lineDash: number[]|undefined;
  @Input('lineJoin') lineJoin: string|undefined;
  @Input('miterLimit') miterLimit: number|undefined;
  @Input('width') width: number|undefined;

  constructor(@Optional() styleHost: StyleComponent, @Optional() styleCircleHost: StyleCircleComponent) {
    if(!styleHost) { throw new Error('aol-style-fill must be a descendant of aol-style') }
    this.host = !!styleCircleHost ? styleCircleHost : styleHost;
    console.log('creating aol-style-stroke with: ', this);
  }

  ngOnInit(){
    console.log('creating ol.style.Stroke instance with: ', this);
    this.instance = new style.Stroke(this);
    switch(this.host.componentType){
      case 'style':
        this.host.instance.setStroke(this.instance);
        console.log('setting ol.style instance\'s stroke:', this.host);
        break;
      case 'style-circle':
        this.host.stroke = this.instance;
        console.log('setting ol.style.circle instance\'s stroke:', this.host);
        break;
      default:
        console.log('unknown host type: ', this.host.componentType);
        break;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!this.instance) { return }
    if(changes['color']) { this.instance.setColor(changes['color'].currentValue) }
    if(changes['lineCap']) { this.instance.setLineCap(changes['lineCap'].currentValue) }
    if(changes['lineDash']) { this.instance.setLineDash(changes['lineDash'].currentValue) }
    if(changes['lineJoin']) { this.instance.setLineJoin(changes['lineJoin'].currentValue) }
    if(changes['miterLimit']) { this.instance.setMiterLimit(changes['miterLimit'].currentValue) }
    if(changes['width']) { this.instance.setWidth(changes['width'].currentValue) }
    this.host.update();
    console.log('changes detected in aol-style-stroke, setting new properties: ', changes); 
  }
}
