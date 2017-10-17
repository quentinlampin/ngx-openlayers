import {Component, EventEmitter, Input, Output} from '@angular/core';
import {interaction} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-interaction-draw',
  template: ''
})
export class DrawInteractionComponent {
  instance: interaction.Draw;

  @Input() clickTolerance?: number;
  @Input() features?: ol.Collection<ol.Feature>;
  @Input() source?: ol.source.Vector;
  @Input() snapTolerance?: number;
  @Input() type: ol.geom.GeometryType;
  @Input() maxPoints?: number;
  @Input() minPoints?: number;
  @Input() finishCondition?: ol.EventsConditionType;
  @Input() style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
  @Input() geometryFunction?: ol.DrawGeometryFunctionType;
  @Input() geometryName?: string;
  @Input() condition?: ol.EventsConditionType;
  @Input() freehandCondition?: ol.EventsConditionType;
  @Input() freehand?: boolean;
  @Input() wrapX?: boolean;

  @Output() onChange = new EventEmitter<ol.interaction.Draw.Event>();
  @Output() onChangeActive = new EventEmitter<ol.interaction.Draw.Event>();
  @Output() onDrawEnd = new EventEmitter<ol.interaction.Draw.Event>();
  @Output() onDrawStart = new EventEmitter<ol.interaction.Draw.Event>();
  @Output() onPropertyChange = new EventEmitter<ol.interaction.Draw.Event>();

  constructor(private map: MapComponent) {
  }
}
