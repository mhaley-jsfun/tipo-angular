(function() {

  'use strict';

  function registerStates($stateProvider) {

    var confirmRegistrationState = {
      name: 'confirmRegistration',
      url: '/confirmation?customer_id&customer_name&subscription_id&email',
      parent: 'root',
      templateUrl: 'user/_views/confirmation.tpl.html',
      controller: 'UserController',
      controllerAs: 'userController'
    };

    var loginState = {
      name: 'login',
      url: '/login?plan',
      parent: 'root',
      params: {
        'retry': null
      },
      templateUrl: 'user/_views/login.tpl.html',
      controller: 'UserController',
      controllerAs: 'userController'
    };

    var forgotPassState = {
      name: 'forgotPass',
      url: '/forgotpass',
      parent: 'root',
      templateUrl: 'user/_views/forgotpass.tpl.html',
      controller: 'UserController',
      controllerAs: 'userController'
    };

    var forgotPassInfoState = {
      name: 'forgotPassInfo',
      url: '/forgotpass-info',
      parent: 'root',
      templateUrl: 'user/_views/forgotpass-info.tpl.html'
    };

    var resetPassState = {
      name: 'resetPass',
      url: '/resetpass?code&email',
      parent: 'root',
      templateUrl: 'user/_views/resetpass.tpl.html',
      controller: 'UserController',
      controllerAs: 'userController'
    };

    $stateProvider
      .state(loginState)
      .state(confirmRegistrationState)
      .state(forgotPassState)
      .state(forgotPassInfoState)
      .state(resetPassState);
  }

  function configureModule($stateProvider) {
    registerStates($stateProvider);
  }

  var module = angular.module('tipo.user', []);
  module.run(function ($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {
        $rootScope.$previousState = from;
        $rootScope.$previousParams = fromParams;
      });
  });

  module.config(function ($stateProvider) {
    configureModule($stateProvider);
  });

})();