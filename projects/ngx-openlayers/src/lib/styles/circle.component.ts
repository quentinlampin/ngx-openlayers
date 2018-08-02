import { Component, Input, Host, AfterContentInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { style } from 'openlayers';
import { StyleComponent } from './style.component';

@Component({
  selector: 'aol-style-circle',
  template: `<ng-content></ng-content>`,
})
export class StyleCircleComponent implements AfterContentInit, OnChanges, OnDestroy {
  public componentType = 'style-circle';
  public instance: style.Circle;

  @Input()
  fill: style.Fill;
  @Input()
  radius: number;
  @Input()
  snapToPixel: boolean;
  @Input()
  stroke: style.Stroke;
  @Input()
  atlasManager: style.AtlasManager;

  constructor(@Host() private host: StyleComponent) {}

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
    this.host.update();
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
