(function(){
  'use strict';

  angular
    .module('slackChallenge.view1', [])
    .controller('View1Ctrl', ['$scope', '$stateParams', '$http', View1Ctrl]);

  function View1Ctrl ($scope, $stateParams, $http) {
    $scope.url = $stateParams.url;
    if(angular.isDefined($scope.url)){
      $http({
        url: '/api/url?url=' + $scope.url,
        method: 'GET',
      }).success(function(data){
        $scope.data = data;
        $scope.$broadcast('data', $scope.data);
      }).error(function(error){
        console.log(error);
        $scope.$broadcast('data', {'summary': {}, 'source': 'Error while fetching ' + $scope.url + '.\n\n' + error});
      });
    }
  };
})();
