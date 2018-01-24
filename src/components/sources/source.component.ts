import { Host, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { source } from 'openlayers';
import { LayerComponent } from '../layers';
import AttributionLike = ol.AttributionLike;

export class SourceComponent implements OnInit, OnDestroy, OnChanges {
  public instance: source.Source;
  public componentType: string = 'source';

  @Input() attributions: AttributionLike;

  constructor(@Host() protected host: LayerComponent) {
  }

  ngOnInit() {
    this.host.instance.setSource(this.instance);
  }

  ngOnDestroy() {
    this.host.instance.setSource(null);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.instance) {
      return;
    }
    // for each change, check if a function set[PropertyName] or update[PropertyName] exists on the source instance
    // if it exists, calls the function to update the property
    // if it doesn't exist, update with the setProperties function
    // for example: with changes as { url: 'http://example.com', anotherProperty: 'myPropValue'} on a tilewms instance
    //      this will call: - instance.setUrl('http://example.com') // because setUrl exists on ol.source.TileWMS
    //                      - instance.setProperties({anotherProperty: 'myPropValue'})
    let properties: {[key: string]: any} = {};
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        const keyWithFirstUpperLetter = key[0].toUpperCase() + key.substring(1);
        if (typeof (<any>this.instance)[`set${keyWithFirstUpperLetter}`] === 'function') {
          // Call instance.set[PropertyName]()
          (<any>this.instance)['set' + keyWithFirstUpperLetter](changes[key].currentValue);
        } else if (typeof (<any>this.instance)[`update${keyWithFirstUpperLetter}`] === 'function') {
          // Call instance.update[PropertyName]()
          (<any>this.instance)['update' + keyWithFirstUpperLetter](changes[key].currentValue);
        } else {
          // Keep for later in instance.setProperties()
          properties[key] = changes[key].currentValue;
        }
      }
    }
    // console.log('changes detected in aol-source, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }
}
