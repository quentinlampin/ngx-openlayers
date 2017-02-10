/// <reference types="openlayers" />
import { OnDestroy } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from './map.component';
export declare class ControlAttributionComponent extends control.Attribution implements OnDestroy {
    private host;
    componentType: string;
    constructor(map: MapComponent);
    ngOnDestroy(): void;
}
export declare class ControlFullScreenComponent extends control.FullScreen implements OnDestroy {
    _host_: MapComponent;
    constructor(map: MapComponent);
    ngOnDestroy(): void;
}
export declare class ControlMousePositionComponent extends control.MousePosition implements OnDestroy {
    _host_: MapComponent;
    constructor(map: MapComponent);
    ngOnDestroy(): void;
}
export declare class ControlOverviewMapComponent extends control.OverviewMap implements OnDestroy {
    _host_: MapComponent;
    constructor(map: MapComponent);
    ngOnDestroy(): void;
}
export declare class ControlRotateComponent extends control.Rotate implements OnDestroy {
    _host_: MapComponent;
    constructor(map: MapComponent);
    ngOnDestroy(): void;
}
export declare class ControlScaleLineComponent extends control.ScaleLine implements OnDestroy {
    _host_: MapComponent;
    constructor(map: MapComponent);
    ngOnDestroy(): void;
}
export declare class ControlZoomComponent extends control.Zoom implements OnDestroy {
    _host_: MapComponent;
    constructor(map: MapComponent);
    ngOnDestroy(): void;
}
export declare class ControlZoomSliderComponent extends control.ZoomSlider implements OnDestroy {
    _host_: MapComponent;
    constructor(map: MapComponent);
    ngOnDestroy(): void;
}
export declare class ControlZoomToExtentComponent extends control.ZoomToExtent implements OnDestroy {
    _host_: MapComponent;
    constructor(map: MapComponent);
    ngOnDestroy(): void;
}
