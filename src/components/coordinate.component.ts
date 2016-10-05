import { Component, Host, OnDestroy, Optional, OnChanges, Input } from '@angular/core';
import { proj, Coordinate } from 'openlayers';
import { MapComponent } from "./map.component";
import {GeometryPointComponent, GeometryLinestringComponent} from "./geometry.components";
import {ViewComponent} from "./view.component";

@Component({
  selector: 'aol-coordinate',
  template: `<div class="aol-coordinate"></div>`
})
export class CoordinateComponent implements OnChanges, OnDestroy {
  _host_: any;
  _hostType_: "ViewComponent"|"GeometryPointComponent";
  _map_: MapComponent;
  
  @Input('x') x: number;
  @Input('y') y: number;
  @Input('srid') srid: string;
  
  constructor(
    @Host() map: MapComponent,
    @Optional() viewHost: ViewComponent,
    @Optional() geometryPointHost: GeometryPointComponent){
    
    console.log('instancing aol-coordinate');
    
    this._map_ = map;
    this.srid = this.srid ? this.srid : 'EPSG:3857';
    
    if(geometryPointHost !== null){
      this._host_ = geometryPointHost;
      this._hostType_ = 'GeometryPointComponent';
    }else if (viewHost !== null){
      this._host_ = viewHost;
      this._hostType_ = 'ViewComponent';
    }
  }
  
  ngOnChanges(){
    let referenceProjection: proj.Projection;
    let referenceProjectionCode: string;
    let transformedCoordinates: Array<number>;
    
    referenceProjection = this._map_.getView().getProjection();
    referenceProjectionCode = referenceProjection ? referenceProjection.getCode() : 'EPSG:3857';
    
    if(this.srid == referenceProjectionCode){
      transformedCoordinates = [this.x, this.y];
    }else{
      transformedCoordinates = proj.transform([this.x, this.y], this.srid, referenceProjectionCode);
    }
    
    switch(this._hostType_){
      case 'GeometryPointComponent':
        this._host_.setCoordinates(transformedCoordinates);
        break;
      case 'ViewComponent':
        this._host_.setCenter(transformedCoordinates);
        break;
    }
  }
  ngOnDestroy(){
    // switch(this._hostType_){
    //   case 'GeometryPointComponent':
    //     this._host_.setCoordinates(null);
    //     break;
    //   case 'ViewComponent':
    //     this._host_.setCenter(null);
    //     break;
    // }
  }
}
@Component({
  selector: 'aol-collection-coordinates',
  template: `<div class="aol-collection-coordinates"></div>`
})
export class CollectionCoordinatesComponent implements OnChanges, OnDestroy {
  _host_: any;
  _hostType_: "GeometryLinestringComponent";
  _map_: MapComponent;
  
  @Input('coordinates') coordinates: Array<Array<number>>;
  @Input('srid') srid: string;
  
  constructor(@Host() map: MapComponent, @Host() geometryLinestring: GeometryLinestringComponent){
    
    console.log('instancing aol-collection-coordinates');
    this._map_ = map;
    this.srid = this.srid ? this.srid : 'EPSG:3857';
    
    if(geometryLinestring !== null){
      this._host_ = geometryLinestring;
      this._hostType_ = 'GeometryLinestringComponent';
    }
  }
  
  ngOnChanges(){
    let referenceProjection: proj.Projection;
    let referenceProjectionCode: string;
    let transformedCoordinates: Array<Coordinate>;
    
    referenceProjection = this._map_.getView().getProjection();
    referenceProjectionCode = referenceProjection ? referenceProjection.getCode() : 'EPSG:3857';
    
    if(this.srid == referenceProjectionCode){
      transformedCoordinates = this.coordinates;
    }else{
      transformedCoordinates = new Array<Coordinate>();
      this.coordinates.forEach( function (coordinate: Coordinate) {
        transformedCoordinates.push(proj.transform(coordinate, this.srid, referenceProjectionCode));
      }.bind(this));
    }
    switch(this._hostType_){
      case 'GeometryLinestringComponent':
        this._host_.setCoordinates(transformedCoordinates);
        break;
    }
  }
  ngOnDestroy(){
    // switch(this._hostType_){
    //   case 'GeometryLinestringComponent':
    //     this._host_.setCoordinates(null);
    //     break;
    // }
  }
}