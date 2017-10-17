import {Component, Host, Input} from '@angular/core';
import {style} from 'openlayers';
import {StyleComponent} from './style.component';

@Component({
  selector: 'aol-style-icon',
  template: `<div class="aol-style-icon"></div>`,
})
export class StyleIconComponent {
  public instance: style.Icon;

  @Input() anchor: [number, number];
  @Input() anchorXUnits: style.IconAnchorUnits;
  @Input() anchorYUnits: style.IconAnchorUnits;
  @Input() anchorOrigin: style.IconOrigin;
  @Input() color: [number, number, number, number];
  @Input() crossOrigin: style.IconOrigin;
  @Input() img: string;
  @Input() offset: [number, number];
  @Input() offsetOrigin: style.IconOrigin;
  @Input() opacity: number;
  @Input() scale: number;
  @Input() snapToPixel: boolean;
  @Input() rotateWithView: boolean;
  @Input() rotation: number;
  @Input() size: [number, number];
  @Input() imgSize: [number, number];
  @Input() src: string;

  constructor(@Host() private host: StyleComponent) {}
}
