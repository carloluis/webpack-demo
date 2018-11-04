const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = require('./webpack.config.prod');

module.exports = {
    ...config,
    plugins: [
        ...config.plugins,
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: true,
            generateStatsFile: true
        })
    ]
};
