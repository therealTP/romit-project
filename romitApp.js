// define new module called romitApp w/ dependencies & config function
angular.module('romitApp', ['ui.router', 'ngAnimate']).config(configFcn);

/*
This routing function is to show my knowledge of angular routing,
and to demo an alternate way of passing data to the wallet directive using
a "resolve" function.
*/

// set up routing with config function
function configFcn($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('demo', {
    url: '/demo',
    templateUrl: './templates/demoTmpl.html',
    controller: 'demoCtrl',
    // Method #1 of getting wallet data into wallet directive starts with this:
    // before page loads, load user data from userSvc
    // and make it injectable into the page ctrl
    resolve: {
      userData: function(userSvc) {
        return userSvc.getUserData();
      }
    }
  });

  // set default state to demo.
  $urlRouterProvider
  .otherwise('/demo');
}
