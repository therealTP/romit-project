angular.module('romitApp').directive('walletV1', walletV1);

/*
In V1 of the directive, the wallet data lives in the parent scope (in this case,
the home state/controller), which gets the data from the userSvc through a
resolve function in routing. It is passed into the directive scope via a two-way
"walletData" variable on the scope property (using "=" prefix), as seen below.
*/

function walletV1() {
  return {
      restrict: 'E',
      templateUrl: './../templates/walletTmpl.html',
      controller: 'walletCtrlV1',
      scope: {
        walletData: "="
      },
      link: function(scope, elem, attrs) {
        console.log("I know what the link function does!");
      },
      replace: true // helps with flexbox styling
  }
};
