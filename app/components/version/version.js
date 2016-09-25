'use strict';

angular.module('slackChallenge.version', [
  'slackChallenge.version.interpolate-filter',
  'slackChallenge.version.version-directive'
])

.value('version', '0.1');
