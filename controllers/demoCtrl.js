angular.module('romitApp').controller('demoCtrl', demoCtrl);

// inject user data into controller function
function demoCtrl($scope, userData) {
  // attach user data to scope so it can be passed to directive
  $scope.userData = userData;
};
