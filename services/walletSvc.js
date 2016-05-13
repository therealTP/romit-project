angular.module('romitApp').service('walletSvc', walletSvc);

function walletSvc() {
  // dummy wallet data
  // would usually be retrieved from a sever when user logs in
  var walletData = [
    {
      id: '8a8sdf0asdfas8asdj7asd',
      provider: 'Visa',
      digits: '0434',
      name: 'CapitalOne Credit',
      type: 'CREDIT',
      img_url: 'http://www.alumni.ucsd.edu/s/1170/images/editor/3_events/triton_connect/silicon_valley/visa_logo.png'
    },
    {
      id: '3asdf3ad3sdfas8asdj7asd',
      provider: 'Wells Fargo',
      digits: '5659',
      name: 'Personal Checking',
      type: 'CHECKING',
      img_url: 'http://assessmentspecialists.com/images/client-logos-wells-fargo.jpg'
    },
    {
      id: '7ga7sgassdfas8asdj7asd',
      provider: 'Mastercard',
      digits: '9065',
      name: 'Business Debit',
      type: 'DEBIT',
      img_url: 'http://www.alumni.ucsd.edu/s/1170/images/editor/3_events/triton_connect/silicon_valley/visa_logo.png'
    },
    {
      id: '3g5dga5sdfas8asdj7asd',
      provider: 'Amex',
      digits: '2342',
      name: 'Amex Black Card',
      type: 'CREDIT',
      img_url: 'http://assessmentspecialists.com/images/client-logos-wells-fargo.jpg'
    }
  ];

  // getter function to be used by V2 directive to retreive wallet data
  this.getWalletData = function() {
    return walletData;
  };

  /*
  The following two functions would crowd the controller. So, I moved them to the service to keep the controller lean.
  */

  // scroll to next card
  this.nextCard = function(walletData) {
    // find first card inView
    var firstInView = walletData.findIndex(function(card) {
      return card.inView === true;
    });

    // if two cards are in view, i.e. screens > 600px wide:
    if (walletData[firstInView + 1].inView) {
      // if at end of cards, don't keep scrolling through, return function.
      if (firstInView + 1 === walletData.length - 1) {
        return;
      }
      // set card after 2nd in view card to inView = true
      walletData[firstInView + 2].inView = true;
    } else {
      // if at end of cards, don't keep scrolling through. return function.
      if (firstInView === walletData.length - 1) {
        return;
      }
      // set card after first in view card to inView = true
      walletData[firstInView + 1].inView = true;
    }

    // take first card out of view (after running through logic above)
    walletData[firstInView].inView = false;
  };

  // scroll to previous card
  this.prevCard = function(walletData) {
    var lastInView;
    // loop backwards through array to find index of last card in view
    for (var i = walletData.length - 1; i >= 0; i--) {
      if (walletData[i].inView) {
        lastInView = i;
        break;
      }
    }

    // if two cards are in view, i.e. screens > 600px wide:
    if (walletData[lastInView - 1].inView) {
      // if first card in view is first card in wallet, i.e. at front of cards:
      if (lastInView - 1 === 0) {
        return;
      }

      // set card 2 spots before of last in view card to inView = true
      walletData[lastInView - 2].inView = true;
    } else {
      // if first card in view is first card in wallet, i.e. at front of cards:
      if (lastInView === 0) {
        return;
      }

      // set card before last in view card to inView = true
      walletData[lastInView - 1].inView = true;
    }

    // take last card out of view (after running through logic above)
    walletData[lastInView].inView = false;
  };
}
