import { Component, Host, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Color } from 'ol/color';
import { Size } from 'ol/size';
import { Icon } from 'ol/style';
import { StyleComponent } from './style.component';

@Component({
  selector: 'aol-style-icon',
  template: ` <div class="aol-style-icon"></div> `,
})
export class StyleIconComponent implements OnInit, OnChanges {
  @Input()
  anchor: [number, number];
  @Input()
  anchorXUnits: string;
  @Input()
  anchorYUnits: string;
  @Input()
  anchorOrigin: string;
  @Input()
  color: Color;
  @Input()
  crossOrigin: string;
  @Input()
  img: HTMLImageElement | HTMLCanvasElement;
  @Input()
  offset: [number, number];
  @Input()
  offsetOrigin: string;
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
  size: Size;
  @Input()
  imgSize: Size;
  @Input()
  src: string;

  instance: Icon;

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
