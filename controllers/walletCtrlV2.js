angular.module('romitApp').controller('walletCtrlV2', walletCtrlV2);

function walletCtrlV2($scope, $window, walletSvc) {

  // get wallet data from walletSvc
  $scope.walletData = walletSvc.getWalletData();

  // logic to set up how many cards to display at once, based on screen width
  if ($window.innerWidth > 600) { // if wide:
    // set first two cards in wallet to inView = true
    $scope.walletData[0].inView = true;
    $scope.walletData[1].inView = true;
  }
  else if ($window.innerWidth <= 600) { // if narrow:
    // set first card in wallet to inView = true;
    $scope.walletData[0].inView = true;
  }

  /*
  The following two functions live in walletSvc so they don't crowd the controller.
  */

  // function to scroll to next card in wallet
  $scope.nextCard = walletSvc.nextCard;

  // function to scroll to previous card in wallet
  $scope.prevCard = walletSvc.prevCard;

  // function called when clicking "manage" button
  $scope.manageCard = function() {
    alert("This button will either pop up a modal or go to a page to manage the user's payment methods.");
  };

  // function called when clicking "add new" button
  $scope.addPaymentMethod = function() {
    alert("This button will either pop up a modal or go to a page so the user can add a new payment method.");
  };
}
