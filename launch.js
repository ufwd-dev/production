'use strict';
const { bootstrap } = require('lemonitor-service');

require('./index');

bootstrap(options => {
	options.forceSync = false;
});

module.exports = require('lemonitor-application/webpack.dev');