'use strict';

var logger = require('@turbine/logger');

module.exports = function(settings) {
  var twtr = require('../helpers/getTwtrQueue');

  twtr('track', 'Signup', settings);
  logger.log('Queue command: twtr("track", "Signup", ' + JSON.stringify(settings) + ').');
};
