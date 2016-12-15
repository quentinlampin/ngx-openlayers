# angular2-openlayers

## Installation

To install this library, run:

```bash
$ npm install angular2-openlayers --save
```

## Example
```
  <aol-map [width]="'300px'" [height]="'300px'">
    <aol-view zoom="13">
      <aol-coordinate [x]="5" [y]="45" [srid]="'EPSG:4326'"></aol-coordinate>
    </aol-view>
     <aol-layer-tile>
        <aol-source-osm></aol-source-osm>
    </aol-layer-tile>
    <aol-layer-vector>
      <aol-source-vector>
          <aol-feature>
              <aol-geometry-point>
                  <aol-coordinate [x]="5" [y]="45" [srid]="'EPSG:4326'"></aol-coordinate>
              </aol-geometry-point>
              <aol-style>
                <aol-style-icon
                  [src]="'assets/flag.png'"
                  [anchor]="[0.5, 20]"
                  [anchorXUnits]="'fraction'" [anchorYUnits]="'pixels'"
                  [anchorOrigin]="'top-left'"></aol-style-icon>
              </aol-style>
          </aol-feature>
      </aol-source-vector>
    </aol-layer-vector>
    <aol-control-zoomslider></aol-control-zoomslider>
    <aol-control-zoom></aol-control-zoom>
    <aol-control-attribution></aol-control-attribution>
  </aol-map>
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run ngc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

Live example (reload on code changes):
```bash
$ npm install -g angular-cli@1.0.0-beta.21 (May require sudo)
$ cd example
$ npm install
$ ng serve
```
Live example will be visable at locahost:4200

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request and enjoy! :D

## License

MIT © [Quentin Lampin](quentin.lampin@orange.com)
