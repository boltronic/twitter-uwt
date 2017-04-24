'use strict';

var logger = require('@turbine/logger');

module.exports = function(settings) {
  var twtr = require('../helpers/getTwtrQueue');

  twtr('track', 'Download', settings);
  logger
    .log('Queue command: twtr("track", "Download", ' + JSON.stringify(settings) + ').');
};
