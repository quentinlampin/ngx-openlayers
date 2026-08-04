import { Component, HostListener, ViewChild } from '@angular/core';

import {
  CoordinateComponent,
  DefaultInteractionComponent,
  LayerTileComponent,
  MapComponent,
  SourceOsmComponent,
  SourceXYZComponent,
  ViewComponent,
} from 'ngx-openlayers';
import RenderEvent from 'ol/render/Event';

@Component({
  selector: 'app-swipe',
  standalone: true,
  imports: [
    MapComponent,
    DefaultInteractionComponent,
    ViewComponent,
    CoordinateComponent,
    LayerTileComponent,
    SourceOsmComponent,
    SourceXYZComponent,
  ],
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>

      <aol-view #view [zoom]="5">
        <aol-coordinate [x]="2.181539" [y]="47.125488" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1">
        <aol-source-osm></aol-source-osm>
      </aol-layer-tile>

      <aol-layer-tile [prerender]="prerenderFunction" [postrender]="postrenderFunction">
        <aol-source-xyz
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        >
        </aol-source-xyz>
      </aol-layer-tile>
    </aol-map>

    <button
      class="swipe-button"
      [style.marginLeft.px]="swipeOffsetToCenter"
      (pointerdown)="onPointerDown($event)"
      (pointermove)="onPointerMove($event)"
      (pointerup)="onPointerUp()"
      (pointercancel)="onPointerUp()"
    >
      <>
    </button>
  `,
  styles: [
    `
      .swipe-button {
        box-shadow:
          0 3px 5px -1px rgba(0, 0, 0, 0.2),
          0 6px 10px 0 rgba(0, 0, 0, 0.14),
          0 1px 18px 0 rgba(0, 0, 0, 0.12);
        background-color: #0a2340;
        color: white;
        cursor: pointer;
        left: calc(50% - 20px);
        position: absolute;
        top: 60%;
        box-sizing: border-box;
        border: none;
        display: inline-block;
        white-space: nowrap;
        text-align: center;
        margin: 0;
        line-height: 36px;
        border-radius: 2px;
        width: 40px;
        height: 40px;
        touch-action: none;
      }
    `,
  ],
})
export class SwipeComponent {
  @ViewChild('map', { static: true })
  map!: MapComponent;

  prerenderFunction = (event: RenderEvent): void => {
    const ctx = event.context as CanvasRenderingContext2D;

    const width = ctx.canvas.width * (this.swipeValue / 100);

    ctx.save();
    ctx.beginPath();
    ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
    ctx.clip();
  };

  postrenderFunction = (event: RenderEvent): void => {
    (event.context as CanvasRenderingContext2D).restore();
  };

  swipeValue = 50;
  swipeOffsetToCenter = 0;
  positionPx = 0;

  private startX = 0;
  private startPointerX = 0;
  private dragging = false;

  paddingSize = 16;

  @HostListener('window:resize')
  onWindowResize(): void {
    this.resetSwipeValues();
  }

  resetSwipeValues(): void {
    this.startX = 0;
    this.swipeOffsetToCenter = 0;
    this.swipeValue = 50;
    this.positionPx = 0;
  }

  onPointerDown(event: PointerEvent): void {
    this.dragging = true;

    this.startX = this.swipeOffsetToCenter;
    this.startPointerX = event.clientX;

    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  }

  onPointerMove(event: PointerEvent): void {
    if (!this.dragging) {
      return;
    }

    const deltaX = event.clientX - this.startPointerX;

    this.swipeOffsetToCenter = this.startX + deltaX;

    const swipePercentageMax = 98;
    const swipePercentageMin = 2;
    const maxPercentage = 0.48;

    const screenSizePx = window.innerWidth - this.paddingSize;

    this.positionPx = screenSizePx / 2 + this.swipeOffsetToCenter;

    this.swipeValue = (this.positionPx / screenSizePx) * 100;

    const outsideRight = this.swipeOffsetToCenter > maxPercentage * screenSizePx;

    const outsideLeft = this.swipeOffsetToCenter < -maxPercentage * screenSizePx;

    if (outsideRight) {
      this.swipeOffsetToCenter = maxPercentage * screenSizePx;

      this.swipeValue = swipePercentageMax;
    }

    if (outsideLeft) {
      this.swipeOffsetToCenter = -maxPercentage * screenSizePx;

      this.swipeValue = swipePercentageMin;
    }

    this.map.instance?.render();
  }

  onPointerUp(): void {
    this.dragging = false;
  }
}
