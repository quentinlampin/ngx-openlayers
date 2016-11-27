// Import all directives
import {ControlAttributionComponent} from "./attribution.component";
import {ControlZoomSliderComponent} from "./zoomslider.component";

// Export all components
export * from './attribution.component';
export * from './zoomslider.component';

// Export convenience property
export const CONTROLS: any[] = [
  ControlAttributionComponent,
  ControlZoomSliderComponent
];
