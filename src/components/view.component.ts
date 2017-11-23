import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Inject } from '@angular/core';
import { MapComponent } from './map.component';
import { MapSystemToken } from '../map-system';

@Component({
  selector: 'aol-view',
  template: `<ng-content></ng-content>`
})
export class ViewComponent implements OnInit, OnChanges, OnDestroy {
  public instance: ol.View;
  public componentType: string = 'view';

  @Input() constrainRotation: boolean|number;
  @Input() enableRotation: boolean;
  @Input() extent: ol.Extent;
  @Input() maxResolution: number;
  @Input() minResolution: number;
  @Input() maxZoom: number;
  @Input() minZoom: number;
  @Input() resolution: number;
  @Input() resolutions: number[];
  @Input() rotation: number;
  @Input() zoom: number;
  @Input() zoomFactor: number;
  @Input() center: ol.Coordinate;
  @Input() projection: string;

  @Input() zoomAnimation = false;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private host: MapComponent) {
  }

  ngOnInit() {
    // console.log('creating ol.View instance with: ', this);
    this.instance = new this.mapSystem.View(this);
    this.host.instance.setView(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    let properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        switch (key) {
          case 'zoom':
            /** Work-around: setting the zoom via setProperties does not work. */
            if (this.zoomAnimation) {
              this.instance.animate({zoom: changes[key].currentValue});
            } else {
              this.instance.setZoom(changes[key].currentValue);
            }
            break;
          default:
            break;
        }
        properties[key] = changes[key].currentValue;
      }
    }
    // console.log('changes detected in aol-view, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }

  ngOnDestroy() {
    // console.log('removing aol-view');
  }
}
