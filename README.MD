# ngx-openlayers [![Build Status](https://travis-ci.org/quentin-ol/ngx-openlayers.svg?branch=master)](https://travis-ci.org/quentin-ol/ngx-openlayers)[![Join the chat at https://gitter.im/ngx-openlayers](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ngx-openlayers?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Installation

To install this library, run:

```bash
npm install ngx-openlayers --save
```

## Example

Here is a "minimal" map example that fetches tiles from OpenStreetMap and center the map in Meylan (France):

```html
<aol-map [width]="'500px'" [height]="'300'">
    <aol-view [zoom]="2">
        <aol-coordinate [x]="5.795122" [y]="45.210225" [srid]="'EPSG:4326'"></aol-coordinate>
    </aol-view>
    <aol-layer-tile>
        <aol-source-osm></aol-source-osm>
    </aol-layer-tile>
</aol-map>
```

## Documentation

The API is documented in `documentation/`

## Getting Help

Join us at our Gitter: [https://gitter.im/ngx-openlayers](https://gitter.im/ngx-openlayers)

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
npm run ngc
```

To lint all `*.ts` files:

```bash
npm run lint
```

Live example (reload on code changes):

```bash
npm install -g @angular/cli
cd example
npm install
ng serve
```

Live example will be viewable at locahost:4200

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request and enjoy! :D

## License

MPL-2.0 - Quentin Lampin <quentin.lampin@orange.com> Copyright 2017 Orange
