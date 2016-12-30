import {Component, Host, Input, OnInit, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import { View, Extent } from 'openlayers';
import { MapComponent } from "./map.component";

@Component({
  selector: 'aol-view',
  template: `<ng-content></ng-content>`
})
export class ViewComponent implements OnInit, OnChanges, OnDestroy{
  private host: MapComponent;

  public instance: View;


  @Input('constrainRotation') constrainRotation: boolean|number|undefined = undefined;
  @Input('enableRotation') enableRotation: boolean|undefined = undefined;
  @Input('extent') extent: Extent|undefined = undefined;
  @Input('maxResolution') maxResolution: number|undefined = undefined;
  @Input('minResolution') minResolution: number|undefined = undefined;
  @Input('maxZoom') maxZoom: number|undefined = undefined;
  @Input('minZoom') minZoom: number|undefined = undefined;
  @Input('resolution') resolution: number|undefined = undefined;
  @Input('resolutions') resolutions: number[]|undefined = undefined;
  @Input('rotation') rotation: number|undefined = undefined;
  @Input('zoom') zoom: number|undefined = undefined;
  @Input('zoomFactor') zoomFactor: number|undefined = undefined;

  constructor(@Host() map: MapComponent){
    this.host = map;
  }

  ngOnInit(){
    console.log('creating ol.View instance with: ', this);
    this.instance = new View(this);
    this.host.instance.setView(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    let properties: { [index: string] : any } = {};
    if(!this.instance) {
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
    console.log('changes detected in aol-view, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }

  ngOnDestroy(){
    console.log('removing aol-view');
  }
}
