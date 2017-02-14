import { Component, Host, Input, OnInit, forwardRef } from '@angular/core';
import { source } from 'openlayers';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-bingmaps',
  template: `<div class="aol-source-bingmaps"></div>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent) }
  ]
})
export class SourceBingmapsComponent extends SourceComponent implements OnInit {
  instance: source.BingMaps;
  @Input() key: string;
  @Input() imagerySet: 'Road'|'Aerial'|'AerialWithLabels'|'collinsBart'|'ordnanceSurvey' = 'Aerial';

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new source.BingMaps(this);
    this.host.instance.setSource(this.instance);
  }
}
