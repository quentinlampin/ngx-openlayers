import { Component, effect, inject, input, OnInit, output } from '@angular/core';
import { ObjectEvent } from 'ol/Object';
import View from 'ol/View';
import { Coordinate } from 'ol/coordinate';
import { Extent } from 'ol/extent';
import { MapComponent } from './map.component';
import { ProjectionLike } from 'ol/proj';

@Component({
  selector: 'aol-view',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class ViewComponent implements OnInit {
  private host = inject(MapComponent);

  constrainRotation = input<boolean | number>();
  enableRotation = input<boolean>();
  extent = input<Extent>();
  maxResolution = input<number>();
  minResolution = input<number>();
  maxZoom = input<number>();
  minZoom = input<number>();
  resolution = input<number>();
  resolutions = input<number[]>();
  rotation = input<number>();
  zoom = input<number>();
  zoomFactor = input<number>();
  center = input<Coordinate>();
  projection = input<ProjectionLike>();
  constrainOnlyCenter = input<boolean>();
  smoothExtentConstraint = input<boolean>();
  constrainResolution = input<boolean>();
  smoothResolutionConstraint = input<boolean>();
  showFullExtent = input<boolean>();
  multiWorld = input<boolean>();

  zoomAnimation = input(false);

  changeResolution = output<ObjectEvent>();
  changeCenter = output<ObjectEvent>();

  instance?: View;
  componentType = 'view';

  private initialized = false;
  private previousZoom?: number;
  private previousCenter?: Coordinate;
  private previousProjection?: ProjectionLike;

  constructor() {
    effect(() => {
      const projection = this.projection();

      if (this.initialized && projection !== this.previousProjection) {
        this.previousProjection = projection;
        this.buildInstance();
      }
    });

    effect(() => {
      const zoom = this.zoom();

      if (this.initialized && zoom !== this.previousZoom && this.instance) {
        this.previousZoom = zoom;

        if (this.zoomAnimation()) {
          this.instance.animate({ zoom });
        } else {
          this.instance.setZoom(zoom!);
        }
      }
    });

    effect(() => {
      const center = this.center();

      if (this.initialized && center !== this.previousCenter && this.instance) {
        this.previousCenter = center;
        this.instance.setCenter(center);
      }
    });

    // Deliberately excludes zoom/center: those have dedicated effects above
    // that call setZoom()/setCenter() (which OL requires for correct
    // internal resolution/center sync). Including them here too would make
    // this effect re-run on every zoom/center change (since it would track
    // them as dependencies) and immediately clobber what the dedicated
    // effects just set, via a blind setProperties() call.
    effect(() => {
      const properties = {
        constrainRotation: this.constrainRotation(),
        enableRotation: this.enableRotation(),
        extent: this.extent(),
        maxResolution: this.maxResolution(),
        minResolution: this.minResolution(),
        maxZoom: this.maxZoom(),
        minZoom: this.minZoom(),
        resolution: this.resolution(),
        resolutions: this.resolutions(),
        rotation: this.rotation(),
        zoomFactor: this.zoomFactor(),
        projection: this.projection(),
        constrainOnlyCenter: this.constrainOnlyCenter(),
        smoothExtentConstraint: this.smoothExtentConstraint(),
        constrainResolution: this.constrainResolution(),
        smoothResolutionConstraint: this.smoothResolutionConstraint(),
        showFullExtent: this.showFullExtent(),
        multiWorld: this.multiWorld(),
      };

      if (!this.initialized || !this.instance) {
        return;
      }

      // Only push bound values. setProperties() writes undefined verbatim
      // and would clobber OL's constructor-time defaults (or a value set
      // via a dedicated effect) for any input left unbound in the template.
      const definedProperties: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(properties)) {
        if (value !== undefined) {
          definedProperties[key] = value;
        }
      }

      this.instance.setProperties(definedProperties, false);
    });
  }

  ngOnInit(): void {
    this.previousZoom = this.zoom();
    this.previousCenter = this.center();
    this.previousProjection = this.projection();

    this.buildInstance();
    this.initialized = true;
  }

  private buildInstance(): void {
    this.instance = new View({
      constrainRotation: this.constrainRotation(),
      enableRotation: this.enableRotation(),
      extent: this.extent(),
      maxResolution: this.maxResolution(),
      minResolution: this.minResolution(),
      maxZoom: this.maxZoom(),
      minZoom: this.minZoom(),
      resolution: this.resolution(),
      resolutions: this.resolutions(),
      rotation: this.rotation(),
      zoom: this.zoom(),
      zoomFactor: this.zoomFactor(),
      center: this.center(),
      projection: this.projection(),
      constrainOnlyCenter: this.constrainOnlyCenter(),
      smoothExtentConstraint: this.smoothExtentConstraint(),
      constrainResolution: this.constrainResolution(),
      smoothResolutionConstraint: this.smoothResolutionConstraint(),
      showFullExtent: this.showFullExtent(),
      multiWorld: this.multiWorld(),
    });

    this.host.instance?.setView(this.instance);

    this.instance.on('change:resolution', (event: ObjectEvent) => this.changeResolution.emit(event));
    this.instance.on('change:center', (event: ObjectEvent) => this.changeCenter.emit(event));
  }
}
