import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { Fill } from 'ol/style';
import { StyleComponent } from './style.component';
import { StyleCircleComponent } from './circle.component';
import { StyleTextComponent } from './text.component';
import { Color } from 'ol/color';
import { ColorLike } from 'ol/colorlike';

@Component({
  selector: 'aol-style-fill',
  template: ` <div class="aol-style-fill"></div> `,
  standalone: true,
})
export class StyleFillComponent implements OnInit, OnChanges {
  @Input()
  color: Color | ColorLike;

  instance: Fill;
  private readonly host: StyleComponent | StyleCircleComponent | StyleTextComponent;

  constructor() {
    const styleHost = inject(StyleComponent, { optional: true });
    const styleCircleHost = inject(StyleCircleComponent, { optional: true });
    const styleTextHost = inject(StyleTextComponent, { optional: true });

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

  ngOnInit(): void {
    // console.log('creating ol.style.Fill instance with: ', this);
    this.instance = new Fill(this);
    if (this.host instanceof StyleComponent || this.host instanceof StyleTextComponent) {
      this.host.instance.setFill(this.instance);
    } else {
      this.host.fill = this.instance;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.instance) {
      return;
    }
    if (changes.color) {
      this.instance.setColor(changes.color.currentValue);
    }
    if (this.host instanceof StyleCircleComponent || this.host instanceof StyleComponent) {
      this.host.update();
    }
    // console.log('changes detected in aol-style-fill, setting new color: ', changes);
  }
}
