(function(){
  'use strict';

  angular
    .module('slackChallenge.footer', [])
    .controller('FooterController', FooterController);

  function FooterController ($scope) {
    $scope.myfooter = 'my footer haha';
  };

})();
