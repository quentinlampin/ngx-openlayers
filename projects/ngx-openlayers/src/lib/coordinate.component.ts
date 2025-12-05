import { Component, Input, OnChanges, OnInit, inject } from '@angular/core';
import { transform } from 'ol/proj';
import { GeometryCircleComponent } from './geom/geometrycircle.component';
import { GeometryPointComponent } from './geom/geometrypoint.component';
import { MapComponent } from './map.component';
import { OverlayComponent } from './overlay.component';
import { ViewComponent } from './view.component';

@Component({
  selector: 'aol-coordinate',
  template: ` <div class="aol-coordinate"></div> `,
  standalone: true,
})
export class CoordinateComponent implements OnChanges, OnInit {
  private map = inject(MapComponent);

  @Input()
  x: number;
  @Input()
  y: number;
  @Input()
  srid = 'EPSG:3857';

  private host: ViewComponent | GeometryPointComponent | GeometryCircleComponent | OverlayComponent;
  private mapSrid = 'EPSG:3857';

  constructor() {
    const viewHost = inject(ViewComponent, { optional: true });
    const geometryPointHost = inject(GeometryPointComponent, { optional: true });
    const geometryCircleHost = inject(GeometryCircleComponent, { optional: true });
    const overlayHost = inject(OverlayComponent, { optional: true });

    // console.log('instancing aol-coordinate');
    if (geometryPointHost !== null) {
      this.host = geometryPointHost;
    } else if (geometryCircleHost !== null) {
      this.host = geometryCircleHost;
    } else if (viewHost !== null) {
      this.host = viewHost;
    } else if (overlayHost !== null) {
      this.host = overlayHost;
    }
  }

  ngOnInit(): void {
    this.map.instance.on('change:view', (e) => this.onMapViewChanged(e));
    this.mapSrid = this.map.instance.getView().getProjection().getCode();
    this.transformCoordinates();
  }

  ngOnChanges(): void {
    this.transformCoordinates();
  }

  private onMapViewChanged(event): void {
    this.mapSrid = event.target.get(event.key).getProjection().getCode();
    this.transformCoordinates();
  }

  private transformCoordinates(): void {
    let transformedCoordinates: number[];

    if (this.srid === this.mapSrid) {
      transformedCoordinates = [this.x, this.y];
    } else {
      transformedCoordinates = transform([this.x, this.y], this.srid, this.mapSrid);
    }

    if (this.host instanceof GeometryPointComponent) {
      this.host.instance.setCoordinates(transformedCoordinates);
    } else if (this.host instanceof OverlayComponent) {
      this.host.instance.setPosition(transformedCoordinates);
    } else {
      this.host.instance.setCenter(transformedCoordinates);
    }
  }
}
