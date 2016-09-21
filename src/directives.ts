// Import all directives
import {MapComponent} from "./directives/map.component";
import {LayerTileComponent, LayerVectorComponent} from "./directives/layer.components";
import {SourceOsmComponent, SourceBingmapsComponent, SourceVectorComponent} from "./directives/source.components";
import {ViewComponent} from "./directives/view.component";
import {FeatureComponent} from "./directives/feature.component";
import {GeometryLinestringComponent, GeometryPointComponent} from "./directives/geometry.components";
import {CoordinateComponent} from "./directives/coordinate.component";

// Export all directives
export * from './directives/map.component';
export * from './directives/view.component';
export * from './directives/layer.components';
export * from './directives/source.components';
export * from './directives/feature.component';
export * from './directives/geometry.components';
export * from './directives/coordinate.component';

// Export convenience property
export const DIRECTIVES: any[] = [
  MapComponent,
  ViewComponent,
  LayerTileComponent,
  LayerVectorComponent,
  SourceOsmComponent,
  SourceBingmapsComponent,
  SourceVectorComponent,
  FeatureComponent,
  GeometryLinestringComponent,
  GeometryPointComponent,
  CoordinateComponent
];
