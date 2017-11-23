import { Component, OnDestroy, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
    selector: 'aol-interaction-select',
    template: ''
})
export class SelectInteractionComponent implements OnInit, OnDestroy {
  instance: ol.interaction.Select;


    @Input() addCondition?: ol.EventsConditionType;
    @Input() condition?: ol.EventsConditionType;
    @Input() layers?: (ol.layer.Layer[] | ((layer: ol.layer.Layer) => boolean));
    @Input() style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
    @Input() removeCondition?: ol.EventsConditionType;
    @Input() toggleCondition?: ol.EventsConditionType;
    @Input() multi?: boolean;
    @Input() features?: ol.Collection<ol.Feature>;
    @Input() filter?: ol.SelectFilterFunction;
    @Input() wrapX?: boolean;

    @Output() onChange = new EventEmitter<ol.interaction.Select.Event>();
    @Output() onSelect = new EventEmitter<ol.interaction.Select.Event>();
    @Output() onPropertyChange = new EventEmitter<ol.interaction.Select.Event>();

    constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
    }

    ngOnInit() {
        this.instance = new this.mapSystem.interaction.Select(this);

        this.instance.on('change', (event: ol.interaction.Select.Event) => this.onChange.emit(event));
        this.instance.on('select', (event: ol.interaction.Select.Event) => this.onSelect.emit(event));
        this.instance.on('propertychange', (event: ol.interaction.Select.Event) => this.onPropertyChange.emit(event));

        this.map.instance.addInteraction(this.instance);
    }

    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
