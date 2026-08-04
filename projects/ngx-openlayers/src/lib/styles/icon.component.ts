import { Component, effect, inject, input, OnInit } from '@angular/core';

import { Color } from 'ol/color';
import { Size } from 'ol/size';
import { Icon } from 'ol/style';

import { StyleComponent } from './style.component';

type IconAnchorUnits = 'fraction' | 'pixels';
type IconOrigin = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

@Component({
  selector: 'aol-style-icon',
  standalone: true,
  template: `<div class="aol-style-icon"></div>`,
})
export class StyleIconComponent implements OnInit {
  private readonly host = inject(StyleComponent);

  readonly anchor = input<[number, number]>();
  readonly anchorXUnits = input<IconAnchorUnits>();
  readonly anchorYUnits = input<IconAnchorUnits>();
  readonly anchorOrigin = input<IconOrigin>();
  readonly color = input<Color>();
  readonly crossOrigin = input<string>();
  readonly img = input<HTMLImageElement | HTMLCanvasElement>();
  readonly offset = input<[number, number]>();
  readonly offsetOrigin = input<IconOrigin>();
  readonly opacity = input<number>(1);
  readonly scale = input<number>(1);
  readonly rotateWithView = input(false);
  readonly rotation = input(0);
  readonly size = input<Size>();
  readonly src = input<string>();

  instance?: Icon;

  // Guards the "recreate" effect below: its dependencies must still be
  // read on the very first (pre-ngOnInit) effect flush so they're tracked,
  // but the actual recreate must be skipped until ngOnInit has produced
  // the first Icon from properly-bound input values.
  private created = false;

  constructor() {
    // Signal inputs are not yet bound to their template values during
    // construction (Angular applies bindings after the constructor runs),
    // so building the Icon here would use only defaults/undefined -- e.g.
    // an undefined `src`, which OL rejects immediately. Icon creation is
    // deferred to ngOnInit, after bindings are applied.

    // Mutable properties: guard against running before ngOnInit has
    // created the instance.
    effect(() => {
      const opacity = this.opacity();
      if (this.instance) {
        this.instance.setOpacity(opacity);
        this.host.update();
      }
    });

    effect(() => {
      const rotation = this.rotation();
      if (this.instance) {
        this.instance.setRotation(rotation);
        this.host.update();
      }
    });

    effect(() => {
      const scale = this.scale();
      if (this.instance) {
        this.instance.setScale(scale);
        this.host.update();
      }
    });

    // Constructor-only properties: recreate the Icon whenever any of these
    // change. Skipped until `created` is true so this doesn't attempt a
    // (redundant, and pre-binding invalid) creation before ngOnInit runs.
    effect(() => {
      this.anchor();
      this.anchorXUnits();
      this.anchorYUnits();
      this.anchorOrigin();
      this.color();
      this.crossOrigin();
      this.img();
      this.offset();
      this.offsetOrigin();
      this.size();
      this.src();
      this.rotateWithView();

      if (!this.created) {
        return;
      }

      this.instance = this.createIcon();
      this.host.instance?.setImage(this.instance);
      this.host.update();
    });
  }

  ngOnInit(): void {
    this.instance = this.createIcon();
    this.host.instance?.setImage(this.instance);
    this.created = true;
  }

  private createIcon(): Icon {
    return new Icon({
      anchor: this.anchor(),
      anchorOrigin: this.anchorOrigin(),
      anchorXUnits: this.anchorXUnits(),
      anchorYUnits: this.anchorYUnits(),
      color: this.color(),
      crossOrigin: this.crossOrigin(),
      img: this.img(),
      offset: this.offset(),
      offsetOrigin: this.offsetOrigin(),
      opacity: this.opacity(),
      rotateWithView: this.rotateWithView(),
      rotation: this.rotation(),
      scale: this.scale(),
      size: this.size(),
      src: this.src(),
    });
  }
}
