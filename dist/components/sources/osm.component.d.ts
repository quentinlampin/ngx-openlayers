/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { source } from 'openlayers';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
export declare class SourceOsmComponent extends SourceComponent implements OnInit {
    instance: source.OSM;
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
}
