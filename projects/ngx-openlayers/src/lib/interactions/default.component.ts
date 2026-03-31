import { Component, Input, OnChanges, OnDestroy, OnInit, inject } from '@angular/core';
import { defaults, Interaction } from 'ol/interaction';
import { Collection } from 'ol';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-default',
  template: '',
  standalone: true,
})
export class DefaultInteractionComponent implements OnInit, OnChanges, OnDestroy {
  private map = inject(MapComponent);
  instance: Collection<Interaction>;
  @Input()
  altShiftDragRotate?: boolean | undefined;
  @Input()
  doubleClickZoom?: boolean | undefined;
  @Input()
  keyboard?: boolean | undefined;
  @Input()
  mouseWheelZoom?: boolean | undefined;
  @Input()
  shiftDragZoom?: boolean | undefined;
  @Input()
  dragPan?: boolean | undefined;
  @Input()
  pinchRotate?: boolean | undefined;
  @Input()
  pinchZoom?: boolean | undefined;
  @Input()
  onFocusOnly?: boolean | undefined;
  @Input()
  zoomDelta?: number | undefined;
  @Input()
  zoomDuration?: number | undefined;


  ngOnInit(): void {
    this.instance = defaults({
      altShiftDragRotate: this.altShiftDragRotate,
      doubleClickZoom: this.doubleClickZoom,
      keyboard: this.keyboard,
      mouseWheelZoom: this.mouseWheelZoom,
      shiftDragZoom: this.shiftDragZoom,
      dragPan: this.dragPan,
      pinchRotate: this.pinchRotate,
      pinchZoom: this.pinchZoom,
      onFocusOnly: this.onFocusOnly,
      zoomDelta: this.zoomDelta,
      zoomDuration: this.zoomDuration,
    });
    if (this.map.instance) {
      this.instance.forEach((i) => this.map.instance.addInteraction(i));
    }
  }

  ngOnChanges() {
    if (this.instance) {
      if (this.map.instance) {
        this.instance.forEach((i) => this.map.instance.removeInteraction(i));
      }
      this.instance = defaults({
        altShiftDragRotate: this.altShiftDragRotate,
        doubleClickZoom: this.doubleClickZoom,
        keyboard: this.keyboard,
        mouseWheelZoom: this.mouseWheelZoom,
        shiftDragZoom: this.shiftDragZoom,
        dragPan: this.dragPan,
        pinchRotate: this.pinchRotate,
        pinchZoom: this.pinchZoom,
        onFocusOnly: this.onFocusOnly,
        zoomDelta: this.zoomDelta,
        zoomDuration: this.zoomDuration,
      });
      if (this.map.instance) {
        this.instance.forEach((i) => this.map.instance.addInteraction(i));
      }
    }
  }

  ngOnDestroy(): void {
    if (this.map.instance) {
      this.instance.forEach((i) => this.map.instance.removeInteraction(i));
    }
  }
}
