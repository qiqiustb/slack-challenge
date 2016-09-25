(function(){
  'use strict';

  angular
    .module('slackChallenge.summary', [])
    .controller('SummaryCtrl', ['$scope', '$stateParams', SummaryCtrl]);

  function SummaryCtrl ($scope, $stateParams) {
    $scope.$on('data', function(event, data){
      $scope.data = data;
      $scope.summary = data.summary;
    });

    $scope.highlight = function(tag){
      $scope.$parent.$broadcast('highlighed_tag', tag);
    };
  };
})();
