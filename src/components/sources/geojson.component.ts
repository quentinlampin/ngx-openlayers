import { Component, Host, Input, OnInit, forwardRef, Inject } from '@angular/core';
import { LayerVectorComponent } from '../layers';
import { FormatComponent } from '../formats';
import { SourceComponent } from './source.component';
import { MapSystemToken } from '../../map-system';


@Component({
    selector: 'aol-source-geojson',
    template: `<ng-content></ng-content>`,
    providers: [
        { provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent) }
    ]
})
export class SourceGeoJSONComponent extends SourceComponent implements OnInit {
    instance: ol.source.Vector;
    format: ol.format.Feature;
    @Input() defaultDataProjection: ol.ProjectionLike;
    @Input() featureProjection: ol.ProjectionLike;
    @Input() geometryName: string;
    @Input() url: string;

    constructor(@Inject(MapSystemToken) protected mapSystem: any, @Host() layer: LayerVectorComponent) {
        super(mapSystem, layer);
    }

    ngOnInit() {
        this.format = new this.mapSystem.format.GeoJSON(this);
        this.instance = new this.mapSystem.source.Vector(this);
        this.host.instance.setSource(this.instance);
    }
}
