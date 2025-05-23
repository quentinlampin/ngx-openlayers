import { FeatureClass } from 'ol/Feature';
import FeatureFormat from 'ol/format/Feature';

export class FormatComponent {
  public instance: FeatureFormat<FeatureClass>;
  public componentType = 'format';
}
