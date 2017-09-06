(function() {

  'use strict';


  function TipoCustomJavascript(tipoHandle){

    //___TipoDefinition___

	function TipoDefinition_label_style_OnChange (data_handle) {
	if (data_handle.label === "Value Based Style") {
	         if (data_handle.context.allowed_values) {
	           var expression = "";
	           _.each(data_handle.context.allowed_values,function(value){
	             if (value !== data_handle.context.allowed_values[data_handle.context.allowed_values.length - 1]) {
	               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value) + " || ";
	             }else{
	               expression = expression + _.replace(_.replace(data_handle.new_value,"$field","$tipo." + data_handle.context.field_name),"$value",value);
	             }
	           });
	           data_handle.new_value = expression;
	         };
	       };
	}
	this.TipoDefinition_label_style_OnChange  = TipoDefinition_label_style_OnChange ;
	this.TipoDefinition_value_style_OnChange  = TipoDefinition_label_style_OnChange ;

	//___TipoDefinition___


	//___TipoAboutApp___

	function TipoAboutApp_OnView (data_handle) {
	tipoHandle.getTipo('TipoApp',tipoHandle.application_meta.application).then(function(tipo_res){
	 data_handle.tipo.app_name = tipo_res.app_name;
	 data_handle.tipo.app_version = tipo_res.app_version;
	 data_handle.tipo.app_link = tipo_res.app_url;
	 data_handle.tipo.app_description = tipo_res.app_description;
	 data_handle.tipo.mobile_app_qr_code = tipo_res.mobile_app_qr_cd;
	})
	}
	this.TipoAboutApp_OnView  = TipoAboutApp_OnView ;

	//___TipoAboutApp___

	//___AboutApp___

	function AboutApp_OnView (data_handle) {
	tipoHandle.getTipo('TipoApp',tipoHandle.application_meta.application).then(function(tipo_res){
	 data_handle.tipo.app_name = tipo_res.app_name;
	 data_handle.tipo.app_version = tipo_res. app_version;
	 data_handle.tipo.app_link = tipo_res. app_url;
	 data_handle.tipo.app_description = tipo_res. app_description;
	 data_handle.tipo.about_app_mobile_app_qr_code = tipo_res.mobile_app_qr_cd;
	})
	}
	this.AboutApp_OnView  = AboutApp_OnView ;

	//___AboutApp___


  }

  // Added Client Side Javascript Service in Custom Module
  angular.module('tipo.custom')
         .service('tipoCustomJavascript', TipoCustomJavascript);; 

})();