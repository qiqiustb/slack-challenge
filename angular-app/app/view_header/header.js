(function(){
  'use strict';
  angular
    .module('slackChallenge.header', [])
    .controller('HeaderController', ['$scope', '$location', HeaderController]);

  function HeaderController ($scope, $location){

    $scope.search = function() {
      // fetch HTML source
      var url = $scope.searchterm;
      //$state.go('app.view1', {run_id: matches[0]});
      // if string doesn't match, then its probably user/branch/sha
      $location.path('/view1').search({'url': $scope.searchterm});
    };
  };

})();
