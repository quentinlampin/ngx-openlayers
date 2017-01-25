import { Component, Host, AfterViewInit, OnChanges, OnDestroy, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { geom, Overlay, MapBrowserEvent } from 'openlayers';
import { Subscription } from 'rxjs';
import { MapComponent } from './map.component';
import { FeatureComponent } from './feature.component';

@Component({
  selector: 'aol-popup',
  template: `
    <div class="ol-popup" #aolPopup [style.display]="display">
      <a class="ol-popup-closer" (click)="display = 'none'"></a>
      <ng-content class="ol-popup-content"></ng-content>
    </div>
  `,
  styles: [`
      .ol-popup {
          position: absolute;
          background-color: white;
          padding: 15px 25px 15px 15px;
          border: 1px solid #cccccc;
          bottom: 12px;
          left: -50px;
      }

      .ol-popup:after, .ol-popup:before {
          top: 100%;
          border: solid transparent;
          content: " ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
      }

      .ol-popup:after {
          border-top-color: white;
          border-width: 10px;
          left: 48px;
          margin-left: -10px;
      }

      .ol-popup:before {
          border-top-color: #cccccc;
          border-width: 11px;
          left: 48px;
          margin-left: -11px;
      }

      .ol-popup-content {
          min-width: 170px;
          max-height: 200px;
          overflow-x: auto;
      }

      .ol-popup-closer {
          position: absolute;
          top: 2px;
          right: 2px;
          font-size: 150%;
          padding: 0 4px;
          color: gray;
          text-decoration: none;
      }

      .ol-popup-closer:after {
          content: "✖";
      }

      .ol-popup div.infoResult {
          min-width: 130px;
      }

      .ol-popup div.infoResult p {
          padding: 0.1em;
          margin: 0;
      }

      .ol-popup-content h3 {
          margin: 0.25em 0;
      }

      .ol-popup.marker {
          margin-bottom: 30px;
      }
    `]
})
export class PopupComponent implements AfterViewInit, OnChanges, OnDestroy {
  private options: {};
  private display: string;
  public instance: Overlay;
  private map: MapComponent;
  private feature: FeatureComponent;
  private mapClick$: Subscription;
  private defaultCoords: [number, number];

  @ViewChild('aolPopup') popupElement: ElementRef;

  @Input() show: boolean = false;
  @Output() showChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    @Host() private mapHost: MapComponent,
    @Host() private featureHost: FeatureComponent
  ) {
    this.map = mapHost;
    this.feature = featureHost;
    this.display = 'none';
  }

  ngAfterViewInit() {
    this.mapClick$ = this.mapHost.onSingleClick.subscribe((event: MapBrowserEvent) => {
      let feature = this.mapHost.instance.forEachFeatureAtPixel(event.pixel,
        function(feat) {
          return feat;
        });
      if (feature && this.feature.instance === feature) {
        this.open(event.coordinate);
      } else {
        this.close();
      }
    });

    this.options = {
      autoPan: true,
      autoPanAnimation: { duration: 250 },
      element: this.popupElement.nativeElement
    };
    this.instance = new Overlay(this.options);
    this.instance.setPosition([5, 45]);
    this.map.instance.addOverlay(this.instance);

    let temp = this.feature.instance.getGeometry().getExtent();
    this.defaultCoords = [temp[0] + (temp[2] - temp[0]) / 2, temp[1] + (temp[3] - temp[1]) / 2];
  }

  ngOnChanges() {
    if (this.show) {
      this.open();
    } else {
      this.close();
    }
  }

  ngOnDestroy() {
    this.mapClick$.unsubscribe();
  }

  private open(coords?: [number, number]) {
    coords = coords || this.defaultCoords;
    this.display = 'block';
    this.show = true;
    this.showChange.emit(this.show);
    this.instance.setPosition(coords);
  }

  private close() {
    this.display = 'none';
    this.show = false;
    this.showChange.emit(this.show);
  }
}
