(function () {
  'use strict';

  angular
    .module('creativeFamily', [])
    .controller('testController', testController);

  function testController($scope, $http) {
    $http.get('random.json').success(function(data) {
      $scope.response = data;
    }).error(function () {
      alert('Что-то пошло не так!');
    });
  }

})();