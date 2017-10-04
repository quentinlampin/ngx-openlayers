import {Component, Input, Optional} from '@angular/core';
import {style} from 'openlayers';
import {StyleComponent} from './style.component';

@Component({
  selector: 'aol-style-text',
  template: `<div class="aol-style-text"></div>`,
})
export class StyleTextComponent {
  public instance: style.Text;
  public componentType: string = 'style-text';

  @Input() font: string|undefined;
  @Input() offsetX: number|undefined;
  @Input() offsetY: number|undefined;
  @Input() scale: number|undefined;
  @Input() rotateWithView: boolean|undefined;
  @Input() rotation: number|undefined;
  @Input() text: string|undefined;
  @Input() textAlign: string|undefined;
  @Input() textBaseLine: string|undefined;

  constructor(@Optional() private host: StyleComponent) {
    if (!host) {
      throw new Error('aol-style-text must be a descendant of aol-style');
    }
  }
}
