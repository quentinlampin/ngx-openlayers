import {Component, Host, Input} from '@angular/core';
import {style} from 'openlayers';
import {StyleComponent} from './style.component';

@Component({
  selector: 'aol-style-circle',
  template: `<ng-content></ng-content>`
})
export class StyleCircleComponent {
  public componentType: string = 'style-circle';
  public instance: style.Circle;

  @Input() fill: style.Fill;
  @Input() radius: number;
  @Input() snapToPixel: boolean;
  @Input() stroke: style.Stroke;
  @Input() atlasManager: style.AtlasManager;

  constructor(@Host() private host: StyleComponent) {
  }
}
