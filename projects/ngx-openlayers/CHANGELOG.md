# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
