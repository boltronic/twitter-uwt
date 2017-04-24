'use strict';

var logger = require('@turbine/logger');

module.exports = function(settings) {
  var twtr = require('../helpers/getTwtrQueue');

  twtr('track', 'Pageview', settings);
  logger.log('Queue command: twtr("track", "Pageview", ' + JSON.stringify(settings) + ').');
};
