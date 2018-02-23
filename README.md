# Webpack-Demo &middot; [![GitHub license](https://img.shields.io/github/license/carloluis/webpack-demo.svg)](https://github.com/carloluis/webpack-demo/blob/master/LICENSE)

Demo project to start using and experiment with [Webpack](https://webpack.js.org/) 4.

## Start

Restore dependencies and start development server:

```bash
yarn && yarn dev:server
```

### Features

* _entry_ / _output_ custom config.
* split chunks (`app` | `vendors`)
* html index creation
* assets copy
* dev server

----

## Webpack

### Install webpack

```bash
# add webpack 4 (currently on 4.0.0-beta.2)
yarn add webpack@next webpack-cli --dev
```

### Zero Configuration

No need for explicit specify `entry` and `output` entries on webpack config.
On Webpack 4 they has defaults values:

```json
{
    "entry": "./src",
    "output": "./dist"
}
```

#### Mode

Webpack mode reduce the required configuration for a useful build:

* `production`: enables optimizations out of the box (scope hoisting, tree shaking, minification, etc.)
* `development`: this mode provide useful error messages and is optimized for speed (un-minified bundle)

```bash
webpack --mode production
```

### Webpack Changes

Full list of changes on [webpack changelog](https://github.com/webpack/webpack/releases).

- Webpack dropped _Node.js 4_ support. Therefore, more benefits from ES6 features (optimizations from V8).
- Sets of defaults with **production** and **development** modes.
- General defaults (zero config file).

More changes on [v4.0.0-beta.0](https://github.com/webpack/webpack/releases/tag/v4.0.0-beta.0)

### Articles

- [:rocket: webpack 4 beta — try it today! :rocket:](https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2)
- [webpack 4: mode and optimization](https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a)
- [webpack 4: import() and CommonJs](https://medium.com/webpack/webpack-4-import-and-commonjs-d619d626b655)
