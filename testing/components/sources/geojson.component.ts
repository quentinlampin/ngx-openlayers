import {Component, forwardRef, Host, Input} from '@angular/core';
import {format, ProjectionLike, source} from 'openlayers';
import {LayerVectorComponent} from '../layers';
import {SourceComponent} from './source.component';


@Component({
    selector: 'aol-source-geojson',
    template: `<ng-content></ng-content>`,
    providers: [
        { provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent) }
    ]
})
export class SourceGeoJSONComponent extends SourceComponent {
    instance: source.Vector;
    format: format.Feature;
    @Input() defaultDataProjection: ProjectionLike;
    @Input() featureProjection: ProjectionLike;
    @Input() geometryName: string;
    @Input() url: string;

    constructor( @Host() layer: LayerVectorComponent) {
        super(layer);
    }
}
