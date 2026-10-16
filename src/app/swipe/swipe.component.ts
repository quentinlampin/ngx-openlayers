import { Component, HostListener, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import {
  CoordinateComponent,
  DefaultInteractionComponent,
  LayerTileComponent,
  MapComponent,
  SourceOsmComponent,
  SourceXYZComponent,
  ViewComponent,
} from 'ngx-openlayers';

@Component({
  selector: 'app-swipe',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>

      <aol-view #view [zoom]="5">
        <aol-coordinate [x]="2.181539" [y]="47.125488" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>

      <aol-layer-tile [prerender]="prerenderFunction" [postrender]="postrenderFunction">
        <aol-source-xyz
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        >
        </aol-source-xyz>
      </aol-layer-tile>
    </aol-map>
    <button
      type="button"
      class="swipe-button"
      aria-label="Drag to compare map layers"
      [style.marginLeft.px]="swipeOffsetToCenter"
      (pointerdown)="onPanStart($event)"
      (pointermove)="onPan($event)"
      (pointerup)="onPanEnd()"
      (pointercancel)="onPanEnd()"
    >
      <span aria-hidden="true">&lt;&gt;</span>
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
        text-decoration: none;
        vertical-align: baseline;
        text-align: center;
        margin: 0;
        line-height: 36px;
        border-radius: 2px;
        min-width: 0;
        width: 40px;
        height: 40px;
        touch-action: none;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MapComponent,
    DefaultInteractionComponent,
    ViewComponent,
    CoordinateComponent,
    LayerTileComponent,
    SourceOsmComponent,
    SourceXYZComponent,
  ],
})
export class SwipeComponent implements OnInit {
  @ViewChild('map', { static: true })
  map: MapComponent;

  public prerenderFunction: (event) => void;
  public postrenderFunction: (event) => void;

  swipeValue = 50;
  swipeOffsetToCenter = 0;
  positionPx = 0;
  startX = 0;
  pointerStartX = 0;
  isPanning = false;

  paddingSize = 16;

  @HostListener('window:resize')
  onWindowResize(): void {
    this.resetSwipeValues();
  }

  ngOnInit(): void {
    this.prerenderFunction = this.prerender();
    this.postrenderFunction = this.postrender();
  }

  prerender(): (event) => void {
    return (event) => {
      const ctx = event.context;
      const width = ctx.canvas.width * (this.swipeValue / 100);

      ctx.save();
      ctx.beginPath();
      ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
      ctx.clip();
    };
  }

  postrender(): (event) => void {
    return (event) => {
      const ctx = event.context;
      ctx.restore();
    };
  }

  resetSwipeValues(): void {
    this.startX = 0;
    this.swipeOffsetToCenter = 0;
    this.swipeValue = 50;
    this.positionPx = 0;
  }

  onPanStart(event: PointerEvent): void {
    if (event.button !== 0) {
      return;
    }
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    this.isPanning = true;
    this.pointerStartX = event.clientX;
    this.startX = this.swipeOffsetToCenter;
  }

  onPanEnd(): void {
    this.isPanning = false;
  }

  onPan(event: PointerEvent): void {
    if (!this.isPanning) {
      return;
    }
    event.preventDefault();
    const swipePercentageMax = 98;
    const swipePercentageMin = 2;
    const maxPercentage = 0.48;

    this.swipeOffsetToCenter = this.startX + event.clientX - this.pointerStartX;
    const screenSizePx = window.innerWidth - this.paddingSize;
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
