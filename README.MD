# ngx-openlayers [![Build Status](https://travis-ci.org/quentin-ol/ngx-openlayers.svg?branch=master)](https://travis-ci.org/quentin-ol/ngx-openlayers)[![Join the chat at https://gitter.im/ngx-openlayers](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ngx-openlayers?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Demo
https://quentin-ol.github.io/ngx-openlayers/

## Installation

To install this library, run:

```bash
npm install ngx-openlayers --save
```

## Example

Here is a "minimal" map example that fetches tiles from OpenStreetMap and center the map in Meylan (France):

in `app.module.ts`:
```js
...
import { AngularOpenlayersModule } from "ngx-openlayers";
...

@NgModule({
  imports: [
    ...
    AngularOpenlayersModule
  ],
  ...
  bootstrap: [AppComponent]
})
export class AppModule { }
```

in `app.component.html`:
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

The API is documented in [documentation](/documentation/)

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

## Contributors

### Orange
- Quentin Lampin <quentin.lampin@orange.com>

### Airbus
- WEBER Logan <logan.weber@airbus.com>
- Clara Belair <clara.belair.external@airbus.com>
- Damien Marest <damien.marest.external@airbus.com>
- Aymeric Duchein <aymeric.duchein.external@airbus.com>
- WEBER Logan <logan.weber.external@airbus.com>
- Guillaume Gasperi <guillaume.gasperi.external@airbus.com>
- Damien Marest <damien.marest@airbus.com>
- Michael PARRY <michael.m.parry.external@airbus.com>
- Elodie Tasia <elodie.tasia.external@airbus.com>
- Jeremy Eychenne <jeremy.eychenne.neo-soft@externalgcp.ds.airbus.com>
- Jerome Audouy <jerome.audouy.external@airbus.com>
- Malorie Berthoin <malorie.berthoin.neo-soft@externalgcp.ds.airbus.com>
- Mazzoléni <yoahn.mazzoleni.external@airbus.com>
- Michael Parry <michael.m.parry.external@airbus.com>

### Other

- FallenRiteMonk <fallenritemonk@gmail.com>
- Achim Hasenmueller <achim@autorouter.eu>
- achimha <guigui03>
- davinkevin <davin.kevin@gmail.com>
- Michael Parry <michael.parry.87@gmail.com>
- Samuel Girard <samuel.girard@cgi.com>
- WEBER Logan <weberlogan@gmail.com>
- aymeric-duchein <32835655+aymeric-duchein@users.noreply.github.com>
- Karolina Mamczarz <karolina.mamczarz@geomatyka-krakow.pl>
- Lautaro Cozzani <lautaromail@gmail.com>
- Samuel Girard <samuel.girard@gmail.com>
- Achim Hasenmueller <achim.hasenmueller@gmail.com>
- Gregg Guru <gregg@gregg.guru>
- Karolina Mamczarz <karolina.mamczarz@op.pl>
- Michael <michael.parry.87@gmail.com>
- Quentin Lampin <quentin.lampin@gmail.com>
- Yakoust <30597077+Yakoust@users.noreply.github.com>
- Yakoust <damien.marest@gmail.com>
- Bill Farmakis <billfarmakis@iinet.net.au>
- Davin Kevin <davinkevin@users.noreply.github.com>
- Nathaniel Wingfield <nw@ufl.edu>
- Unknown <michael.parry.87@gmail.com>
- gueuze <dan.evans83@gmail.com>
- Clara Belair <clara.belair@orange.fr>
- Damien Marest <damien.marest@gmail.com>
- Dji75 <j_audouy@hotmail.com>
- Dominik Trenz <trenz@devbros.de>
- Gasperi <32667788+gasperiguillaume@users.noreply.github.com>
- Harel Mazor <harel.mazor@gmail.com>
- Laure Malorgio <laure.malorgio@hotmail.com>
- Marest <damien.marest@gmail.com>
- Sree <kuttansree172@gmqil.com>
- Tohru Okamoto <t-okamoto@nssys.co.jp>
- YMazzoleni <YMazzoleni@users.noreply.github.com>
- dan <gy13dpe@leeds.ac.uk>
- fttriquet <37173010+fttriquet@users.noreply.github.com>
- gscscnd <gscscnd@gmail.com>
- remiHau <remi.hau@gmail.com>
- samuel-girard <32910196+samuel-girard@users.noreply.github.com>

## License

MPL-2.0 - Quentin Lampin <quentin.lampin@orange.com> Copyright 2017 Orange
