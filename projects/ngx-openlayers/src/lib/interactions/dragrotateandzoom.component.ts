import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Condition } from 'ol/events/condition';
import { DragRotateAndZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-dragrotateandzoom',
  template: '',
  standalone: true,
})
export class DragRotateAndZoomInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  @Input()
  condition: Condition;
  @Input()
  duration: number;

  instance: DragRotateAndZoom;

  ngOnInit(): void {
    this.instance = new DragRotateAndZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
