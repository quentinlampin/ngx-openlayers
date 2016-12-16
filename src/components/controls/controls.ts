// Import all directives
import { ControlAttributionComponent } from './attribution.component';
import { ControlFullScreenComponent } from './fullscreen.component';
import { ControlMousePositionComponent } from './mouseposition.component';
// import { ControlOverviewMapComponent } from './overviewmap.component';
import { ControlRotateComponent } from './rotate.component';
import { ControlScaleLineComponent } from './scaleline.component';
import { ControlZoomComponent } from './zoom.component';
import { ControlZoomSliderComponent } from './zoomslider.component';
import { ControlZoomToExtentComponent } from './zoomtoextent.component';

// Export all components
export * from './attribution.component';
export * from './fullscreen.component';
export * from './mouseposition.component';
// export * from './overviewmap.component';
export * from './rotate.component';
export * from './scaleline.component';
export * from './zoom.component';
export * from './zoomslider.component';
export * from './zoomtoextent.component';

// Export convenience property
export function controls(): any[] {
    return [
        ControlAttributionComponent,
        ControlFullScreenComponent,
        ControlMousePositionComponent,
        // ControlOverviewMapComponent,
        ControlRotateComponent,
        ControlScaleLineComponent,
        ControlZoomComponent,
        ControlZoomSliderComponent,
        ControlZoomToExtentComponent
    ]
};
