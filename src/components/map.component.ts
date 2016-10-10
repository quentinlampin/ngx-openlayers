import { Component, ElementRef } from '@angular/core';
import { Map } from 'openlayers';

@Component({
  selector: 'aol-map',
  template: `<div class='fill'></div><ng-content></ng-content>`,
  styles: ['.fill { height:100%; width: 100% }']
})
export class MapComponent extends Map {
  _host_: ElementRef;
  
  constructor(element: ElementRef){
    super({target: null});
    this._host_ = element;
    setTimeout( ()=>this.onFirstDigest() );
  }

  onFirstDigest(){
  	this.setTarget(this._host_.nativeElement.firstElementChild);
  	this.updateSize();
  }
}
