import {Input} from '@angular/core';
import {Extent} from 'openlayers';
import {MapComponent} from '../map.component';

export abstract class LayerComponent{
  public instance: any;
  public componentType: string = 'layer';

  @Input() opacity: number;
  @Input() visible: boolean;
  @Input() extent:	Extent;
  @Input() zIndex:	number;
  @Input() minResolution: number;
  @Input() maxResolution: number;

  constructor(protected host: MapComponent) {
  }
}
