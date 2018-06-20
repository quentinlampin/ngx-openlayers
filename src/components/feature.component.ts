import { Component, OnInit, OnDestroy, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Feature, style } from 'openlayers';
import { SourceVectorComponent } from './sources';
import {Styleable} from './styles/styleable';

@Component({
  selector: 'aol-feature',
  template: `<ng-content></ng-content>`
})
export class FeatureComponent implements OnInit, OnDestroy, OnChanges, Styleable {
  private styles: style.Style[] = [];

  public componentType = 'feature';
  public instance: Feature;

  @Input() id: string|number|undefined;

  constructor(private host: SourceVectorComponent) {}

  ngOnInit() {
    this.instance = new Feature();
    if (this.id !== undefined) {
      this.instance.setId(this.id);
    }
    this.host.instance.addFeature(this.instance);
  }

  ngOnDestroy() {
    this.host.instance.removeFeature(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.instance) {
      this.instance.setId(this.id);
    }
  }

  update() {
    this.host.instance.changed();
  }

  /**
   * Add the style to the feature
   *
   * @param {ol.style.Style} style
   */
  addStyle(style: ol.style.Style): void {
    // Add style to this.styles
    this.styles.push(style);
    // set this.styles as style of this feature
    this.instance.setStyle(this.styles);
  }

  /**
   * Remove the style from the feature
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
      // and set the style
      this.instance.setStyle(this.styles);
      // return true because the style was removed from this.styles
      return true;
    }
    // return false becaus the style was not removed from this.styles
    return false;
  }
}
