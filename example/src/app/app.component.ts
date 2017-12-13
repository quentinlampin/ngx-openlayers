import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {olcs} from 'ol-cesium';
import {MapComponent} from 'ngx-openlayers';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
    @ViewChild(MapComponent) map: MapComponent;
    public zoom = 15;
    public opacity = 1.0;
    public width = 5;
    public globe3dEnabled = false;
    globe3d: any;

    ngAfterViewInit() {
        this.globe3d = new olcs.OLCesium({map: this.map.instance});
        this.globe3d.setEnabled(this.globe3dEnabled);
    }

    increaseZoom() {
        this.zoom  = Math.min(this.zoom + 1, 18);
        console.log('zoom: ', this.zoom);
    }

    decreaseZoom() {
        this.zoom  = Math.max(this.zoom - 1, 1);
        console.log('zoom: ', this.zoom);
    }

    increaseOpacity() {
        this.opacity  = Math.min(this.opacity + 0.1, 1);
        console.log('opacity: ', this.opacity);
    }

    decreaseOpacity() {
        this.opacity  = Math.max(this.opacity - 0.1, 0);
        console.log('opacity: ', this.opacity);
    }

    switch3dMode() {
        this.globe3dEnabled = !this.globe3dEnabled;
        this.globe3d.setEnabled(this.globe3dEnabled);
    }
}
