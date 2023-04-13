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
  /* the typings do not have the setters */
  host: /*StyleComponent|StyleCircleComponent|StyleTextComponent*/ any;

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
    this.instance = new Stroke(this);
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
    this.host.update();
    // console.log('changes detected in aol-style-stroke, setting new properties: ', changes);
  }
}
