import {Component, Input, Optional} from '@angular/core';
import {Color, style} from 'openlayers';
import {StyleComponent} from './style.component';
import {StyleCircleComponent} from './circle.component';
import {StyleTextComponent} from './text.component';

@Component({
  selector: 'aol-style-stroke',
  template: `<div class="aol-style-stroke"></div>`,
})
export class StyleStrokeComponent {
  public instance: style.Stroke;
  /* the typings do not have the setters */
  private host: /*StyleComponent|StyleCircleComponent|StyleTextComponent*/any;

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
}
