const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'dev' || TARGET === 'dev:server' || !TARGET) {
	module.exports = require('./config/webpack.config.dev');
}
if (TARGET === 'build' || TARGET === 'stats') {
	module.exports = require('./config/webpack.config.prod');
}
