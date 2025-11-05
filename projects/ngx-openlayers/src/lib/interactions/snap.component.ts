import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Collection, Feature } from 'ol';
import { ObjectEvent } from 'ol/Object';
import { Snap } from 'ol/interaction';
import { MapComponent } from '../map.component';
import { SnapEvent } from 'ol/events/SnapEvent';
import { Segmenters } from 'ol/interaction/Snap';
import VectorSource from 'ol/source/Vector';
import { Geometry } from 'ol/geom';

@Component({
  selector: 'aol-interaction-snap',
  template: '',
  standalone: true,
})
export class SnapInteractionComponent implements OnInit, OnDestroy {
  @Input()
  features?: Collection<Feature>;
  @Input()
  source?: VectorSource<Feature<Geometry>>;
  @Input()
  edge?: boolean;
  @Input()
  vertex?: boolean;
  @Input()
  intersection?: boolean;
  @Input()
  pixelTolerance?: number;
  @Input()
  segmenters?: Segmenters;

  @Output()
  olChange: EventEmitter<SnapEvent>;
  @Output()
  propertyChange: EventEmitter<ObjectEvent>;
  @Output()
  snap: EventEmitter<SnapEvent>;
  @Output()
  unsnap: EventEmitter<SnapEvent>;

  instance: Snap;

  constructor(private map: MapComponent) {
    this.olChange = new EventEmitter<SnapEvent>();
    this.propertyChange = new EventEmitter<ObjectEvent>();
    this.snap = new EventEmitter<SnapEvent>();
    this.unsnap = new EventEmitter<SnapEvent>();
  }

  ngOnInit(): void {
    this.instance = new Snap(this);

    this.instance.on('change', (event: SnapEvent) => this.olChange.emit(event));
    this.instance.on('propertychange', (event: ObjectEvent) => this.propertyChange.emit(event));
    this.instance.on('snap', (event: SnapEvent) => this.snap.emit(event));
    this.instance.on('unsnap', (event: SnapEvent) => this.unsnap.emit(event));

    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
