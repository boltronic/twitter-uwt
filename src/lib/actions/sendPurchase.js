'use strict';

var logger = require('@turbine/logger');

module.exports = function(settings) {
  var twtr = require('../helpers/getTwtrQueue');

  twtr('track', 'Purchase', settings);
  logger.log('Queue command: twtr("track", "Purchase", ' + JSON.stringify(settings) + ').');
};
