import { Component, Input, Host, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Icon } from 'ol/style';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
import IconOrigin from 'ol/style/IconOrigin';
import { StyleComponent } from './style.component';

@Component({
  selector: 'aol-style-icon',
  template: `
    <div class="aol-style-icon"></div>
  `,
})
export class StyleIconComponent implements OnInit, OnChanges {
  public instance: Icon;

  @Input()
  anchor: [number, number];
  @Input()
  anchorXUnits: IconAnchorUnits;
  @Input()
  anchorYUnits: IconAnchorUnits;
  @Input()
  anchorOrigin: IconOrigin;
  @Input()
  color: [number, number, number, number];
  @Input()
  crossOrigin: IconOrigin;
  @Input()
  img: string;
  @Input()
  offset: [number, number];
  @Input()
  offsetOrigin: IconOrigin;
  @Input()
  opacity: number;
  @Input()
  scale: number;
  @Input()
  snapToPixel: boolean;
  @Input()
  rotateWithView: boolean;
  @Input()
  rotation: number;
  @Input()
  size: [number, number];
  @Input()
  imgSize: [number, number];
  @Input()
  src: string;

  constructor(@Host() private host: StyleComponent) {}

  ngOnInit() {
    // console.log('creating ol.style.Icon instance with: ', this);
    this.instance = new Icon(this);
    this.host.instance.setImage(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.instance) {
      return;
    }
    if (changes.opacity) {
      this.instance.setOpacity(changes.opacity.currentValue);
    }
    if (changes.rotation) {
      this.instance.setRotation(changes.rotation.currentValue);
    }
    if (changes.scale) {
      this.instance.setScale(changes.scale.currentValue);
    }
    if (changes.src) {
      this.instance = new Icon(this);
      this.host.instance.setImage(this.instance);
    }
    this.host.update();
    // console.log('changes detected in aol-style-icon: ', changes);
  }
}
