(function() {

  'use strict';

  // Tipo router. Contains common functions for state traversal, reload, etc.
  function TipoRouter(
    $rootScope,
    $state,
    $stateParams) {

    var _stateChanging = false;

    function isStateChanging(){
      return _stateChanging;
    }

    function startStateChange(){
      _stateChanging = true;
    }

    function endStateChange(){
      _stateChanging = false;
    }

    function getCurrent(){
      return $state.current;
    }

    function reloadCurrent(){
      var currentStateParameters = $stateParams;
      var reloadFlagParameters = _.keys(_.pick(currentStateParameters, function(value, key){
        return _.startsWith(key, 'reload');
      }));
      reloadFlagParameters = _.zipObject(reloadFlagParameters, _.fill(_.cloneDeep(reloadFlagParameters), true));
      return $state.go($state.current, reloadFlagParameters, {reload: true});
    }

    function to(state, reload, parameters){
      var stateOptions = angular.isDefined(reload) ? {reload: reload} : {};
      stateOptions.inherit = false;
      return $state.go(state, parameters, stateOptions);
    }

    function toParent(reload){
      var stateOptions = angular.isDefined(reload) ? {reload: reload} : {};
      return $state.go('^', undefined, stateOptions);
    }

    function toTipoList(tipoName, parameters){
      var stateOptions = {reload: 'tipoList'};
      parameters = parameters || {};
      parameters.tipo_name = tipoName;
      stateOptions.inherit = false;
      return $state.go('tipoList', parameters, stateOptions);
    }

    function toTipoCreate(tipoName, parameters){
      var stateOptions = {reload: 'tipoCreate'};
      parameters = parameters || {};
      parameters.tipo_name = tipoName;
      stateOptions.inherit = false;
      return $state.go('tipoCreate', parameters, stateOptions);
    }

    return {
      isStateChanging: isStateChanging,
      startStateChange: startStateChange,
      endStateChange: endStateChange,
      getCurrent: getCurrent,
      reloadCurrent: reloadCurrent,
      to: to,
      toParent: toParent,
      toTipoList: toTipoList,
      toTipoCreate: toTipoCreate
    };

  }

  angular.module('tipo.common')
    .factory('tipoRouter', TipoRouter);

})();