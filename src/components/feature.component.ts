import { Component, OnInit, OnDestroy, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Feature, style } from 'openlayers';
import { SourceVectorComponent } from './sources';
import {Styleable} from './styles/styleable';

@Component({
  selector: 'aol-feature',
  template: `<ng-content></ng-content>`
})
export class FeatureComponent implements OnInit, OnDestroy, OnChanges, Styleable {
  public componentType = 'feature';
  public instance: Feature;
  private styles: style.Style[];

  @Input() id: string|number|undefined;

  constructor(private host: SourceVectorComponent) {
  }

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

  setStyle(style: ol.style.Style): void {
    this.styles.push(style);
    this.instance.setStyle(this.styles);
  }

  unsetStyle(style: ol.style.Style): boolean {
    const index = this.styles.indexOf(style);

    if (index > -1) {
      this.styles.splice(index, 1);
      this.instance.setStyle(this.styles);
      return true;
    }

    return false;
  }
}
