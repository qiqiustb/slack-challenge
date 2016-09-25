(function(){
  'use strict';

  angular
    .module('slackChallenge.source', ["ngSanitize"])
    .controller('SourceCtrl', ['$scope', '$stateParams', '$sanitize', SourceCtrl]);

  function SourceCtrl ($scope, $stateParams, $sanitize) {
    $scope.word = "source page";
     $scope.$on('data', function(event, data){
        $scope.plain_source = data.source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        $scope.highlighted_source = $scope.plain_source;
     });
     $scope.$on('highlighed_tag', function(event, tag){
         console.log('called');
        var regs = [new RegExp("(&lt;)" + tag + "(&gt;)", 'gi'), new RegExp("(&lt;)" + tag + "(\\s)", 'gi'), new RegExp("(&lt;\\/)" + tag + "(&gt;)", 'gi')];
        var plain_source = $scope.plain_source;
        angular.forEach(regs, function(reg){
           plain_source = plain_source.replace(reg, '$1<mark>' + tag + '</mark>$2');
        });
        $scope.highlighted_source = plain_source;
     });

  };
})();
