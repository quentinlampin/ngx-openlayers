import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
    Collection,
    EventsConditionType,
    Feature,
    interaction,
    layer,
    SelectFilterFunction,
    style,
    StyleFunction
} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
    selector: 'aol-interaction-select',
    template: ''
})
export class SelectInteractionComponent {
    instance: interaction.Select;

    @Input() addCondition?: EventsConditionType;
    @Input() condition?: EventsConditionType;
    @Input() layers?: (layer.Layer[] | ((layer: layer.Layer) => boolean));
    @Input() style?: (style.Style | style.Style[] | StyleFunction);
    @Input() removeCondition?: EventsConditionType;
    @Input() toggleCondition?: EventsConditionType;
    @Input() multi?: boolean;
    @Input() features?: Collection<Feature>;
    @Input() filter?: SelectFilterFunction;
    @Input() wrapX?: boolean;

    @Output() onChange = new EventEmitter<interaction.Select.Event>();
    @Output() onSelect = new EventEmitter<interaction.Select.Event>();
    @Output() onPropertyChange = new EventEmitter<interaction.Select.Event>();

    constructor(private map: MapComponent) {
    }
}
