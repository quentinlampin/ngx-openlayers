import { Component, Input, Host, Optional, OnInit, AfterContentInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { style, Color, ColorLike } from 'openlayers';
import { FeatureComponent } from './feature.component';
import { LayerVectorComponent } from './layer.components';

@Component({
  selector: 'aol-style',
  template: `<ng-content></ng-content>`
})
export class StyleComponent implements OnInit {
  private host: any;
  public instance: style.Style;
  public componentType: string = 'style';

  constructor(@Optional() featureHost: FeatureComponent, @Optional() layerHost: LayerVectorComponent) {
    // console.log('creating aol-style');
    this.host = !!featureHost ? featureHost : layerHost;
    if (!this.host) {
      throw new Error('aol-style must be applied to a feature or a layer');
    }
  }

  update() {
    // console.log('updating style\'s host: ', this.host);
    this.host.instance.changed();
  }

  ngOnInit() {
    // console.log('creating aol-style instance with: ', this);
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
  // TODO unused
  public fill: style.Fill|undefined;
  public stroke: style.Stroke|undefined;

  @Input() radius: number = 10;
  @Input() snapToPixel: boolean = true;

  constructor(@Host() style: StyleComponent) {
    // console.log('creating aol-style-circle');
    this.host = style;
  }

  /**
   * WORK-AROUND: since the re-rendering is not triggered on style change
   * we trigger a radius change.
   * see openlayers #6233 and #5775
   */
  update() {
    if (!!this.instance) {
      // console.log('setting ol.style.Circle instance\'s radius');
      this.instance.setRadius(this.radius);
    }
  }

  ngAfterContentInit() {
    // console.log('creating ol.style.Circle instance with: ', this);
    this.instance = new style.Circle(this);
    this.host.instance.setImage(this.instance);
    this.host.update();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.instance) {
      return;
    }
    if (changes['radius']) {
      this.instance.setRadius(changes['radius'].currentValue);
    }
    // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
  }

  ngOnDestroy() {
    // console.log('removing aol-style-circle');
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

  @Input() color: Color|ColorLike|undefined;


  constructor(
    @Optional() styleHost: StyleComponent,
    @Optional() styleCircleHost: StyleCircleComponent,
    @Optional() styleTextHost: StyleTextComponent
  ) {
    if (!styleHost) {
      throw new Error('aol-style-stroke must be a descendant of aol-style');
    }
    if (!!styleTextHost) {
      this.host = styleTextHost;
    } else if (!!styleCircleHost) {
      this.host = styleCircleHost;
    } else {
      this.host = styleHost;
    }
    // console.log('creating aol-style-fill with: ', this);
  }

  ngOnInit() {
    // console.log('creating ol.style.Fill instance with: ', this);
    this.instance = new style.Fill(this);
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
        // break;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.instance) {
      return;
    }
    if (changes['color']) {
      this.instance.setColor(changes['color'].currentValue);
    }
    this.host.update();
    // console.log('changes detected in aol-style-fill, setting new color: ', changes);
  }
}

@Component({
  selector: 'aol-style-icon',
  template: `<div class="aol-style-icon"></div>`,
})
export class StyleIconComponent implements OnInit, OnChanges {
  private host: any;
  public instance: style.Icon;

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


  constructor(@Host() styleHost: StyleComponent) {
    this.host =  styleHost;
    // console.log('creating aol-style-icon with: ', this);
  }

  ngOnInit() {
    // console.log('creating ol.style.Icon instance with: ', this);
    this.instance = new style.Icon(this);
    this.host.instance.setImage(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
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
      this.instance = new style.Icon(this);
      this.host.instance.setImage(this.instance);
    }
    this.host.update();
    // console.log('changes detected in aol-style-icon: ', changes);
  }
}

@Component({
  selector: 'aol-style-stroke',
  template: `<div class="aol-style-stroke"></div>`,
})
export class StyleStrokeComponent implements OnInit, OnChanges {
  public instance: style.Stroke;
  private host: any;

  @Input() color: Color|undefined;
  @Input() lineCap: string|undefined;
  @Input() lineDash: number[]|undefined;
  @Input() lineJoin: string|undefined;
  @Input() miterLimit: number|undefined;
  @Input() width: number|undefined;

  constructor(
    @Optional() styleHost: StyleComponent,
    @Optional() styleCircleHost: StyleCircleComponent,
    @Optional() styleTextHost: StyleTextComponent
  ) {
    if (!styleHost) {
      throw new Error('aol-style-stroke must be a descendant of aol-style');
    }
    if (!!styleTextHost) {
      this.host = styleTextHost;
    } else if (!!styleCircleHost) {
      this.host = styleCircleHost;
    } else {
      this.host = styleHost;
    }
    // console.log('creating aol-style-stroke with: ', this);
  }

  ngOnInit() {
    // console.log('creating ol.style.Stroke instance with: ', this);
    this.instance = new style.Stroke(this);
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
        // break;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
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
  }
}

@Component({
  selector: 'aol-style-text',
  template: `<div class="aol-style-text"></div>`,
})
export class StyleTextComponent implements OnInit, OnChanges {
  public instance: style.Text;
  public componentType: string = 'style-text';
  private host: any;

  @Input() font: string|undefined;
  @Input() offsetX: number|undefined;
  @Input() offsetY: number|undefined;
  @Input() scale: number|undefined;
  @Input() rotateWithView: boolean|undefined;
  @Input() rotation: number|undefined;
  @Input() text: string|undefined;
  @Input() textAlign: string|undefined;
  @Input() textBaseLine: string|undefined;

  constructor(@Optional() host: StyleComponent) {
    if (!host) {
      throw new Error('aol-style-text must be a descendant of aol-style');
    }
    this.host = host;
    // console.log('creating aol-style-text with: ', this);
  }

  ngOnInit() {
    // console.log('creating ol.style.Text instance with: ', this);
    this.instance = new style.Text(this);
    this.host.instance.setText(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
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
  }
}
