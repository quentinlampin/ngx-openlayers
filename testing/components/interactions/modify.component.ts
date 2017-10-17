import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Collection, EventsConditionType, Feature, interaction, style, StyleFunction} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
    selector: 'aol-interaction-modify',
    template: ''
})
export class ModifyInteractionComponent {
    instance: interaction.Modify;

    @Input() condition?: EventsConditionType;
    @Input() deleteCondition?: EventsConditionType;
    @Input() pixelTolerance?: number;
    @Input() style?: (style.Style | style.Style[] | StyleFunction);
    @Input() features: Collection<Feature>;
    @Input() wrapX?: boolean;

    @Output() onModifyEnd = new EventEmitter<interaction.Modify.Event>();
    @Output() onModifyStart = new EventEmitter<interaction.Modify.Event>();
    @Output() onChange = new EventEmitter<interaction.Modify.Event>();
    @Output() onChangeActive = new EventEmitter<interaction.Modify.Event>();
    @Output() onPropertyChange = new EventEmitter<interaction.Modify.Event>();

    constructor(private map: MapComponent) {
    }
}
