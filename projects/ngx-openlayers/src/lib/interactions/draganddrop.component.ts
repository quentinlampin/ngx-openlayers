import { Component, Input, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import FeatureFormat from 'ol/format/Feature';
import { DragAndDrop } from 'ol/interaction';
import { ProjectionLike } from 'ol/proj';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-draganddrop',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DragAndDropInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  @Input()
  formatConstructors: FeatureFormat[];
  @Input()
  projection: ProjectionLike;
  @Input()
  target: HTMLElement;

  instance?: DragAndDrop;

  ngOnInit(): void {
    this.instance = new DragAndDrop(this);
    this.map.instance?.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeInteraction(this.instance);
    }
  }
}
