import { Component, Host, OnDestroy, Optional, OnInit, OnChanges, Input } from '@angular/core';
import { proj, Coordinate } from 'openlayers';
import { MapComponent } from "./map.component";
import {GeometryPointComponent, GeometryLinestringComponent, GeometryPolygonComponent} from "./geometry.components";
import {ViewComponent} from "./view.component";

@Component({
  selector: 'aol-coordinate',
  template: `<div class="aol-coordinate"></div>`
})
export class CoordinateComponent implements OnChanges, OnDestroy {
  private host: any;
  private map: MapComponent;

  @Input('x') x: number;
  @Input('y') y: number;
  @Input('srid') srid: string;

  constructor(
    @Host() map: MapComponent,
    @Optional() viewHost: ViewComponent,
    @Optional() geometryPointHost: GeometryPointComponent){

    // console.log('instancing aol-coordinate');

    this.map = map;
    this.srid = this.srid ? this.srid : 'EPSG:3857';

    if(geometryPointHost !== null){
      this.host = geometryPointHost;
    }else if (viewHost !== null){
      this.host = viewHost;
    }
  }

  ngOnChanges(){
    let referenceProjection: proj.Projection;
    let referenceProjectionCode: string;
    let transformedCoordinates: number[];

    referenceProjection = this.map.instance.getView().getProjection();
    referenceProjectionCode = referenceProjection ? referenceProjection.getCode() : 'EPSG:3857';

    if(this.srid == referenceProjectionCode){
      transformedCoordinates = [this.x, this.y];
    }else{
      transformedCoordinates = proj.transform([this.x, this.y], this.srid, referenceProjectionCode);
    }

    switch(this.host.componentType){
      case 'geometry-point':
        this.host.instance.setCoordinates(transformedCoordinates);
        break;
      case 'view':
        this.host.instance.setCenter(transformedCoordinates);
        break;
    }
  }
  ngOnDestroy(){}
}
@Component({
  selector: 'aol-collection-coordinates',
  template: `<div class="aol-collection-coordinates"></div>`
})
export class CollectionCoordinatesComponent implements OnChanges, OnDestroy {
  private host: any;
  private map: MapComponent;

  @Input('coordinates') coordinates: [number, number][];
  @Input('srid') srid: string;

  constructor(@Host() map: MapComponent, 
              @Optional() geometryLinestring: GeometryLinestringComponent,
              @Optional() geometryPolygon: GeometryPolygonComponent){

    // console.log('creating aol-collection-coordinates');
    this.map = map;
    this.srid = this.srid ? this.srid : 'EPSG:3857'; 

    if (!!geometryLinestring) {
      this.host = geometryLinestring;
    } else if (!!geometryPolygon) {
      this.host = geometryPolygon;
    }else {
      throw new Error('aol-collection-coordinates must be a child of a geometry component');
    }
  }

  ngOnChanges(){
    let referenceProjection: proj.Projection;
    let referenceProjectionCode: string;
    let transformedCoordinates: Array<Coordinate>;

    // console.log('coordinates change: ', this.coordinates);

    referenceProjection = this.map.instance.getView().getProjection();
    referenceProjectionCode = referenceProjection ? referenceProjection.getCode() : 'EPSG:3857';

    if(this.srid == referenceProjectionCode){
      transformedCoordinates = this.coordinates;
    }else{
      transformedCoordinates = new Array<Coordinate>();
      this.coordinates.forEach( function (coordinate: Coordinate) {
        transformedCoordinates.push(proj.transform(coordinate, this.srid, referenceProjectionCode));
      }.bind(this));
    }
    switch(this.host.componentType){
      case 'geometry-linestring':
        this.host.instance.setCoordinates(transformedCoordinates);
        break;
      case 'geometry-polygon':
        this.host.instance.setCoordinates([transformedCoordinates]);
        break;
      default:
        throw new Error('aol-collection-coordinates\' host is of unknown type: ' + this.host.componentType);
        // break;
    }
  }
  ngOnDestroy(){}
}
