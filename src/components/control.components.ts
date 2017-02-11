import { Component, ElementRef, Host, Input, OnDestroy, OnInit } from '@angular/core';
import { control, CoordinateFormatType, ProjectionLike } from 'openlayers';
import { MapComponent } from './map.component';

@Component({
  selector: 'aol-control-attribution',
  template: ``
})
export class ControlAttributionComponent implements OnInit, OnDestroy {
  public componentType: string = 'control';
  instance: control.Attribution;
  target: Element;
  @Input() collapsible: boolean;

  constructor(
    @Host() private map: MapComponent,
    private element: ElementRef
  ) {
  }

  ngOnInit() {
    this.target = this.element.nativeElement;
    // console.log('ol.control.Attribution init: ', this);
    this.instance = new control.Attribution(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-attribution');
    this.map.instance.removeControl(this.instance);
  }
}


@Component({
  selector: 'aol-control-fullscreen',
  template: `<ng-content></ng-content>`
})
export class ControlFullScreenComponent extends control.FullScreen implements OnInit, OnDestroy {

  constructor(@Host() private map: MapComponent) {
    // console.log('instancing aol-control-fullscreen');
    super();
  }

  ngOnInit() {
    this.map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-fullscreen');
    this.map.instance.removeControl(this);
  }
}

@Component({
  selector: 'aol-control-mouseposition',
  template: ``
})
export class ControlMousePositionComponent implements OnInit, OnDestroy {
  instance: control.MousePosition;
  @Input() coordinateFormat: CoordinateFormatType;
  @Input() projection: ProjectionLike;
  target: Element;

  constructor(
    @Host() private map: MapComponent,
    private element: ElementRef
  ) {
  }

  ngOnInit() {
    this.target = this.element.nativeElement;
    // console.log('ol.control.MousePosition init: ', this);
    this.instance = new control.MousePosition(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-mouseposition');
    this.map.instance.removeControl(this.instance);
  }
}

@Component({
  selector: 'aol-control-overviewmap',
  template: `<ng-content></ng-content>`
})
export class ControlOverviewMapComponent extends control.OverviewMap implements OnInit, OnDestroy {

  constructor(@Host() private map: MapComponent) {
    // console.log('instancing aol-control-overviewmap');
    super();
  }

  ngOnInit() {
    this.map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-overviewmap');
    this.map.instance.removeControl(this);
  }
}

@Component({
  selector: 'aol-control-rotate',
  template: `<ng-content></ng-content>`
})
export class ControlRotateComponent extends control.Rotate implements OnInit, OnDestroy {

  constructor(@Host() private map: MapComponent) {
    // console.log('instancing aol-control-rotate');
    super();
  }

  ngOnInit() {
    this.map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-rotate');
    this.map.instance.removeControl(this);
  }
}

@Component({
  selector: 'aol-control-scaleline',
  template: `<ng-content></ng-content>`
})
export class ControlScaleLineComponent extends control.ScaleLine implements OnInit, OnDestroy {

  constructor(@Host() private map: MapComponent) {
    // console.log('instancing aol-control-scaleline');
    super();
  }

  ngOnInit() {
    this.map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-scaleline');
    this.map.instance.removeControl(this);
  }
}

@Component({
  selector: 'aol-control-zoom',
  template: `<ng-content></ng-content>`
})
export class ControlZoomComponent extends control.Zoom implements OnInit, OnDestroy {

  constructor(@Host() private map: MapComponent) {
    // console.log('instancing aol-control-zoom');
    super();
  }

  ngOnInit() {
    this.map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-zoom');
    this.map.instance.removeControl(this);
  }
}

@Component({
  selector: 'aol-control-zoomslider',
  template: `<ng-content></ng-content>`
})
export class ControlZoomSliderComponent extends control.ZoomSlider implements OnInit, OnDestroy {

  constructor(@Host() private map: MapComponent) {
    // console.log('instancing aol-control-zoomslider');
    super();
  }

  ngOnInit() {
    this.map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-zoomslider');
    this.map.instance.removeControl(this);
  }
}

@Component({
  selector: 'aol-control-zoomtoextent',
  template: `<ng-content></ng-content>`
})
export class ControlZoomToExtentComponent extends control.ZoomToExtent implements OnInit, OnDestroy {

  constructor(@Host() private map: MapComponent) {
    // console.log('instancing aol-control-zoomtoextent');
    super();
  }

  ngOnInit() {
    this.map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-zoomtoextent');
    this.map.instance.removeControl(this);
  }
}
