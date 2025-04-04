import { Component, Input, OnChanges, OnInit, Optional, SimpleChanges } from '@angular/core';
import { Color } from 'ol/color';
import { ColorLike } from 'ol/colorlike';
import { Stroke } from 'ol/style';
import { StyleCircleComponent } from './circle.component';
import { StyleComponent } from './style.component';
import { StyleTextComponent } from './text.component';

@Component({
  selector: 'aol-style-stroke',
  template: ` <div class="aol-style-stroke"></div> `,
})
export class StyleStrokeComponent implements OnInit, OnChanges {
  @Input()
  color: Color | ColorLike;
  @Input()
  lineCap: CanvasLineCap;
  @Input()
  lineDash: number[];
  @Input()
  lineJoin: CanvasLineJoin;
  @Input()
  miterLimit: number;
  @Input()
  width: number;

  instance: Stroke;
  private readonly host: StyleComponent | StyleCircleComponent | StyleTextComponent;

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

  ngOnInit(): void {
    // console.log('creating ol.style.Stroke instance with: ', this);
    this.instance = new Stroke(this);

    if(this.host instanceof StyleComponent || this.host instanceof StyleTextComponent) {
      this.host.instance.setStroke(this.instance);
    } else {
      this.host.stroke = this.instance;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.instance) {
      return;
    }
    if (changes.color) {
      this.instance.setColor(changes.color.currentValue);
    }
    if (changes.lineCap) {
      this.instance.setLineCap(changes.lineCap.currentValue);
    }
    if (changes.lineDash) {
      this.instance.setLineDash(changes.lineDash.currentValue);
    }
    if (changes.lineJoin) {
      this.instance.setLineJoin(changes.lineJoin.currentValue);
    }
    if (changes.miterLimit) {
      this.instance.setMiterLimit(changes.miterLimit.currentValue);
    }
    if (changes.width) {
      this.instance.setWidth(changes.width.currentValue);
    }
    if(this.host instanceof StyleCircleComponent || this.host instanceof StyleComponent) {
      this.host.update();
    }
    // console.log('changes detected in aol-style-stroke, setting new properties: ', changes);
  }
}
