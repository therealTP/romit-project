angular.module('romitApp').directive('walletV2', walletV2);

/*
In V2 of the directive, the wallet data lives in the wallet service. walletSvc is injected into the walletV2 controller and attached to scope in the controller.
*/

function walletV2() {
  return {
      restrict: 'E',
      templateUrl: './../templates/walletTmpl.html',
      controller: 'walletCtrlV2',
      replace: true // helps with flexbox styling
  }
};
