import {
  Component, OnDestroy, OnInit, Input, Optional, OnChanges,
  SimpleChanges
} from '@angular/core';
import { layer, source, style } from 'openlayers';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import {Styleable} from '../styles/styleable';

@Component({
  selector: 'aol-layer-vector',
  template: `<ng-content></ng-content>`
})
export class LayerVectorComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges, Styleable {
  private styles: style.Style[] = [];

  public source: source.Vector;

  @Input() renderBuffer: number;

  constructor(map: MapComponent,
              @Optional() group?: LayerGroupComponent) {
    super(group || map);
  }

  ngOnInit() {
    // console.log('creating ol.layer.Vector instance with:', this);
    this.instance = new layer.Vector(this);
    this.instance.setStyle(() => this.styles);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }

  /**
   * Add the style to the layer
   *
   * @param {ol.style.Style} style
   */
  addStyle(style: ol.style.Style): void {
    // Add style to this.styles
    this.styles.push(style);
  }

  /**
   * Remove the style from the layer
   *
   * @param {ol.style.Style} style
   * @returns {boolean} if the style was applied is was successfully remove true, else false
   */
  removeStyle(style: ol.style.Style): boolean {
    const index = this.styles.indexOf(style);
    // Check if this.styles contains style
    if (index > -1) {
      // If so remove the style from this.styles
      this.styles.splice(index, 1);
      // return true because the style was removed from this.styles
      return true;
    }
    // return false becaus the style was not removed from this.styles
    return false;
  }
}
