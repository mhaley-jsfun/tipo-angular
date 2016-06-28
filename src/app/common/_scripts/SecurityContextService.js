(function() {

  'use strict';

  var SECURITY_CONTEXT_KEY = 'security_context';

  function SecurityContextService(
    localStorageService,
    tipoRouter,
    $location) {

    var _instance = this;
    
    function getCurrentContext(path){
      var securityContext = localStorageService.get(SECURITY_CONTEXT_KEY);
      if(!_.isUndefined(path)){
        return _.get(securityContext, path);
      }else{
        return securityContext;
      }
    }

    this.saveContext = function(securityContext) {
      localStorageService.set(SECURITY_CONTEXT_KEY, securityContext);
    };

    this.clearContext = function() {
      if (localStorageService.get(SECURITY_CONTEXT_KEY) === null) {
        return false;
      }
      localStorageService.remove(SECURITY_CONTEXT_KEY);
      return true;
    };

    this.getCurrentUser = function(){
      return getCurrentContext('loggedInUser');
    };

    this.getCurrentAccessToken = function() {
      return getCurrentContext('tokenDetails.access_token');
    };

    this.logout = function(){
      _instance.clearContext();
      var currentUrl = $location.path();
      if(!currentUrl.endsWith('login')){
        routingUtilityFactory.transitionToState('login', 'login');
      }
    };
  }

  angular.module('tipo.common')
    .service('securityContextService', SecurityContextService);

})();