import { OnInit } from '@angular/core';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
export declare class SourceBingmapsComponent extends SourceComponent implements OnInit {
    key: string;
    imagerySet: 'Road' | 'Aerial' | 'AerialWithLabels' | 'collinsBart' | 'ordnanceSurvey';
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
}
