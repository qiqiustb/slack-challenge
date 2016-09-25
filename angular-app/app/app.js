(function(){
  'use strict';

  // Declare app level module which depends on views, and components
  angular
    .module('slackChallenge', [
      'ui.router',
      'slackChallenge.header',
      'slackChallenge.footer',
      'slackChallenge.view1',
      'slackChallenge.view2',
      'slackChallenge.summary',
      'slackChallenge.source',
      'slackChallenge.version',
      'ui.bootstrap',
    ])
    .config(['$stateProvider', '$urlRouterProvider', config]);

    function config ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/view1');

        $stateProvider
          .state('app', {
              url: '/',
              views: {
                'header': {
                  templateUrl: 'view_header/header.html',
                  controller: 'HeaderController'
                },
                'footer': {
                  templateUrl: 'view_footer/footer.html',
                  controller: 'FooterController'
                }
              }
          })
          .state('app.view1', {
              url: 'view1?url',
              views: {
                'content@': {
                  templateUrl: 'view1/view1.html',
                  controller: 'View1Ctrl'
                },
                'summary@app.view1': {
                  templateUrl: 'view_summary/summary.html',
                  controller: 'SummaryCtrl',
                },
                'source@app.view1': {
                  templateUrl: 'view_source/source.html',
                  controller: 'SourceCtrl',
                }
              }
          });
      }
})();
