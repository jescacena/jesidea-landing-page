# Jesidea landing page

 [http://jesidea.com](http://jesidea.com)

## Install Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org) & npm
  * [compass](http://compass-style.org/): `gem install compass`
  * [bower](http://bower.io): `npm install bower -g`
  * [Download this starter compass project and unzip it](https://github.com/zurb/foundation-compass-template/archive/master.zip)
  * Run `bower install` to install the latest version of Foundation

## Local development


Run local server
```bash
npm run start
```

Run sass compiler in watch mode:
```bash
npm run compile-styles:watch
```


## Build release

Set Node to 11.8.0

```bash
gulp build:dist
```

## Deploy

Set Node to 11.8.0

```bash
gulp deploy
```


