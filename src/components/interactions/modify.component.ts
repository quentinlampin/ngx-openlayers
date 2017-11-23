import { Component, OnDestroy, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
    selector: 'aol-interaction-modify',
    template: ''
})
export class ModifyInteractionComponent implements OnInit, OnDestroy {
  instance: ol.interaction.Modify;

    @Input() condition?: ol.EventsConditionType;
    @Input() deleteCondition?: ol.EventsConditionType;
    @Input() pixelTolerance?: number;
    @Input() style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
    @Input() features: ol.Collection<ol.Feature>;
    @Input() wrapX?: boolean;

    @Output() onModifyEnd = new EventEmitter<ol.interaction.Modify.Event>();
    @Output() onModifyStart = new EventEmitter<ol.interaction.Modify.Event>();
    @Output() onChange = new EventEmitter<ol.interaction.Modify.Event>();
    @Output() onChangeActive = new EventEmitter<ol.interaction.Modify.Event>();
    @Output() onPropertyChange = new EventEmitter<ol.interaction.Modify.Event>();

    constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
    }

    ngOnInit() {
        this.instance = new this.mapSystem.interaction.Modify(this);
        this.instance.on('change', (event: ol.interaction.Modify.Event) => this.onChange.emit(event));
        this.instance.on('change:active', (event: ol.interaction.Modify.Event) => this.onChangeActive.emit(event));
        this.instance.on('propertychange', (event: ol.interaction.Modify.Event) => this.onPropertyChange.emit(event));
        this.instance.on('modifyend', (event: ol.interaction.Modify.Event) => this.onModifyEnd.emit(event));
        this.instance.on('modifystart', (event: ol.interaction.Modify.Event) => this.onModifyStart.emit(event));
        this.map.instance.addInteraction(this.instance);
    }

    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
