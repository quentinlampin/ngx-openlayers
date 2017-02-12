import { OnInit } from '@angular/core';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
export declare class SourceOsmComponent extends SourceComponent implements OnInit {
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
}
