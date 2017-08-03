'use strict';

var logger = require('@turbine/logger');

module.exports = function(settings) {
  var twtr = require('../helpers/getTwtrQueue');

  twtr('track', 'Conversion', settings);
  logger.log('Queue command: twtr("track", "Conversion", ' + JSON.stringify(settings) + ').');
};
