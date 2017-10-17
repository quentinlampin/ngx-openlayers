import {Component, Input, Optional} from '@angular/core';
import {Color, ColorLike, style} from 'openlayers';
import {StyleComponent} from './style.component';
import {StyleCircleComponent} from './circle.component';
import {StyleTextComponent} from './text.component';

@Component({
  selector: 'aol-style-fill',
  template: `<div class="aol-style-fill"></div>`,
})
export class StyleFillComponent {
  /* the typings do not have the setters */
  private host: /*StyleComponent|StyleCircleComponent|StyleTextComponent*/any;
  public instance: style.Fill;

  @Input() color: Color|ColorLike;

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
}
