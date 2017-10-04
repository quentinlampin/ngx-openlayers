import {Component, ContentChild, forwardRef, Host, Input} from '@angular/core';
import {ImageTile, ProjectionLike, source, Tile, TileCoord, tilegrid, TileLoadFunctionType} from 'openlayers';
import {LayerTileComponent} from '../layers';
import {SourceComponent} from './source.component';
import {TileGridWMTSComponent} from '../tilegridwmts.component';

@Component({
    selector: 'aol-source-tilewmts',
    template: `<ng-content></ng-content>`,
    providers: [
        { provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent) }
    ]
})
export class SourceTileWMTSComponent extends SourceComponent {

    instance: source.WMTS;
    @Input() cacheSize?: number;
    @Input() crossOrigin?: (string);
    @Input() logo?: (string | olx.LogoOptions);
    @Input() tileGrid: tilegrid.WMTS;
    @Input() projection: ProjectionLike;
    @Input() reprojectionErrorThreshold?: number;
    @Input() requestEncoding?: (source.WMTSRequestEncoding | string);
    @Input() layer: string;
    @Input() style: string;
    @Input() tileClass?: ((n: ImageTile, coords: TileCoord, state: Tile.State, s1: string, s2: string, type: TileLoadFunctionType) => any);
    @Input() tilePixelRatio?: number;
    @Input() version?: string;
    @Input() format?: string;
    @Input() matrixSet: string;
    @Input() dimensions?: GlobalObject;
    @Input() url?: string;
    @Input() tileLoadFunction?: TileLoadFunctionType;
    @Input() urls?: string[];
    @Input() wrapX?: boolean;

    @ContentChild(TileGridWMTSComponent) tileGridWMTS: TileGridWMTSComponent;

    constructor( @Host() layer: LayerTileComponent) {
        super(layer);
    }
}
