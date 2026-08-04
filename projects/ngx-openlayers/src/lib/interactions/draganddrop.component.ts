import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import FeatureFormat from 'ol/format/Feature';
import { DragAndDrop } from 'ol/interaction';
import { ProjectionLike } from 'ol/proj';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-draganddrop',
  template: '',
  standalone: true,
})
export class DragAndDropInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  formatConstructors = input<FeatureFormat[]>();
  projection = input<ProjectionLike>();
  target = input<HTMLElement>();

  instance?: DragAndDrop;

  ngOnInit(): void {
    this.instance = new DragAndDrop({
      formatConstructors: this.formatConstructors(),
      projection: this.projection(),
      target: this.target(),
    });

    this.map.instance?.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeInteraction(this.instance);
    }
  }
}
