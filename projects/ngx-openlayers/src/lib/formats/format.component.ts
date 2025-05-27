import FeatureFormat from 'ol/format/Feature';
import RenderFeature from 'ol/render/Feature';

export class FormatComponent {
  public instance: FeatureFormat<RenderFeature>;
  public componentType = 'format';
}
