# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.0.0-next.21 (2022-07-23)


### ⚠ BREAKING CHANGES

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

### Features

* **cluster:** add cluster component and demo ([34a1688](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/34a16887e74dbb626d57264d7a086a89f720e61e))
* **cluster:** add wrapX option ([93429a6](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/93429a62afb66718fa1d8ff72700253ae9cfbc1f))
* **cluster:** update distance input ([5edbd57](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/5edbd573f0ef47f156c5ecd4a9fecafeabda19ba))
* **demo:** add example of a cursor position ([9a8988e](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/9a8988e9c29ce00a1e784089dc2ef7d791ff54ea))
* **demo:** add example of geojson feature : point, polygon, linestring ([367c72d](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/367c72de7ef88e3770bb7dbb9e804a70a7eef42e))
* **demo:** add example of map position with longitude, latitude and zoom ([251bbf7](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/251bbf75f6b28e808b3e158edccbe2ffa0c256ac))
* **demo:** add example to display geometry of a geojson file ([fe977e6](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/fe977e6a4733cfa36179eacc0a60297bad7a5113))
* **demo:** example change color on hover or on select ([2e7bda4](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/2e7bda4c2c68810a1f1cd717a20bad4524ee2717))
* **demo:** example draw a polygon ([2737e6b](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/2737e6b114f596456622635933fdeb3955d13d83))
* **demo:** example modify polygon ([18c95fa](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/18c95fa2e2a2a2064347086729cad00c8ea9c730))
* **demo:** example of marker with svg ([b5f57b3](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/b5f57b31770bef156a908df5324a80d2f45a4101))
* **demo:** example of overlay ([b7749f9](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/b7749f9f6bb79403fdcf0f9c4fad225bf6ac5dcf))
* **demo:** example of side by side ([4b5b08b](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/4b5b08b9bd1ccb23792640081f6c09660f2787e9))
* **demo:** example of swipe ([9aa4dab](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/9aa4dab0e3f4e8ce29b16ba00e880b5b7ae460a9))
* **example:** move to a new version of the example project ([40ce2d5](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/40ce2d555844ba64b7f9822c5a3734df5388448f))
* **geom:** add circle geometry ([#210](https://github.com/OnefoursevenLabs/ngx-openlayers/issues/210)) ([d789ccf](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/d789ccf3252a38fcd1d5828ae49e06c26860bb39))
* **geom:** implements MultiPoint, MultiLinestring and MultiPolygon ([f0d4dd1](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/f0d4dd14a0179a27e34b9898f504e65c121ea229))
* **graticule:** Adding GraticuleComponent ([5adc320](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/5adc320d7d6b0a3b54571ceb8c732a75e17d1a88))
* **graticule:** unregister on destroy ([5e20e8d](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/5e20e8decdf6434c66a84d5d8e2ba14d1fc56636))
* **image:** add image loading events ([fc856b3](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/fc856b3f9426d6963eea9c9c2b9a7022e3ff2186))
* **imagearcgis:** add image events ([24c1c65](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/24c1c652d0fbe54a5e4e84fc1fd3c8448a14466d))
* **Layer:** add pre and post compose inputs and change behavior for all Layers ([4ceef04](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/4ceef045f1f301c542b028821b37cbb221a79b0b))
* **layergroup:** add LayerGroupComponent ([c1f2513](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/c1f2513697d5ea4253836d5dd450a8401f0b4c10))
* **map:** add onMoveStart event ([f41daf9](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/f41daf940e95e8754132beca33b58514bcd237d1))
* **modify-interaction:** add source input ([#146](https://github.com/OnefoursevenLabs/ngx-openlayers/issues/146)) ([d27d6ba](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/d27d6ba6d7dd366a37620c4f09695cb132703738))
* **ModifyInteractionComponent:** add modify interaction to be able to re-draw feature(s) ([e3625b5](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/e3625b5416e3eec2bc57f2653473c9e84b00a240))
* **openlayers:** migrate to 5 version ([0ed47a3](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/0ed47a3da218e0b062cbeb981fc1eac892d6b11d))
* **overviewmap:** refresh overview when the view changes ([4dc9852](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/4dc9852503f7940bd6e00685bb6c70f07284cb17))
* **raster:** add component and demo ([#171](https://github.com/OnefoursevenLabs/ngx-openlayers/issues/171)) ([0b40bbd](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/0b40bbd7f330cc780e756e5bc62b338a221b6eeb))
* **raster:** not updated when source change ([13a28c7](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/13a28c7666a8cd74b9bd99db1496cb7482af6b52))
* **scaleline:** add input units to scaleline component ([26a9a5c](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/26a9a5c222c862a2c7a313eceffb3aa05b14bb50))
* **SelectInteractionComponent:** add new interaction to ba able to ([4017117](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/4017117a5c49c38247f78d670e03ed5442469cef))
* **source:** add geaometryFunction input to cluster component ([#167](https://github.com/OnefoursevenLabs/ngx-openlayers/issues/167)) ([8962034](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/89620342b8a53f1ee368aeb55fc308d0d882ff15))
* **source:** add Image ArcGIS source ([#209](https://github.com/OnefoursevenLabs/ngx-openlayers/issues/209)) ([98d1577](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/98d157752210413e063194f885141424f16a834d))
* **source:** add UTF grid source ([ccae9e0](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/ccae9e0c97f8db0bf44f0368af49a649c55ee69d))
* **source:imagestatic:** refresh layer source when url change ([410f876](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/410f8767ed44ab028ed594fe7910851c91503c17))
* **Source:OSM:** Use SourceXYZComponent as parent class instead of SourceComponent ([92d9519](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/92d9519ebb8aa11e5f71e5f965ddc371512e922f))
* **source:wmts:** refresh layer source when url change ([7730673](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/7730673954ffa6c3490d6f72574b1deb0276d3ef))
* **Source:XYZ:** add tilegrid childComponent ([c732980](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/c7329805c28f8235e365bd6119984401af691f18))
* **source.imagestatic:** add image static source ([4aa6f3a](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/4aa6f3a18e930e59b0e3c060a2d937a14dbd9b36))
* **sources:** add source tileutfgrid component ([#179](https://github.com/OnefoursevenLabs/ngx-openlayers/issues/179)) ([d946755](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/d946755dc9541efbadc1a1cd109bc924cdf99753))
* **sources:** trigger refresh on property changes for XYZ Component ([1fe5219](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/1fe5219c6d616b7fc60bc33e78466acf96597aae))
* **SourceTileWMTSComponent:** add wmts source component and wmts grid tile component ([9e029ed](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/9e029edfe69bef84a20f885eca1c33a6dd0080ca))
* **SourceXYZComponent:** add tileGrid input ([390add8](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/390add801431bfcb3bc22b63fa820071510877df))
* **SourceXYZComponent:** add tileLoadFunction input ([f76321e](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/f76321e320c40e68e6487f179d22ad2c994bfd93))
* **stroke:** add ColorLike typing to color input ([f940292](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/f9402921e92c89fbcfabc3ad20e7ffc9b473d6f8))
* **tilegrid:** Allow resolutions and origin, and use new tilegrid.Tilegrid constructor ([95db90c](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/95db90ca2b493d9084f375de4586c7ad5559f52c))
* **view:** add missing inputs ([69a46ca](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/69a46ca0f476603e67f9a51b17d88b0fe882a967))
* **view:** add multiWorld ([f695cbe](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/f695cbec7ca4da991a9fbff3d3b409fa5f1e1419))
* update to angular 9 ([d068402](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/d068402f9382d3e99a0ec0311a6ff6f6b8a09271))
* **source:** update params when input changes (TileWMS and ImageWMS) ([#199](https://github.com/OnefoursevenLabs/ngx-openlayers/issues/199)) ([f7578a4](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/f7578a401f0641eca57812dadd7dd77ec7ffd4c6))
* **tileJSON:** add tileJSON component ([d65e7b2](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/d65e7b22919f84a19f271ba98f90078b14da1261))
* **TranslateInteractionComponent:** add interaction to be able to move feature(s) ([1d265ae](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/1d265ae3f935f963e703beccd71480412e2d8f74))
* **vector:** add style, updateWhileAnimating and updateWhileInteracting inputs ([76c0c83](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/76c0c83495fd4f81742f65107858e4801300db1c)), closes [#198](https://github.com/OnefoursevenLabs/ngx-openlayers/issues/198)
* **view:** add change:resolution and change:center outputs ([27b1529](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/27b1529edfdcde3b9032383cbcfd9be8b1e82400))
* **view:** add zoom change output ([884429f](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/884429f7b44ba815587e97f9668d11ae05f20d50))
* **view:** dynamically update view projection ([3f0c228](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/3f0c228096e3f9cbb1e6e483e9be0bf68703f748))
* **wmts:** add wmts tile load events ([7aba5ca](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/7aba5ca28785f1673fa9316c235cba047bfa0af7))


### Bug Fixes

* **devDep:** limit typescript version and match types for OpenLayers ([af4b2da](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/af4b2dac20cf3e6d7d7325c31f6388ba54155a59))
* **example:** add form to package.json ([984da63](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/984da635a289bde357301de033680a07feba8c09))
* **example:** add value `width` which is mandatory for aot build of example ([b70a698](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/b70a698b7e6fa8ff1d6bf22edf91e4db2fbcb88a))
* **example.raster:** allow example project to work in --aot mode ([ca0c9bb](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/ca0c9bb41fb1d4a843c7f787bd7c6e94cabc6124))
* **layer:** remove useless input and change layer component init ([6f512dc](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/6f512dcf3991b5f055ded3edfc32b29016d97d6a))
* **source:** check host instance before setSource ([#193](https://github.com/OnefoursevenLabs/ngx-openlayers/issues/193)) ([afeb1a9](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/afeb1a90bdd37409939031fb5a559612b2c816b7))
* **source:** update params ImageArcgisRest ([3d0bc9c](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/3d0bc9c97c10a4cfc02d90623a68047b7269f6af))
* **source.XYZ:** instantiate XYZ source even if no tileGrid is provided ([8c34e00](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/8c34e004776dbf657d6598a607f8b45f2ade6232))
* **stroke:** fix ColorLike import path ([ebdca6e](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/ebdca6e6776f03db14aacfff4c7447c873fbc01f))
* **style:** trigger update onChange ([6bc94e7](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/6bc94e7d3128f39052fcae936fb98f3411cd9ae0))
* **travis:** lib build without ngcc (demo issue) ([e6fe3eb](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/e6fe3eba5fa49a17e2e16cb13d5bb3dffedad3e7))
* **types:** upgrade types of OpenLayers ([e36b8aa](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/e36b8aa87c0305d25023d8d3255d4f2337fa1ab1))
* **view:** set animation on zoom changes ([8d73c38](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/8d73c3894db9846efad8500493a56e9dba4ab6f7))
* **view:** set the center explicitly because it does not work via setProperties ([958383a](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/958383a2551efcd68599f2ce0f86cb5910670b74))
* added componentType property to ViewComponent ([692e00d](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/692e00dbffdb187e8f80bdfeebb99a68059cb8a9))
* addition of text style component to the export list ([9a14460](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/9a1446011e9f86ac4e03bb4bfaa09a8ebc82efeb))
* issues related to calling function makeDecorator with AOT ([205bb49](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/205bb49adf0f38bcd9a3927d3c5774040ccf5d1e))
* license is MPL-2.0. Was incorrectly reported as MIT, though it do not differ much ([a6e257a](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/a6e257afdadb32f57955fb5959ba3d40a1029ac9))
* minor fixes in README.md ([7c7d764](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/7c7d764505507c5007b4cbe1062c8f65c69a8b49))
* setting an ID evaluation to a "falsy" statement is now possible. Prior to this commit, setting an ID to 0 failed. ([7473a5c](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/7473a5c73fd40bd710a4b0f2cfc23ef97f6d5c84))
* the example icon is now renamed marker.png ([fd0ae4b](https://github.com/OnefoursevenLabs/ngx-openlayers/commit/fd0ae4b5f5edc805a3b4b3cf2b8596ece082a54a))

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
