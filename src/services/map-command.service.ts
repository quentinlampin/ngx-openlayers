// Service that exposes map commands to container components
// See https://angular.io/docs/ts/latest/cookbook/component-communication.html#bidirectional-service

import { Injectable } from '@angular/core';
import { Extent, Map, Pixel, Coordinate, extent } from 'openlayers';

@Injectable()
export class MapCommandService {
    // We don't want to compromise the MVC design of Angular 2, but
    // with OpenLayers there will always be times when the application
    // needs to interact directly with the map. For these limited
    // cases this service can be used.

    private map: Map;

    registerMap(map: Map) {
        this.map = map;
    }

    getCoordinateFromPixel = (pixel: Pixel) => this.map.getCoordinateFromPixel(pixel);
    getPixelFromCoordinate = (coordinate: Coordinate) => this.map.getPixelFromCoordinate(coordinate);

    zoomToExtent(zoomExtent: Extent) {
        let isSinglePoint = zoomExtent[0] === zoomExtent[2] && zoomExtent[1] === zoomExtent[3];
        if (isSinglePoint) {
            zoomExtent = extent.buffer(zoomExtent, 200); // use a 200m buffer when zooming to a single point
        }
        this.map.getView().fit(zoomExtent, this.map.getSize());
    }

    zoomToLayerExtent(layerName: string) {
        this.map.getLayers().forEach((layer: any) => {
            if (layer.getSource && layer.get('name') === layerName) {
                let zoomExtent = layer.getSource().getExtent();
                this.zoomToExtent(zoomExtent);
            }
        });
    }
}
