module.exports = {
    context: __dirname,
    mode: 'production',
    entry: {
        nodejs: './lib.js'
    },
    output: {
        filename: 'lib.[name].js',
        libraryTarget: 'commonjs'
    },
    target: 'node'
};
