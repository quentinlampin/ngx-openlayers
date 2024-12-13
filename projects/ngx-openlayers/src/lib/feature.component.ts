import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Feature } from 'ol';
import { SourceVectorComponent } from './sources/vector.component';

@Component({
  selector: 'aol-feature',
  template: ` <ng-content></ng-content> `,
})
export class FeatureComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  id: string | number | undefined;

  componentType = 'feature';
  instance: Feature;

  constructor(private host: SourceVectorComponent) {}

  ngOnInit(): void {
    this.instance = new Feature();
    if (this.id !== undefined) {
      this.instance.setId(this.id);
    }
    this.host.instance.addFeature(this.instance);
  }

  ngOnDestroy(): void {
    this.host.instance.removeFeature(this.instance);
  }

  ngOnChanges(): void {
    if (this.instance) {
      this.instance.setId(this.id);
    }
  }
}
