import { Component, OnDestroy, OnInit, inject, input, output } from '@angular/core';
import { Collection, Feature } from 'ol';
import { ObjectEvent } from 'ol/Object';
import { Snap } from 'ol/interaction';
import { SnapEvent } from 'ol/events/SnapEvent';
import { Segmenters } from 'ol/interaction/Snap';
import VectorSource from 'ol/source/Vector';
import { Geometry } from 'ol/geom';

import { MapComponent } from '../map.component';
import BaseEvent from 'ol/events/Event';

@Component({
  selector: 'aol-interaction-snap',
  template: '',
  standalone: true,
})
export class SnapInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  features = input<Collection<Feature>>();
  source = input<VectorSource<Feature<Geometry>>>();
  edge = input<boolean>();
  vertex = input<boolean>();
  intersection = input<boolean>();
  pixelTolerance = input<number>();
  segmenters = input<Segmenters>();

  olChange = output<BaseEvent>();
  propertyChange = output<ObjectEvent>();
  snap = output<SnapEvent>();
  unsnap = output<SnapEvent>();

  instance?: Snap;

  ngOnInit(): void {
    this.instance = new Snap({
      features: this.features(),
      source: this.source(),
      edge: this.edge(),
      vertex: this.vertex(),
      intersection: this.intersection(),
      pixelTolerance: this.pixelTolerance(),
      segmenters: this.segmenters(),
    });

    this.instance.on('change', (event) => this.olChange.emit(event));
    this.instance.on('propertychange', (event: ObjectEvent) => this.propertyChange.emit(event));
    this.instance.on('snap', (event: SnapEvent) => this.snap.emit(event));
    this.instance.on('unsnap', (event: SnapEvent) => this.unsnap.emit(event));

    this.map.instance?.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeInteraction(this.instance);
    }
  }
}
