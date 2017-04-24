'use strict';

var window = require('@turbine/window');
var loadScript = require('@turbine/load-script');
var extensionSettings = require('@turbine/get-extension-settings')();
var logger = require('@turbine/logger');
var twtr;

var createTwtrQueue = function() {
  var twtr = function() {
    twtr.callMethod ? twtr.callMethod.apply(twtr, arguments) : twtr.queue.push(arguments);
  };

  twtr.push = twtr;
  twtr.loaded = true;
  twtr.version = '1.0';
  twtr.queue = [];

  return twtr;
};

if (!window.twtr) {
  twtr = createTwtrQueue();

  window.twtr = twtr;
  if (!window._twtr) {
    window._twtr =   twtr;
  }
}

loadScript('https://static.ads-twitter.com/uwt.js').then(function() {
  logger.log('Twitter Pixel Base Code was successfully loaded.');
}, function() {
  logger.error('Twitter Pixel Base Code could not be loaded.');
});

window.twtr('init', extensionSettings.pixelId);

module.exports = twtr;
