import { Component, Input, Optional, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { style, Color, ColorLike } from 'openlayers';
import { StyleComponent } from './style.component';
import { StyleCircleComponent } from './circle.component';
import { StyleTextComponent } from './text.component';

@Component({
  selector: 'aol-style-fill',
  template: `<div class="aol-style-fill"></div>`,
})
export class StyleFillComponent implements OnInit, OnChanges {
  /* the typings do not have the setters */
  private host: /*StyleComponent|StyleCircleComponent|StyleTextComponent*/ any;
  public instance: style.Fill;

  @Input()
  color: Color | ColorLike;

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
