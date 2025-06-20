import { AfterContentInit, Component, Host, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Circle, Fill, Stroke } from 'ol/style';
import { StyleComponent } from './style.component';

@Component({
    selector: 'aol-style-circle',
    template: ` <ng-content></ng-content> `,
    standalone: true,
})
export class StyleCircleComponent implements AfterContentInit, OnChanges, OnDestroy {
  @Input()
  fill: Fill;
  @Input()
  radius: number;
  @Input()
  stroke: Stroke;

  componentType = 'style-circle';
  instance: Circle;

  constructor(@Host() private host: StyleComponent) {}

  /**
   * WORK-AROUND: since the re-rendering is not triggered on style change
   * we trigger a radius change.
   * see openlayers #6233 and #5775
   */
  update(): void {
    if (!!this.instance) {
      // console.log('setting ol.style.Circle instance\'s radius');
      this.instance.setRadius(this.radius);
    }
    this.host.update();
  }

  ngAfterContentInit(): void {
    // console.log('creating ol.style.Circle instance with: ', this);
    this.instance = new Circle(this);
    this.host.instance.setImage(this.instance);
    this.host.update();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.instance) {
      return;
    }
    if (changes.radius) {
      this.instance.setRadius(changes.radius.currentValue);
    }
    // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
  }

  ngOnDestroy(): void {
    // console.log('removing aol-style-circle');
    this.host.instance.setImage(null);
  }
}
