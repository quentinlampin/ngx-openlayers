import { Component, OnDestroy, OnInit, effect, inject, input } from '@angular/core';
import { Feature } from 'ol';
import { SourceVectorComponent } from './sources/vector.component';

@Component({
  selector: 'aol-feature',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class FeatureComponent implements OnInit, OnDestroy {
  private host = inject(SourceVectorComponent);

  id = input<string | number | undefined>();

  componentType = 'feature';

  instance = new Feature();

  constructor() {
    effect(() => {
      const id = this.id();
      this.instance.setId(id);
    });
  }

  ngOnInit(): void {
    this.host.instance?.addFeature(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.host.instance?.removeFeature(this.instance);
    }
  }
}
