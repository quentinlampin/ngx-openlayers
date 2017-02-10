import { Component, Host, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { View, Extent } from 'openlayers';
import { MapComponent } from './map.component';

@Component({
  selector: 'aol-view',
  template: `<ng-content></ng-content>`
})
export class ViewComponent implements OnInit, OnChanges, OnDestroy {
  private host: MapComponent;

  public instance: View;
  public componentType: string = 'view';


  @Input() constrainRotation: boolean|number|undefined = undefined;
  @Input() enableRotation: boolean|undefined = undefined;
  @Input() extent: Extent|undefined = undefined;
  @Input() maxResolution: number|undefined = undefined;
  @Input() minResolution: number|undefined = undefined;
  @Input() maxZoom: number|undefined = undefined;
  @Input() minZoom: number|undefined = undefined;
  @Input() resolution: number|undefined = undefined;
  @Input() resolutions: number[]|undefined = undefined;
  @Input() rotation: number|undefined = undefined;
  @Input() zoom: number|undefined = undefined;
  @Input() zoomFactor: number|undefined = undefined;

  constructor(@Host() map: MapComponent) {
    this.host = map;
  }

  ngOnInit() {
    // console.log('creating ol.View instance with: ', this);
    this.instance = new View(this);
    this.host.instance.setView(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    let properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (let key in changes) {
      switch (key) {
        case 'zoom':
          /** Work-around: setting the zoom via setProperties does not work. */
          this.instance.setZoom(changes[key].currentValue);
          break;
        default:
          break;
      }
      properties[key] = changes[key].currentValue;
    }
    // console.log('changes detected in aol-view, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }

  ngOnDestroy() {
    // console.log('removing aol-view');
  }
}
