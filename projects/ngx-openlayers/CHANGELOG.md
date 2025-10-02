# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [19.0.0](https://github.com/quentin-ol/ngx-openlayers/compare/18.0.2...19.0.0) (2025-10-02)


### ⚠ BREAKING CHANGES

* Angular 17 is no more supported

### build

* update to Angular 19 ([83f06f8](https://github.com/quentin-ol/ngx-openlayers/commit/83f06f829672045454cb6c32b3c89e2cebc2a953)), closes [#326](https://github.com/quentin-ol/ngx-openlayers/issues/326)

## [18.0.2](https://github.com/quentin-ol/ngx-openlayers/compare/18.0.1...18.0.2) (2025-06-23)


### Bug Fixes

* **layers:** add missing inputs ([a25a612](https://github.com/quentin-ol/ngx-openlayers/commit/a25a6122ec6eb2a44e5bb3d08ad20989c7991111)), closes [#318](https://github.com/quentin-ol/ngx-openlayers/issues/318)

## [18.0.1](https://github.com/quentin-ol/ngx-openlayers/compare/18.0.0...18.0.1) (2025-06-17)

## [18.0.0](https://github.com/quentin-ol/ngx-openlayers/compare/v0.8.22...v18.0.0) (2025-06-17)


### ⚠ BREAKING CHANGES

* Angular 16 is no more supported
* `ol` peer dep is now `~10.5.0`
* see all breaking changes from `ol` `10.0.0` (https://github.com/openlayers/openlayers/blob/main/changelog/v10.0.0.md)
* `ol` peer dep is now `~9.2.4`
* see all breaking changes from `ol` `9.0.0` (https://github.com/openlayers/openlayers/blob/main/changelog/v9.0.0.md)
* Angular 15 is no more supported
* `ol` peer dep is now `8.2.0`
* see all breaking changes from `ol` `8.0.0` (https://github.com/openlayers/openlayers/blob/main/changelog/upgrade-notes.md#800)
* Angular 14 is no more supported
* `ol` peer dep is now `~7.5.2`
* see all breaking changes from `ol` `7.0.0` (https://github.com/openlayers/openlayers/blob/main/changelog/upgrade-notes.md#700)
* see all breaking changes from `ol` `7.1.0` (https://github.com/openlayers/openlayers/blob/main/changelog/upgrade-notes.md#710)
* see all breaking changes from `ol` `7.2.0` (https://github.com/openlayers/openlayers/blob/main/changelog/upgrade-notes.md#720)
* see all breaking changes from `ol` `7.5.0` (https://github.com/openlayers/openlayers/blob/main/changelog/upgrade-notes.md#750)
* `ol` peer dep is now `~6.15.1`
* `DrawInteractionComponent` : input `type` is now of type `Type`
* `SourceImageWMSComponent` : input `serverType` is now of type `ServerType`
* `OverlayComponent` : input `positioning` is now of type `Positioning`
* `SourceTileWMSComponent` : input `projection` is now of type `ProjectionLike` and input `serverType` is now of type `ServerType`
* `SourceTileWMTSComponent` : input `requestEncoding` is now of type `RequestEncoding`
* all components inputs of type `Element` or `Node` are now of type `HTMLElement`
* all `olChangeActive` and `propertyChange` outputs are now `EventEmitter<ObjectEvent>`
* `FormatMVTComponent` : input `featureClass` is now of type `FeatureClass`
* `DragAndDropInteractionComponent` : input `formatConstructors` is now of type `FeatureFormat[]`
* `LayerComponent` : `prerender` and `postrender` inputs functions should now manage events of type `RenderEvent`
* `SourceImageArcGISRestComponent` : `attributions` input is now of type `AttributionLike`
* `SourceTileWMTSComponent` : `tileGrid` input is now of type `WMTSTileGrid`
* `SourceUTFGridComponent` : `tileJSON` input is now of type `Config`
* `StyleCircleComponent` : `snapToPixel` and `atlasManager` have been removed
* `StyleIconComponent` : `img` input is now of type `HTMLImageElement | HTMLCanvasElement`
* `MapComponent` : `prerender` output has been removed, `precompose` output has been added. `olClick`, `dblClick`, `pointerDrag`, `pointerMove`, `singleClick` outputs are now of type `EventEmitter<MapBrowserEvent<UIEvent>>`
* `ViewComponent` : `changeZoom` output has been removed
* **geom:** The coordinates input on CollectionCoordinatesComponent is not anymore limited to type [number, number][], but it supports all types of coordinates.
   That means the existing code must be updated for polygons:

   Old style:
  ```html
  <aol-feature>
      <aol-geometry-polygon>
          <aol-collection-coordinates
              [coordinates]="[[5, 45],[5.05, 45.05],[5.05, 44.95],[4.95, 44.95]]"
              [srid]="'EPSG:4326'"
          >
          </aol-collection-coordinates>
      </aol-geometry-polygon>
      <aol-style>
          <aol-style-stroke [color]="'red'"></aol-style-stroke>
          <aol-style-fill [color]="[255,0,0,0.5]"></aol-style-fill>
      </aol-style>
  </aol-feature>
  ```
  New style:

   ```html
  <aol-feature>
      <aol-geometry-polygon>
          <aol-collection-coordinates
              [coordinates]="[[[5, 45],[5.05, 45.05],[5.05, 44.95],[4.95, 44.95]]]"
              [srid]="'EPSG:4326'"
          >
          </aol-collection-coordinates>
      </aol-geometry-polygon>
      <aol-style>
          <aol-style-stroke [color]="'red'"></aol-style-stroke>
          <aol-style-fill [color]="[255,0,0,0.5]"></aol-style-fill>
      </aol-style>
  </aol-feature>
  ```
  Notice the [coordinates] input is now a [number, number][][], as defined in GeoJSON.

   This also allows to display polygon with holes, which is not possible with the current code.
* **openlayers:** Migration from `openlayers` package to `ol`

### build

* update to Angular 16 ([b3c6691](https://github.com/quentin-ol/ngx-openlayers/commit/b3c6691b88893a6509020ade9b9eee9664754a5a))
* update to Angular 17 ([5676ce3](https://github.com/quentin-ol/ngx-openlayers/commit/5676ce304c8260e4acbea9aaed1f9c72c0edb9ab))
* update to Angular 18 ([f2e5ed8](https://github.com/quentin-ol/ngx-openlayers/commit/f2e5ed8d6235ba95c874ea3fd4a934dbd2a0b87f))


### Features

* **cluster:** add wrapX option ([f3106e4](https://github.com/quentin-ol/ngx-openlayers/commit/f3106e4996537faa4b2823d786cdcc3339069025))
* **cluster:** update distance input ([6e448a8](https://github.com/quentin-ol/ngx-openlayers/commit/6e448a849c76ea3e6240754d6a1f7598b679116e))
* **demo:** add example of a cursor position ([eae0a1f](https://github.com/quentin-ol/ngx-openlayers/commit/eae0a1f80822c8bf0976b607a04a447f59697653))
* **demo:** add example of geojson feature : point, polygon, linestring ([43e5eb7](https://github.com/quentin-ol/ngx-openlayers/commit/43e5eb791de291ac1d030056af783dcc6bc0b16e))
* **demo:** add example of map position with longitude, latitude and zoom ([107e94c](https://github.com/quentin-ol/ngx-openlayers/commit/107e94c2180348f9b5bffa6ae53ad1f7d952042d))
* **demo:** add example to display geometry of a geojson file ([939499c](https://github.com/quentin-ol/ngx-openlayers/commit/939499c146ea6dffe30716cf0fdbdd7d0985e2fc))
* **demo:** example change color on hover or on select ([6f8d7f9](https://github.com/quentin-ol/ngx-openlayers/commit/6f8d7f990f48340e98ce57fee465286fddc79424))
* **demo:** example draw a polygon ([2bf558c](https://github.com/quentin-ol/ngx-openlayers/commit/2bf558c29c66bd5abe7d7df07482c279ba209735))
* **demo:** example modify polygon ([240e3dc](https://github.com/quentin-ol/ngx-openlayers/commit/240e3dc275c3f31fdb84add34561bdd9ed0c8eda))
* **demo:** example of marker with svg ([f37e5ef](https://github.com/quentin-ol/ngx-openlayers/commit/f37e5ef2538a977d590c97a05caa4c51e0e58f9e))
* **demo:** example of overlay ([af15282](https://github.com/quentin-ol/ngx-openlayers/commit/af15282117ae69395e4cc7deb56aa2d49f17dc22))
* **demo:** example of side by side ([8f2408e](https://github.com/quentin-ol/ngx-openlayers/commit/8f2408e9b3155cff79c3548a9ea3fab6368d495f))
* **demo:** example of swipe ([8bb64c5](https://github.com/quentin-ol/ngx-openlayers/commit/8bb64c5e3ed1c42581081b464ccbc96e8d834ff0))
* **geom:** add circle geometry ([#210](https://github.com/quentin-ol/ngx-openlayers/issues/210)) ([9ac6458](https://github.com/quentin-ol/ngx-openlayers/commit/9ac6458f7fa791ae3d36a1588cdcf684b5a3193c))
* **geom:** implements MultiPoint, MultiLinestring and MultiPolygon ([98a10d0](https://github.com/quentin-ol/ngx-openlayers/commit/98a10d0982f6ed2493794042622ed13ab8c4a030))
* **graticule:** unregister on destroy ([bb7fa9f](https://github.com/quentin-ol/ngx-openlayers/commit/bb7fa9f16750020441c0d1a8e564d65d09ce59cc))
* **image:** add image loading events ([beada1b](https://github.com/quentin-ol/ngx-openlayers/commit/beada1b6cb927af01abc819ce538493743a9a54f))
* **imagearcgis:** add image events ([9e26397](https://github.com/quentin-ol/ngx-openlayers/commit/9e2639769c30b82eaafce61ef601ec1b4340167b))
* **map:** add onMoveStart event ([46b8ad3](https://github.com/quentin-ol/ngx-openlayers/commit/46b8ad390d8e0f8085b0c456fe0160b3d6452917))
* **openlayers:** migrate to 5 version ([54e47fc](https://github.com/quentin-ol/ngx-openlayers/commit/54e47fc039a77d3e5697c8a85903d5df13aa907d))
* **overviewmap:** refresh overview when the view changes ([18bc7a6](https://github.com/quentin-ol/ngx-openlayers/commit/18bc7a60f281b04c20f99f5d2efe94ca47b19cf8))
* **raster:** not updated when source change ([ad5f265](https://github.com/quentin-ol/ngx-openlayers/commit/ad5f26530e00b809bf02eb757095343d3e36231b))
* **source-vector:** support of 'loader' input ([0bda38a](https://github.com/quentin-ol/ngx-openlayers/commit/0bda38a7ef0233f9e7f01ca8c39dfe53504d15e0))
* **source:imagestatic:** refresh layer source when url change ([d71712f](https://github.com/quentin-ol/ngx-openlayers/commit/d71712ffea0ac6e8472ba2f9c420e90e3d3c8a56))
* **source:** add Image ArcGIS source ([#209](https://github.com/quentin-ol/ngx-openlayers/issues/209)) ([4a4a4ef](https://github.com/quentin-ol/ngx-openlayers/commit/4a4a4efdb001821e29b6e57ee8b10ca7c2a3a5cd))
* **source:** add UTF grid source ([813a81b](https://github.com/quentin-ol/ngx-openlayers/commit/813a81b696955b05a218f2c5180810210bebc2dd))
* **source:** update params when input changes (TileWMS and ImageWMS) ([#199](https://github.com/quentin-ol/ngx-openlayers/issues/199)) ([91de249](https://github.com/quentin-ol/ngx-openlayers/commit/91de249a6f4404ce6d3e8290b16ad455ee9f5a9a))
* **stroke:** add ColorLike typing to color input ([1b84a4b](https://github.com/quentin-ol/ngx-openlayers/commit/1b84a4ba40bc60d37d79282579d5c1bf6ebcfceb))
* update openlayers to `~7.5.2` ([7bb278d](https://github.com/quentin-ol/ngx-openlayers/commit/7bb278d59ed866d773698e10d11154a237f9bd0a))
* update openlayers to `10.5.0` ([6c88713](https://github.com/quentin-ol/ngx-openlayers/commit/6c8871353f8ea4c4eee220d028b9cab8bab46506))
* update openlayers to `8.2.0` ([4057d44](https://github.com/quentin-ol/ngx-openlayers/commit/4057d44e021a5f860485961c9f14a962d93bc457))
* update openlayers to `9.2.4` ([866ae56](https://github.com/quentin-ol/ngx-openlayers/commit/866ae561b1f9ee14fcce7fce3e799129353fa3ff))
* update openlayers to ~6.13.0 ([42fb323](https://github.com/quentin-ol/ngx-openlayers/commit/42fb3230645db423b2747a125c33419979954ea1))
* update openlayers to ~6.15.1 ([9588b9d](https://github.com/quentin-ol/ngx-openlayers/commit/9588b9d6b4a4d74ef6fc550e2aff24fb1e6df9be))
* update to angular 9 ([36bf6a8](https://github.com/quentin-ol/ngx-openlayers/commit/36bf6a8e82f108fc27f17b6356b0fb74b5f4d73e))
* **vector:** add style, updateWhileAnimating and updateWhileInteracting inputs ([ae72c41](https://github.com/quentin-ol/ngx-openlayers/commit/ae72c4130dfcb34574861c5f4512db1a892d77c9)), closes [#198](https://github.com/quentin-ol/ngx-openlayers/issues/198)
* **view:** add change:resolution and change:center outputs ([7eb0b98](https://github.com/quentin-ol/ngx-openlayers/commit/7eb0b98e6b3eac3bd6b2a8b4308fafbf5edd07b7))
* **view:** add missing inputs ([9848242](https://github.com/quentin-ol/ngx-openlayers/commit/9848242b050b5b5041a6f405832c8f2105a117ff))
* **view:** add multiWorld ([059a641](https://github.com/quentin-ol/ngx-openlayers/commit/059a641d438fde881cc0303bbffb88234b134f84))
* **view:** add zoom change output ([ea08721](https://github.com/quentin-ol/ngx-openlayers/commit/ea08721e7899fcea9110fc4eb0e46b9aa6a6154f))
* **view:** dynamically update view projection ([425b0e0](https://github.com/quentin-ol/ngx-openlayers/commit/425b0e07daae029064c61c2c835bad40cbe4b319))
* **wmts:** add wmts tile load events ([04b35d3](https://github.com/quentin-ol/ngx-openlayers/commit/04b35d35725f1a0fa828acadee33568ffae211e1))


### Bug Fixes

* **source:** check host instance before setSource ([#193](https://github.com/quentin-ol/ngx-openlayers/issues/193)) ([c3ba771](https://github.com/quentin-ol/ngx-openlayers/commit/c3ba771e2eefc24006604a44bffaf314a9262a17))
* **source:** update params ImageArcgisRest ([bfc6663](https://github.com/quentin-ol/ngx-openlayers/commit/bfc6663cc5024677421223c94caa6c5671efa534))
* **stroke:** fix ColorLike import path ([c2179ea](https://github.com/quentin-ol/ngx-openlayers/commit/c2179eab3cca0cb8f5f70c87b29f24d7257305e9))
* **travis:** lib build without ngcc (demo issue) ([9edc820](https://github.com/quentin-ol/ngx-openlayers/commit/9edc8203316545146034cea07d4ed203b5d745e8))
* **view:** set the center explicitly because it does not work via setProperties ([2472cff](https://github.com/quentin-ol/ngx-openlayers/commit/2472cff6978c2cc1cdbe2a791fc5889069f159ab))

## [18.0.0-next.0](https://github.com/quentin-ol/ngx-openlayers/compare/17.0.0-next.2...18.0.0-next.0) (2025-06-11)


### ⚠ BREAKING CHANGES

* Angular 16 is no more supported
* `ol` peer dep is now `~10.5.0`
* see all breaking changes from `ol` `10.0.0` (https://github.com/openlayers/openlayers/blob/main/changelog/v10.0.0.md)

### build

* update to Angular 18 ([eaf8b49](https://github.com/quentin-ol/ngx-openlayers/commit/eaf8b49190d2d97a97bc0b85b7ca5e573579a754))


### Features

* update openlayers to `10.5.0` ([8fd4db4](https://github.com/quentin-ol/ngx-openlayers/commit/8fd4db4e035843e7ffc940a63ed64ebc6e0595ba))

## [17.0.0-next.2](https://github.com/quentin-ol/ngx-openlayers/compare/17.0.0-next.1...17.0.0-next.2) (2025-05-26)

## [17.0.0-next.1](https://github.com/quentin-ol/ngx-openlayers/compare/17.0.0-next.0...17.0.0-next.1) (2025-05-26)

## [17.0.0-next.0](https://github.com/quentin-ol/ngx-openlayers/compare/16.0.0-next.0...17.0.0-next.0) (2025-05-26)


### ⚠ BREAKING CHANGES

* `ol` peer dep is now `~9.2.4`
* see all breaking changes from `ol` `9.0.0` (https://github.com/openlayers/openlayers/blob/main/changelog/v9.0.0.md)
* Angular 15 is no more supported

### build

* update to Angular 17 ([c3bed7d](https://github.com/quentin-ol/ngx-openlayers/commit/c3bed7d7c05b7c483cb5da076b5616f6f0fdbd6a))


### Features

* update openlayers to `9.2.4` ([725e363](https://github.com/quentin-ol/ngx-openlayers/commit/725e36304ee48ad7323fcffbf1091917fe867bca))

## [16.0.0-next.0](https://github.com/quentin-ol/ngx-openlayers/compare/15.0.0-next.0...16.0.0-next.0) (2025-01-10)


### ⚠ BREAKING CHANGES

* `ol` peer dep is now `8.2.0`
* see all breaking changes from `ol` `8.0.0` (https://github.com/openlayers/openlayers/blob/main/changelog/upgrade-notes.md#800)
* Angular 14 is no more supported

### build

* update to Angular 16 ([b129c81](https://github.com/quentin-ol/ngx-openlayers/commit/b129c81ec30a5195ad04725101798936dee38db6))


### Features

* update openlayers to `8.2.0` ([8b376e3](https://github.com/quentin-ol/ngx-openlayers/commit/8b376e33314977db52307403bd6a5219f0e5731d))

## [15.0.0-next.0](https://github.com/quentin-ol/ngx-openlayers/compare/14.1.0-next.0...15.0.0-next.0) (2024-12-12)


### ⚠ BREAKING CHANGES

* `ol` peer dep is now `~7.5.2`
* see all breaking changes from `ol` `7.0.0` (https://github.com/openlayers/openlayers/blob/main/changelog/upgrade-notes.md#700)
* see all breaking changes from `ol` `7.1.0` (https://github.com/openlayers/openlayers/blob/main/changelog/upgrade-notes.md#710)
* see all breaking changes from `ol` `7.2.0` (https://github.com/openlayers/openlayers/blob/main/changelog/upgrade-notes.md#720)
* see all breaking changes from `ol` `7.5.0` (https://github.com/openlayers/openlayers/blob/main/changelog/upgrade-notes.md#750)

### Features

* update openlayers to `~7.5.2` ([0c0e3cb](https://github.com/quentin-ol/ngx-openlayers/commit/0c0e3cb7ed6dd7d7e5d8eb385feff4d9072e4211))

## [14.1.0-next.0](https://github.com/quentin-ol/ngx-openlayers/compare/14.0.0-next.0...14.1.0-next.0) (2024-04-29)


### Features

* **source-vector:** support of 'loader' input ([58c1a6b](https://github.com/quentin-ol/ngx-openlayers/commit/58c1a6bb8e33ca4bec2d4094b1efb4610c3ee516))

## [14.0.0-next.0](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.21...14.0.0-next.0) (2024-03-26)


### ⚠ BREAKING CHANGES

* `ol` peer dep is now `~6.15.1`
* `DrawInteractionComponent` : input `type` is now of type `Type`
* `SourceImageWMSComponent` : input `serverType` is now of type `ServerType`
* `OverlayComponent` : input `positioning` is now of type `Positioning`
* `SourceTileWMSComponent` : input `projection` is now of type `ProjectionLike` and input `serverType` is now of type `ServerType`
* `SourceTileWMTSComponent` : input `requestEncoding` is now of type `RequestEncoding`
* all components inputs of type `Element` or `Node` are now of type `HTMLElement`
* all `olChangeActive` and `propertyChange` outputs are now `EventEmitter<ObjectEvent>`
* `FormatMVTComponent` : input `featureClass` is now of type `FeatureClass`
* `DragAndDropInteractionComponent` : input `formatConstructors` is now of type `FeatureFormat[]`
* `LayerComponent` : `prerender` and `postrender` inputs functions should now manage events of type `RenderEvent`
* `SourceImageArcGISRestComponent` : `attributions` input is now of type `AttributionLike`
* `SourceTileWMTSComponent` : `tileGrid` input is now of type `WMTSTileGrid`
* `SourceUTFGridComponent` : `tileJSON` input is now of type `Config`
* `StyleCircleComponent` : `snapToPixel` and `atlasManager` have been removed
* `StyleIconComponent` : `img` input is now of type `HTMLImageElement | HTMLCanvasElement`
* `MapComponent` : `prerender` output has been removed, `precompose` output has been added. `olClick`, `dblClick`, `pointerDrag`, `pointerMove`, `singleClick` outputs are now of type `EventEmitter<MapBrowserEvent<UIEvent>>`
* `ViewComponent` : `changeZoom` output has been removed

### Features

* update openlayers to ~6.13.0 ([ec7f0b5](https://github.com/quentin-ol/ngx-openlayers/commit/ec7f0b5f285facd1f5fbdcd72a7f46d03a7763b4))
* update openlayers to ~6.15.1 ([f068b92](https://github.com/quentin-ol/ngx-openlayers/commit/f068b92e8f52b5e90e75be2cd91bba25391cee67))

## [1.0.0-next.21](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.20...1.0.0-next.21) (2023-11-30)

## [1.0.0-next.20](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.19...1.0.0-next.20) (2023-11-30)

## [1.0.0-next.20](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.19...1.0.0-next.20) (2023-11-30)

<a name="1.0.0-next.19"></a>
# [1.0.0-next.19](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.17...1.0.0-next.19) (2021-09-03)


### Bug Fixes

* **stroke:** fix ColorLike import path ([ebdca6e](https://github.com/quentin-ol/ngx-openlayers/commit/ebdca6e))


### Features

* **stroke:** add ColorLike typing to color input ([f940292](https://github.com/quentin-ol/ngx-openlayers/commit/f940292))



<a name="1.0.0-next.17"></a>
# [1.0.0-next.17](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.16...1.0.0-next.17) (2021-01-06)


### Bug Fixes

* **view:** set the center explicitly because it does not work via setProperties ([958383a](https://github.com/quentin-ol/ngx-openlayers/commit/958383a))


### Features

* **view:** add multiWorld ([f695cbe](https://github.com/quentin-ol/ngx-openlayers/commit/f695cbe))



<a name="1.0.0-next.13"></a>
# [1.0.0-next.13](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.12...1.0.0-next.13) (2019-11-13)


### Features

* **wmts:** add wmts tile load events ([7aba5ca](https://github.com/quentin-ol/ngx-openlayers/commit/7aba5ca))



<a name="1.0.0-next.12"></a>
# [1.0.0-next.12](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.11...1.0.0-next.12) (2019-11-13)


### Chores

* update angular and openayer ([187a3b0](https://github.com/quentin-ol/ngx-openlayers/commit/187a3b0))


### Features

* **map:** add onMoveStart event ([f41daf9](https://github.com/quentin-ol/ngx-openlayers/commit/f41daf9))


### BREAKING CHANGES

* - precompose, postcompose become prerender, postrender
- remove `on` prefix for all output, exception for native events :
  - `click` -> `olClick`
  - `select` -> `olFeature`
  - `change` -> `olChange`



<a name="1.0.0-next.11"></a>
# [1.0.0-next.11](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.10...1.0.0-next.11) (2019-08-08)


### Features

* **imagearcgis:** add image events ([24c1c65](https://github.com/quentin-ol/ngx-openlayers/commit/24c1c65))



<a name="1.0.0-next.10"></a>
# [1.0.0-next.10](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.5...1.0.0-next.10) (2019-07-23)


### Bug Fixes

* **source:** update params ImageArcgisRest ([3d0bc9c](https://github.com/quentin-ol/ngx-openlayers/commit/3d0bc9c))


### Features

* **cluster:** update distance input ([5edbd57](https://github.com/quentin-ol/ngx-openlayers/commit/5edbd57))
* **geom:** implements MultiPoint, MultiLinestring and MultiPolygon ([f0d4dd1](https://github.com/quentin-ol/ngx-openlayers/commit/f0d4dd1))
* **graticule:** unregister on destroy ([5e20e8d](https://github.com/quentin-ol/ngx-openlayers/commit/5e20e8d))
* **openlayers:** migrate to 5 version ([0ed47a3](https://github.com/quentin-ol/ngx-openlayers/commit/0ed47a3))
* **overviewmap:** refresh overview when the view changes ([4dc9852](https://github.com/quentin-ol/ngx-openlayers/commit/4dc9852))
* **source:** add UTF grid source ([ccae9e0](https://github.com/quentin-ol/ngx-openlayers/commit/ccae9e0))
* **source:imagestatic:** refresh layer source when url change ([410f876](https://github.com/quentin-ol/ngx-openlayers/commit/410f876))
* **view:** add change:resolution and change:center outputs ([27b1529](https://github.com/quentin-ol/ngx-openlayers/commit/27b1529))
* **view:** dynamically update view projection ([3f0c228](https://github.com/quentin-ol/ngx-openlayers/commit/3f0c228))


### BREAKING CHANGES

* **geom:** The coordinates input on CollectionCoordinatesComponent is not anymore limited to type [number, number][], but it supports all types of coordinates.
   That means the existing code must be updated for polygons:

   Old style:
  ```html
  <aol-feature>
      <aol-geometry-polygon>
          <aol-collection-coordinates
              [coordinates]="[[5, 45],[5.05, 45.05],[5.05, 44.95],[4.95, 44.95]]"
              [srid]="'EPSG:4326'"
          >
          </aol-collection-coordinates>
      </aol-geometry-polygon>
      <aol-style>
          <aol-style-stroke [color]="'red'"></aol-style-stroke>
          <aol-style-fill [color]="[255,0,0,0.5]"></aol-style-fill>
      </aol-style>
  </aol-feature>
  ```
  New style:

   ```html
  <aol-feature>
      <aol-geometry-polygon>
          <aol-collection-coordinates
              [coordinates]="[[[5, 45],[5.05, 45.05],[5.05, 44.95],[4.95, 44.95]]]"
              [srid]="'EPSG:4326'"
          >
          </aol-collection-coordinates>
      </aol-geometry-polygon>
      <aol-style>
          <aol-style-stroke [color]="'red'"></aol-style-stroke>
          <aol-style-fill [color]="[255,0,0,0.5]"></aol-style-fill>
      </aol-style>
  </aol-feature>
  ```
  Notice the [coordinates] input is now a [number, number][][], as defined in GeoJSON.

   This also allows to display polygon with holes, which is not possible with the current code.
* **openlayers:** Migration from `openlayers` package to `ol`



<a name="1.0.0-next.9"></a>
# [1.0.0-next.9](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.8...1.0.0-next.9) (2019-06-04)


### Bug Fixes

* **ci:** fix build error of npm package

<a name="1.0.0-next.8"></a>
# [1.0.0-next.8](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.7...1.0.0-next.8) (2019-06-04)

### Features

* **graticule:** unregister on destroy ([5e20e8d](https://github.com/quentin-ol/ngx-openlayers/commit/5e20e8d))
* **source:imagestatic:** refresh layer source when url change ([410f876](https://github.com/quentin-ol/ngx-openlayers/commit/410f876))

### Documentation

* add tile json source example ([a65bb8c](https://github.com/quentin-ol/ngx-openlayers/commit/a65bb8c))
* select interaction example ([1e2a46f](https://github.com/quentin-ol/ngx-openlayers/commit/1e2a46f))
* add image static example ([8ebc128](https://github.com/quentin-ol/ngx-openlayers/commit/8ebc128))


# [1.0.0-next.7](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.6...1.0.0-next.7) (2019-04-18)


### Features

* **geom:** implements MultiPoint, MultiLinestring and MultiPolygon ([f0d4dd1](https://github.com/quentin-ol/ngx-openlayers/commit/f0d4dd1))
* **openlayers:** migrate to 5 version ([0ed47a3](https://github.com/quentin-ol/ngx-openlayers/commit/0ed47a3))
* **overviewmap:** refresh overview when the view changes ([4dc9852](https://github.com/quentin-ol/ngx-openlayers/commit/4dc9852))
* **source:** add UTF grid source ([ccae9e0](https://github.com/quentin-ol/ngx-openlayers/commit/ccae9e0))
* **view:** add change:resolution and change:center outputs ([27b1529](https://github.com/quentin-ol/ngx-openlayers/commit/27b1529))
* **view:** dynamically update view projection ([3f0c228](https://github.com/quentin-ol/ngx-openlayers/commit/3f0c228))


### BREAKING CHANGES

* **geom:** The coordinates input on CollectionCoordinatesComponent is not anymore limited to type [number, number][], but it supports all types of coordinates.
   That means the existing code must be updated for polygons:

   Old style:
  ```html
  <aol-feature>
      <aol-geometry-polygon>
          <aol-collection-coordinates
              [coordinates]="[[5, 45],[5.05, 45.05],[5.05, 44.95],[4.95, 44.95]]"
              [srid]="'EPSG:4326'"
          >
          </aol-collection-coordinates>
      </aol-geometry-polygon>
      <aol-style>
          <aol-style-stroke [color]="'red'"></aol-style-stroke>
          <aol-style-fill [color]="[255,0,0,0.5]"></aol-style-fill>
      </aol-style>
  </aol-feature>
  ```
  New style:

   ```html
  <aol-feature>
      <aol-geometry-polygon>
          <aol-collection-coordinates
              [coordinates]="[[[5, 45],[5.05, 45.05],[5.05, 44.95],[4.95, 44.95]]]"
              [srid]="'EPSG:4326'"
          >
          </aol-collection-coordinates>
      </aol-geometry-polygon>
      <aol-style>
          <aol-style-stroke [color]="'red'"></aol-style-stroke>
          <aol-style-fill [color]="[255,0,0,0.5]"></aol-style-fill>
      </aol-style>
  </aol-feature>
  ```
  Notice the [coordinates] input is now a [number, number][][], as defined in GeoJSON.

   This also allows to display polygon with holes, which is not possible with the current code.
* **openlayers:** Migration from `openlayers` package to `ol`



# [1.0.0-next.6](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.5...1.0.0-next.6) (2019-04-18)


### Bug Fixes

* **source:** update params ImageArcgisRest ([3d0bc9c](https://github.com/quentin-ol/ngx-openlayers/commit/3d0bc9c))



# [1.0.0-next.5](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.4...1.0.0-next.5) (2019-02-04)


### Features

* **vector:** add style, updateWhileAnimating and updateWhileInteracting inputs ([76c0c83](https://github.com/quentin-ol/ngx-openlayers/commit/76c0c83)), closes [#198](https://github.com/quentin-ol/ngx-openlayers/issues/198)



# [1.0.0-next.4](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.3...1.0.0-next.4) (2019-01-14)


### Features

* **raster:** not updated when source change ([13a28c7](https://github.com/quentin-ol/ngx-openlayers/commit/13a28c7))



# [1.0.0-next.3](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.2...1.0.0-next.3) (2018-12-12)


### Features

* **cluster:** add wrapX option ([93429a6](https://github.com/quentin-ol/ngx-openlayers/commit/93429a6))
* **image:** add image loading events ([fc856b3](https://github.com/quentin-ol/ngx-openlayers/commit/fc856b3))



# [1.0.0-next.2](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.1...1.0.0-next.2) (2018-11-21)


### Features

* **geom:** add circle geometry ([#210](https://github.com/quentin-ol/ngx-openlayers/issues/210)) ([d789ccf](https://github.com/quentin-ol/ngx-openlayers/commit/d789ccf))
* **source:** add Image ArcGIS source ([#209](https://github.com/quentin-ol/ngx-openlayers/issues/209)) ([98d1577](https://github.com/quentin-ol/ngx-openlayers/commit/98d1577))



# [1.0.0-next.1](https://github.com/quentin-ol/ngx-openlayers/compare/1.0.0-next.0...1.0.0-next.1) (2018-11-06)


### Bug Fixes

* **source:** check host instance before setSource ([#193](https://github.com/quentin-ol/ngx-openlayers/issues/193)) ([afeb1a9](https://github.com/quentin-ol/ngx-openlayers/commit/afeb1a9))


### Features

* **source:** update params when input changes (TileWMS and ImageWMS) ([#199](https://github.com/quentin-ol/ngx-openlayers/issues/199)) ([f7578a4](https://github.com/quentin-ol/ngx-openlayers/commit/f7578a4))
* **view:** add zoom change output ([884429f](https://github.com/quentin-ol/ngx-openlayers/commit/884429f))



# [1.0.0-next.0](https://github.com/quentin-ol/ngx-openlayers/compare/v0.8.22...1.0.0-next.0) (2018-09-21)


### Features

* **demo:** add example of a cursor position ([9a8988e](https://github.com/quentin-ol/ngx-openlayers/commit/9a8988e))
* **demo:** add example of geojson feature : point, polygon, linestring ([367c72d](https://github.com/quentin-ol/ngx-openlayers/commit/367c72d))
* **demo:** add example of map position with longitude, latitude and zoom ([251bbf7](https://github.com/quentin-ol/ngx-openlayers/commit/251bbf7))
* **demo:** add example to display geometry of a geojson file ([fe977e6](https://github.com/quentin-ol/ngx-openlayers/commit/fe977e6))
* **demo:** example change color on hover or on select ([2e7bda4](https://github.com/quentin-ol/ngx-openlayers/commit/2e7bda4))
* **demo:** example draw a polygon ([2737e6b](https://github.com/quentin-ol/ngx-openlayers/commit/2737e6b))
* **demo:** example modify polygon ([18c95fa](https://github.com/quentin-ol/ngx-openlayers/commit/18c95fa))
* **demo:** example of marker with svg ([b5f57b3](https://github.com/quentin-ol/ngx-openlayers/commit/b5f57b3))
* **demo:** example of overlay ([b7749f9](https://github.com/quentin-ol/ngx-openlayers/commit/b7749f9))
* **demo:** example of side by side ([4b5b08b](https://github.com/quentin-ol/ngx-openlayers/commit/4b5b08b))
* **demo:** example of swipe ([9aa4dab](https://github.com/quentin-ol/ngx-openlayers/commit/9aa4dab))



## [0.8.22](https://github.com/quentin-ol/ngx-openlayers/compare/v0.8.21...v0.8.22) (2018-07-02)


### Bug Fixes

* **example.raster:** allow example project to work in --aot mode ([ca0c9bb](https://github.com/quentin-ol/ngx-openlayers/commit/ca0c9bb))


### Features

* **sources:** add source tileutfgrid component ([#179](https://github.com/quentin-ol/ngx-openlayers/issues/179)) ([d946755](https://github.com/quentin-ol/ngx-openlayers/commit/d946755))



## [0.8.21](https://github.com/quentin-ol/ngx-openlayers/compare/v0.8.20...v0.8.21) (2018-06-08)


### Features

* **raster:** add component and demo ([#171](https://github.com/quentin-ol/ngx-openlayers/issues/171)) ([0b40bbd](https://github.com/quentin-ol/ngx-openlayers/commit/0b40bbd))



## [0.8.20](https://github.com/quentin-ol/ngx-openlayers/compare/v0.8.19...v0.8.20) (2018-05-04)


### Features

* **modify-interaction:** add source input ([#146](https://github.com/quentin-ol/ngx-openlayers/issues/146)) ([d27d6ba](https://github.com/quentin-ol/ngx-openlayers/commit/d27d6ba))



## [0.8.19](https://github.com/quentin-ol/ngx-openlayers/compare/v0.8.18...v0.8.19) (2018-04-23)


### Features

* **source:** add geaometryFunction input to cluster component ([#167](https://github.com/quentin-ol/ngx-openlayers/issues/167)) ([8962034](https://github.com/quentin-ol/ngx-openlayers/commit/8962034))



## [0.8.18](https://github.com/quentin-ol/ngx-openlayers/compare/v0.8.17...v0.8.18) (2018-04-12)


### Features

* **tileJSON:** add tileJSON component ([d65e7b2](https://github.com/quentin-ol/ngx-openlayers/commit/d65e7b2))



## [0.8.17](https://github.com/quentin-ol/ngx-openlayers/compare/fd0ae4b...v0.8.17) (2018-03-16)


### Bug Fixes

* added componentType property to ViewComponent ([692e00d](https://github.com/quentin-ol/ngx-openlayers/commit/692e00d))
* addition of text style component to the export list ([9a14460](https://github.com/quentin-ol/ngx-openlayers/commit/9a14460))
* issues related to calling function makeDecorator with AOT ([205bb49](https://github.com/quentin-ol/ngx-openlayers/commit/205bb49))
* license is MPL-2.0. Was incorrectly reported as MIT, though it do not differ much ([a6e257a](https://github.com/quentin-ol/ngx-openlayers/commit/a6e257a))
* minor fixes in README.md ([7c7d764](https://github.com/quentin-ol/ngx-openlayers/commit/7c7d764))
* setting an ID evaluation to a "falsy" statement is now possible. Prior to this commit, setting an ID to 0 failed. ([7473a5c](https://github.com/quentin-ol/ngx-openlayers/commit/7473a5c))
* **types:** upgrade types of OpenLayers ([e36b8aa](https://github.com/quentin-ol/ngx-openlayers/commit/e36b8aa))
* the example icon is now renamed marker.png ([fd0ae4b](https://github.com/quentin-ol/ngx-openlayers/commit/fd0ae4b))
* **devDep:** limit typescript version and match types for OpenLayers ([af4b2da](https://github.com/quentin-ol/ngx-openlayers/commit/af4b2da))
* **example:** add form to package.json ([984da63](https://github.com/quentin-ol/ngx-openlayers/commit/984da63))
* **example:** add value `width` which is mandatory for aot build of example ([b70a698](https://github.com/quentin-ol/ngx-openlayers/commit/b70a698))
* **layer:** remove useless input and change layer component init ([6f512dc](https://github.com/quentin-ol/ngx-openlayers/commit/6f512dc))
* **source.XYZ:** instantiate XYZ source even if no tileGrid is provided ([8c34e00](https://github.com/quentin-ol/ngx-openlayers/commit/8c34e00))
* **style:** trigger update onChange ([6bc94e7](https://github.com/quentin-ol/ngx-openlayers/commit/6bc94e7))
* **view:** set animation on zoom changes ([8d73c38](https://github.com/quentin-ol/ngx-openlayers/commit/8d73c38))


### Features

* **cluster:** add cluster component and demo ([34a1688](https://github.com/quentin-ol/ngx-openlayers/commit/34a1688))
* **example:** move to a new version of the example project ([40ce2d5](https://github.com/quentin-ol/ngx-openlayers/commit/40ce2d5))
* **graticule:** Adding GraticuleComponent ([5adc320](https://github.com/quentin-ol/ngx-openlayers/commit/5adc320))
* **Layer:** add pre and post compose inputs and change behavior for all Layers ([4ceef04](https://github.com/quentin-ol/ngx-openlayers/commit/4ceef04))
* **layergroup:** add LayerGroupComponent ([c1f2513](https://github.com/quentin-ol/ngx-openlayers/commit/c1f2513))
* **ModifyInteractionComponent:** add modify interaction to be able to re-draw feature(s) ([e3625b5](https://github.com/quentin-ol/ngx-openlayers/commit/e3625b5))
* **scaleline:** add input units to scaleline component ([26a9a5c](https://github.com/quentin-ol/ngx-openlayers/commit/26a9a5c))
* **SelectInteractionComponent:** add new interaction to ba able to ([4017117](https://github.com/quentin-ol/ngx-openlayers/commit/4017117))
* **Source:OSM:** Use SourceXYZComponent as parent class instead of SourceComponent ([92d9519](https://github.com/quentin-ol/ngx-openlayers/commit/92d9519))
* **source:wmts:** refresh layer source when url change ([7730673](https://github.com/quentin-ol/ngx-openlayers/commit/7730673))
* **Source:XYZ:** add tilegrid childComponent ([c732980](https://github.com/quentin-ol/ngx-openlayers/commit/c732980))
* **source.imagestatic:** add image static source ([4aa6f3a](https://github.com/quentin-ol/ngx-openlayers/commit/4aa6f3a))
* **sources:** trigger refresh on property changes for XYZ Component ([1fe5219](https://github.com/quentin-ol/ngx-openlayers/commit/1fe5219))
* **SourceTileWMTSComponent:** add wmts source component and wmts grid tile component ([9e029ed](https://github.com/quentin-ol/ngx-openlayers/commit/9e029ed))
* **SourceXYZComponent:** add tileGrid input ([390add8](https://github.com/quentin-ol/ngx-openlayers/commit/390add8))
* **SourceXYZComponent:** add tileLoadFunction input ([f76321e](https://github.com/quentin-ol/ngx-openlayers/commit/f76321e))
* **tilegrid:** Allow resolutions and origin, and use new tilegrid.Tilegrid constructor ([95db90c](https://github.com/quentin-ol/ngx-openlayers/commit/95db90c))
* **TranslateInteractionComponent:** add interaction to be able to move feature(s) ([1d265ae](https://github.com/quentin-ol/ngx-openlayers/commit/1d265ae))
