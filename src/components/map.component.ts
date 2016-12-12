import { Component, ElementRef } from '@angular/core';
import { Map } from 'openlayers';

@Component({
  selector: 'aol-map',
  template: `<div class='fill'></div><ng-content></ng-content>`,
  styles: ['.fill { height:100%; width: 100% }']
})
export class MapComponent{
  private _host_: ElementRef;

  public instance: Map;
  public options: any;

  constructor(element: ElementRef){
    this.options = {
      target: null,
      controls: []
    };
    this.instance = new Map(this.options);
    this._host_ = element;
  }

  ngOnInit(){
  	this.instance.setTarget(this._host_.nativeElement.firstElementChild);
  	this.instance.updateSize();
  }
}
