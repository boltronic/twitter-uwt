'use strict';

var logger = require('@turbine/logger');

module.exports = function(settings) {
  var twtr = require('../helpers/getTwitterQueue');

  var options = (settings.parameters || []).reduce(function(allParameters, parameter) {
    allParameters[parameter.key] = parameter.value;

    return allParameters;
  }, {});

  twtr('trackCustom', settings.name, options);
  logger.log(
    'Queue command: twtr("trackCustom", "' + settings.name + '", ' + JSON.stringify(options) + ').'
  );
};
