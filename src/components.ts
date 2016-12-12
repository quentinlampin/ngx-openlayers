// Import all directives

import {MapComponent} from "./components/map.component";
import {LayerTileComponent, LayerVectorComponent} from "./components/layer.components";
import {SourceOsmComponent, SourceBingmapsComponent, SourceVectorComponent} from "./components/source.components";
import {ViewComponent} from "./components/view.component";
import {FeatureComponent} from "./components/feature.component";
import {GeometryLinestringComponent, GeometryPointComponent} from "./components/geometry.components";
import {CoordinateComponent, CollectionCoordinatesComponent} from "./components/coordinate.component";
import {StyleComponent, IconStyleDirective, StrokeStyleDirective} from "./components/style.components";
import {controls} from './components/controls/controls';

// Export all components
export * from './components/map.component';
export * from './components/view.component';
export * from './components/layer.components';
export * from './components/source.components';
export * from './components/feature.component';
export * from './components/geometry.components';
export * from './components/coordinate.component';
export * from './components/style.components';
export * from './components/controls/controls';

// Export convenience property
export function components(): any[] {
  return [
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
    CoordinateComponent,
    CollectionCoordinatesComponent,
    StyleComponent,
    IconStyleDirective,
    StrokeStyleDirective,
    controls()
  ]
};
