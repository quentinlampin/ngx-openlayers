# Map Component 

The `MapComponent`(`aol-map`) is the root component of Angular2 Openlayers maps.

Available parameters are:

    - `width` (`string|undefined`): width of the enclosing `<div>`
    - `height` (`string|undefined`): height of the enclosing `<div>`
    - `pixelRatio` (`number|undefined`): physical pixels to device-independent pixels (dips) ratio. Defaults to window.devicePixelRatio.
    - `keyboardEventTarget` (`Element|string|undefined`): element to listen to keyboard events on. Defaults to enclosing `<div>`
    - `loadTilesWhileAnimating` (`boolean|undefined`): tiles loading policy while animating. Defaults to `false`.
    - `loadTilesWhileInteracting` (`boolean|undefined`): tiles loading policy while interacting. Defaults to `false`.
    -  `logo` (`string|boolean|undefined`): overlayed map logo. Provide `true` to display the Openlayers logo or a string URL.  Defaults to `undefined`.
    -  `renderer` (`'canvas'|'webgl'|undefined`): map renderer. Defaults to canvas.

Exposed events are:

    - `click` (ol.MapBrowserEvent) - A click with no dragging. A double click will fire two of this.
    - `dblclick` (ol.MapBrowserEvent) - A true double click, with no dragging.
    - `moveend` (ol.MapEvent) - Triggered after the map is moved.
    - `pointerdrag` (ol.MapBrowserEvent) experimental - Triggered when a pointer is dragged.
    - `pointermove` (ol.MapBrowserEvent) - Triggered when a pointer is moved. Note that on touch devices this is triggered when the map is panned, so is not the same as mousemove.
    - `postcompose` (ol.render.Event) experimental
    - `postrender` (ol.MapEvent) experimental - Triggered after a map frame is rendered.
    - `precompose` (ol.render.Event) experimental
    - `propertychange` (ol.Object.Event) - Triggered when a property is changed.
    - `singleclick` (ol.MapBrowserEvent) - A true single click with no dragging and no double click. Note that this event is delayed by 250 ms to ensure that it is not a double click.

## Important note
A map component without a view won't fetch tiles, _i.e.__ it stays blank, provide an `<aol-view>` component to display
the map. Here is a simple example, based on OpenStreetMap tiles source:
 ```
<aol-map [width]="'500px'" [height]="'300'">
    <aol-view [zoom]="2">
        <aol-coordinate [x]="5.795122" [y]="45.210225" [srid]="'EPSG:4326'"></aol-coordinate>
    </aol-view>
    <aol-layer-tile>
        <aol-source-osm></aol-source-osm>
    </aol-layer-tile>
</aol-map>
 ```
 
