import {Component, Host, Input, OnInit, forwardRef, ContentChild, AfterContentInit} from '@angular/core';
import { source } from 'openlayers';
import { LayerVectorComponent } from '../layers';
import { SourceComponent } from './source.component';
import { SourceVectorComponent } from './vector.component';


@Component({
    selector: 'aol-source-cluster',
    template: `<ng-content></ng-content>`,
    providers: [
        { provide: SourceComponent, useExisting: forwardRef(() => SourceClusterComponent) }
    ]
})
export class SourceClusterComponent extends SourceComponent implements AfterContentInit {
    instance: source.Cluster;

    @Input() distance: number;

    @ContentChild(SourceVectorComponent) sourceVectorComponent: SourceVectorComponent;
    source: source.Vector;

    constructor(@Host() layer: LayerVectorComponent) {
        super(layer);
    }

    ngAfterContentInit() {
      this.source = this.sourceVectorComponent.instance;

      this.instance = new source.Cluster(this);
      this.host.instance.setSource(this.instance);
    }
}
