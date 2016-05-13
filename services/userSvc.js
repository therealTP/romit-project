angular.module('romitApp').service('userSvc', userSvc);

function userSvc($q) {
  // dummy user data. private, can only be returned by getUserData fcn
  // usually, this data would be pulled from a server and injected
  // when the user logs in
  var userData = {
    name: 'Albert Einstein',
    email: 'al@einstein.com',
    user_type: 'consumer',
    profile_status: {
      percent_complete: 25,
      next_step: 'addAddress'
    },
    recent_transactions: [
      {
        vendor: 'eBay',
        amount: '35.55',
        currency: '$',
        credits: '15.5'
      },
      {
        vendor: 'Amazon',
        amount: '45.23',
        currency: '$',
        credits: '17.6'
      },
    ],
    wallet: [
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
    ]
  };

  // function to pull user data from the svc
  this.getUserData = function() {
    // create deferrer/custom promise using $q module
    var def = $q.defer();

    // always resolve promise with user data.
    // this will resolve the "resolve" function in routing
    def.resolve(userData);

    // return custom promise
    return def.promise;
  };
}
