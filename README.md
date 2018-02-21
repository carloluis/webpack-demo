# webpack-demo

This is a [webpack](https://webpack.js.org/) 4 demo project.

## Install webpack

```bash
yarn add webpack@next webpack-cli --dev
```

## Zero Configuration

No need for explicit specify `entry` and `output` entries on webpack config.
On Webpack 4 they has defaults values:

```json
{
    "entry": "./src",
    "output": "./dist",
    "mode": "production"
}
```
