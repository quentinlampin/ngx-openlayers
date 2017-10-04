import {Component, Input} from '@angular/core';
import {Collection, Feature, interaction, layer} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
    selector: 'aol-interaction-translate',
    template: ''
})
export class TranslateInteractionComponent{
    instance: interaction.Translate;

    @Input() features?: Collection<Feature>;
    @Input() layers?: (layer.Layer[] | ((layer: layer.Layer) => boolean));

    constructor(private map: MapComponent) {
    }
}
