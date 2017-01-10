(function() {

  'use strict';

  function getAllInterceptors($http, $q, securityContextService, tipoErrorHandler) {

    function refreshAccesstoken() {
      var deferred = $q.defer();
      // Refresh access-token logic
      securityContextService.relogin(deferred);
      return deferred.promise;
    }
    
    return {
      request: {
        // Removes any unnecessary fields that are passed to the backend
        sanitize: function(element, operation) {
          if (operation === 'remove') {
            return null;
          } else {
            return element;
          }
        },
        security: function(element, operation, route, url, headers, params, httpConfig) {
          var accessToken = securityContextService.getCurrentAccessToken();
          if(!_.isUndefined(accessToken)){
            headers = _.extend(headers, {'Authorization': accessToken});
          }
 
          return {
            element: element,
            headers: headers,
            params: params,
            httpConfig: httpConfig
          };
        }
      },
      response: {
        // Extracts the payload from the wrapped API response
        extractData: function(rawData) {
          if(rawData && rawData.response){
            return rawData.response;
          } else if(rawData && rawData.data){
            return rawData.data;
          } else{
            return rawData;
          }
        }
      },
      errors: {
        handleError: function(response, deferred, responseHandler) {
          console.log('error handling');
          console.error(response);

          if(response.status === 401) {
            refreshAccesstoken().then(function() {
              // Repeat the request and then call the handlers the usual way.
              response.config.headers.Authorization = securityContextService.getCurrentAccessToken();
              $http(response.config).then(responseHandler, deferred.reject);
              // Be aware that no request interceptors are called this way.
            });
            return false;
          }else{
            tipoErrorHandler.handleError(response, deferred);
          }
          return true;
        }
      }
    };
  }

  // Configures Restangular for API interactions
  function configureRestangular(
    RestangularConfigurer,
    $http,
    $q,
    $window,
    securityContextService,
    tipoErrorHandler) {

    var interceptors = getAllInterceptors($http, $q, securityContextService, tipoErrorHandler);
    var location = $window.location;
    var relativeUrl = location.pathname;
    if(_.startsWith(relativeUrl, '/app')){
      relativeUrl = '/api' + relativeUrl.substring(4);
    }else{
      relativeUrl = '/api';
    }
    var baseUrl = location.origin + relativeUrl;
    console.info('API Url - ' + baseUrl);
    RestangularConfigurer.setBaseUrl(baseUrl);
    RestangularConfigurer.setPlainByDefault(true);
    //RestangularConfigurer.addRequestInterceptor(interceptors.request.sanitize);
    RestangularConfigurer.addFullRequestInterceptor(interceptors.request.security);
    RestangularConfigurer.addResponseInterceptor(interceptors.response.extractData);
    RestangularConfigurer.setErrorInterceptor(interceptors.errors.handleError);
    RestangularConfigurer.setDefaultHeaders({'Content-Type': 'application/json'});
    RestangularConfigurer.setDefaultHttpFields({cache: true});
  }

  // Tipo Resource. This shall be used for invoking the Tipo REST APIs
  function TipoResource($http, $q, $window, Restangular, securityContextService, tipoErrorHandler) {
    var factory = Restangular.withConfig(_.partialRight(configureRestangular, $http, $q, $window, securityContextService, tipoErrorHandler));
    return factory;
  }

  angular.module('tipo.common')
    .factory('tipoResource', TipoResource);

})();