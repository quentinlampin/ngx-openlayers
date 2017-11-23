import {
  Component, EventEmitter, Inject, Input, OnChanges, OnInit, Optional,
  SimpleChanges
} from '@angular/core';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-layer-image',
  template: `<ng-content></ng-content>`
})
export class LayerImageComponent extends LayerComponent implements OnInit, OnChanges {
  public source: ol.source.Image;

  @Input() opacity: number;
  @Input() visible: boolean;
  @Input() extent: ol.Extent;
  @Input() minResolution: number;
  @Input() maxResolution: number;
  @Input() zIndex: number;

  constructor(@Inject(MapSystemToken) protected mapSystem: any,
              map: MapComponent,
              @Optional() group?: LayerGroupComponent) {
    super(mapSystem, group || map);
  }

  ngOnInit() {
    this.instance = new this.mapSystem.layer.Image(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }
}
