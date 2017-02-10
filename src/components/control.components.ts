import { Component, Host, OnDestroy } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from './map.component';

@Component({
  selector: 'aol-control-attribution',
  template: `<ng-content></ng-content>`
})
export class ControlAttributionComponent extends control.Attribution implements OnDestroy {
  private host: MapComponent;
  public componentType: string;

  constructor(@Host() map: MapComponent) {
    // console.log('instancing aol-control-attribution');
    super();
    this.host = map;
    this.componentType = 'control';
    map.instance.addControl(this);
  }

  ngOnDestroy() {
    console.log('removing aol-control-attribution');
    this.host.instance.removeControl(this);
  }
}


@Component({
  selector: 'aol-control-fullscreen',
  template: `<ng-content></ng-content>`
})
export class ControlFullScreenComponent extends control.FullScreen implements OnDestroy {
  _host_: MapComponent;

  constructor(@Host() map: MapComponent) {
    // console.log('instancing aol-control-fullscreen');
    super();
    this._host_ = map;
    map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-fullscreen');
    this._host_.instance.removeControl(this);
  }
}

@Component({
  selector: 'aol-control-mouseposition',
  template: `<ng-content></ng-content>`
})
export class ControlMousePositionComponent extends control.MousePosition implements OnDestroy {
  _host_: MapComponent;

  constructor(@Host() map: MapComponent) {
    // console.log('instancing aol-control-mouseposition');
    super();
    this._host_ = map;
    map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-mouseposition');
    this._host_.instance.removeControl(this);
  }
}

@Component({
  selector: 'aol-control-overviewmap',
  template: `<ng-content></ng-content>`
})
export class ControlOverviewMapComponent extends control.OverviewMap implements OnDestroy {
  _host_: MapComponent;

  constructor(@Host() map: MapComponent) {
    // console.log('instancing aol-control-overviewmap');
    super();
    this._host_ = map;
    map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-overviewmap');
    this._host_.instance.removeControl(this);
  }
}

@Component({
  selector: 'aol-control-rotate',
  template: `<ng-content></ng-content>`
})
export class ControlRotateComponent extends control.Rotate implements OnDestroy {
  _host_: MapComponent;

  constructor(@Host() map: MapComponent) {
    // console.log('instancing aol-control-rotate');
    super();
    this._host_ = map;
    map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-rotate');
    this._host_.instance.removeControl(this);
  }
}

@Component({
  selector: 'aol-control-scaleline',
  template: `<ng-content></ng-content>`
})
export class ControlScaleLineComponent extends control.ScaleLine implements OnDestroy {
  _host_: MapComponent;

  constructor(@Host() map: MapComponent) {
    // console.log('instancing aol-control-scaleline');
    super();
    this._host_ = map;
    map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-scaleline');
    this._host_.instance.removeControl(this);
  }
}

@Component({
  selector: 'aol-control-zoom',
  template: `<ng-content></ng-content>`
})
export class ControlZoomComponent extends control.Zoom implements OnDestroy {
  _host_: MapComponent;

  constructor(@Host() map: MapComponent) {
    // console.log('instancing aol-control-zoom');
    super();
    this._host_ = map;
    map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-zoom');
    this._host_.instance.removeControl(this);
  }
}

@Component({
  selector: 'aol-control-zoomslider',
  template: `<ng-content></ng-content>`
})
export class ControlZoomSliderComponent extends control.ZoomSlider implements OnDestroy {
  _host_: MapComponent;

  constructor(@Host() map: MapComponent) {
    // console.log('instancing aol-control-zoomslider');
    super();
    this._host_ = map;
    map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-zoomslider');
    this._host_.instance.removeControl(this);
  }
}

@Component({
  selector: 'aol-control-zoomtoextent',
  template: `<ng-content></ng-content>`
})
export class ControlZoomToExtentComponent extends control.ZoomToExtent implements OnDestroy {
  _host_: MapComponent;

  constructor(@Host() map: MapComponent) {
    // console.log('instancing aol-control-zoomtoextent');
    super();
    this._host_ = map;
    map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-zoomtoextent');
    this._host_.instance.removeControl(this);
  }
}
