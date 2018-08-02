import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MapComponent } from 'ngx-openlayers';

@Component({
  selector: 'app-swipe',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>

      <aol-view #view [zoom]="5">
        <aol-coordinate [x]="2.181539" [y]="47.125488" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1">
        <aol-source-osm></aol-source-osm>
      </aol-layer-tile>

      <aol-layer-tile [precompose]="precomposeFunction" [postcompose]="postcomposeFunction">
        <aol-source-xyz
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}">
        </aol-source-xyz>
      </aol-layer-tile>

    </aol-map>
    <button
      class="swipe-button"
      [style.marginLeft.px]="swipeOffsetToCenter"
      (panstart)="onPanStart()"
      (panmove)="onPan($event)"
    >
      <>
    </button>
  `,
  styles: [
    `
      .swipe-button {
        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14),
          0 1px 18px 0 rgba(0, 0, 0, 0.12);
        background-color: #0a2340;
        color: white;
        cursor: pointer;
        left: calc(50% - 27px);
        position: absolute;
        top: 60%;
        box-sizing: border-box;
        border: none;
        display: inline-block;
        white-space: nowrap;
        text-decoration: none;
        vertical-align: baseline;
        text-align: center;
        margin: 0;
        line-height: 36px;
        border-radius: 2px;
        min-width: 0;
        width: 40px;
        height: 40px;
      }
    `,
  ],
})
export class SwipeComponent implements OnInit {
  constructor() {}

  @ViewChild('map')
  map: MapComponent;

  public precomposeFunction: (event) => void;
  public postcomposeFunction: (event) => void;

  swipeValue = 50;
  swipeOffsetToCenter = 0;
  positionPx = 0;
  startX = 0;

  paddingSize = 16;

  ngOnInit() {
    this.precomposeFunction = this.precompose();
    this.postcomposeFunction = this.postcompose();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    this.resetSwipeValues();
  }

  precompose() {
    return event => {
      const ctx = event.context;
      const width = ctx.canvas.width * (this.swipeValue / 100);

      ctx.save();
      ctx.beginPath();
      ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
      ctx.clip();
    };
  }

  postcompose() {
    return event => {
      const ctx = event.context;
      ctx.restore();
    };
  }

  resetSwipeValues() {
    this.startX = 0;
    this.swipeOffsetToCenter = 0;
    this.swipeValue = 50;
    this.positionPx = 0;
  }

  onPanStart(): void {
    this.startX = this.swipeOffsetToCenter;
  }

  onPan(event: any): void {
    event.preventDefault();
    const swipePercentageMax = 98;
    const swipePercentageMin = 2;
    const maxPercentage = 0.48;

    this.swipeOffsetToCenter = this.startX + event.deltaX;
    const screenSizePx = event.srcEvent.view.innerWidth - this.paddingSize;
    this.positionPx = screenSizePx / 2 + this.swipeOffsetToCenter;
    this.swipeValue = (this.positionPx / screenSizePx) * 100;

    const isDraggingButtonOutsideOnRight = this.swipeOffsetToCenter > maxPercentage * screenSizePx;
    const isDraggingButtonOutsideOnLeft = this.swipeOffsetToCenter < -maxPercentage * screenSizePx;
    if (isDraggingButtonOutsideOnRight) {
      this.swipeOffsetToCenter = maxPercentage * screenSizePx;
      this.swipeValue = swipePercentageMax;
    }
    if (isDraggingButtonOutsideOnLeft) {
      this.swipeOffsetToCenter = -maxPercentage * screenSizePx;
      this.swipeValue = swipePercentageMin;
    }
    this.map.instance.render();
  }
}
