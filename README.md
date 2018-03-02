# Webpack 4 Demo &middot; Legato :notes:

> Demo project to start using and experiment with [Webpack 4](https://webpack.js.org/)

[![GitHub license](https://img.shields.io/github/license/carloluis/webpack-demo.svg)](https://github.com/carloluis/webpack-demo/blob/master/LICENSE)
[![David](https://img.shields.io/david/dev/carloluis/webpack-demo.svg)](https://david-dm.org/carloluis/webpack-demo?type=dev)

## Start

Restore dependencies and start development server:

```bash
yarn && yarn dev
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
yarn add webpack webpack-cli --dev
```

<details>

This project started with `Webpack 4` in beta version:

```bash
# add webpack 4 (currently on 4.0.0-beta.2)
yarn add webpack@next webpack-cli --dev
```

</details>

### Zero Configuration

No need for explicit specify `entry` and `output` entries on webpack config.
On _Webpack 4_ they has defaults values:

```json
{
    "entry": "./src",
    "output": "./dist"
}
```

#### Mode

Webpack `mode` reduce the required configuration for a useful build:

* `development`: this mode provide useful error messages and is optimized for speed (unminified bundle)
* `production`: enables optimizations out of the box (scope hoisting, tree shaking, minification, etc.)

```bash
webpack --mode production
```

### Webpack Changes

Full list of changes on [webpack changelog](https://github.com/webpack/webpack/releases)

- Webpack dropped _Node.js 4_ support. Therefore, more benefits from ES6 features (optimizations from V8).
- Sets of defaults with **production** and **development** modes.
- General defaults (zero config file).

[Webpack v4.0.0 changeset](https://github.com/webpack/webpack/releases/tag/v4.0.0) 

### Articles

- [:rocket: webpack 4 beta — try it today! :rocket:](https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2)
- [webpack 4: mode and optimization](https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a)
- [webpack 4: import() and CommonJs](https://medium.com/webpack/webpack-4-import-and-commonjs-d619d626b655)
- [webpack 4: released today!! :sparkles:](https://medium.com/webpack/webpack-4-released-today-6cdb994702d4)
