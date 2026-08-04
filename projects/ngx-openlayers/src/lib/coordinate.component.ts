import { Component, OnInit, effect, inject, input, signal } from '@angular/core';
import { transform } from 'ol/proj';
import { GeometryCircleComponent } from './geom/geometrycircle.component';
import { GeometryPointComponent } from './geom/geometrypoint.component';
import { MapComponent } from './map.component';
import { OverlayComponent } from './overlay.component';
import { ViewComponent } from './view.component';
import { ObjectEvent } from 'ol/Object';

@Component({
  selector: 'aol-coordinate',
  template: ` <div class="aol-coordinate"></div> `,
  standalone: true,
})
export class CoordinateComponent implements OnInit {
  private map = inject(MapComponent);

  x = input.required<number>();
  y = input.required<number>();
  srid = input('EPSG:3857');

  private host!: ViewComponent | GeometryPointComponent | GeometryCircleComponent | OverlayComponent;
  private mapSrid = signal('EPSG:3857');

  constructor() {
    const viewHost = inject(ViewComponent, { optional: true });
    const geometryPointHost = inject(GeometryPointComponent, { optional: true });
    const geometryCircleHost = inject(GeometryCircleComponent, { optional: true });
    const overlayHost = inject(OverlayComponent, { optional: true });

    if (geometryPointHost !== null) {
      this.host = geometryPointHost;
    } else if (geometryCircleHost !== null) {
      this.host = geometryCircleHost;
    } else if (viewHost !== null) {
      this.host = viewHost;
    } else if (overlayHost !== null) {
      this.host = overlayHost;
    }

    effect(() => {
      this.transformCoordinates();
    });
  }

  ngOnInit(): void {
    if (this.map.instance) {
      this.map.instance.on('change:view', (e) => this.onMapViewChanged(e));
      this.mapSrid.set(this.map.instance.getView().getProjection().getCode());
    }
  }

  private onMapViewChanged(event: ObjectEvent): void {
    this.mapSrid.set(event.target.get(event.key).getProjection().getCode());
  }

  private transformCoordinates(): void {
    const x = this.x();
    const y = this.y();
    const srid = this.srid();
    const mapSrid = this.mapSrid();

    let transformedCoordinates: number[];

    if (srid === mapSrid) {
      transformedCoordinates = [x, y];
    } else {
      transformedCoordinates = transform([x, y], srid, mapSrid);
    }

    if (this.host instanceof GeometryPointComponent) {
      this.host.instance.setCoordinates(transformedCoordinates);
    } else if (this.host instanceof OverlayComponent) {
      this.host.instance?.setPosition(transformedCoordinates);
    } else {
      this.host.instance?.setCenter(transformedCoordinates);
    }
  }
}
