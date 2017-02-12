import { OnDestroy, OnInit } from '@angular/core';
import { LayerComponent } from '../layers';
export declare class SourceComponent implements OnInit, OnDestroy {
    protected host: LayerComponent;
    instance: any;
    componentType: string;
    constructor(host: LayerComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
