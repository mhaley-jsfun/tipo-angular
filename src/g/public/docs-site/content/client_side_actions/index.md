---
title: Client Side Actions
weight: 5
---

## Introduction to Actions
Actions are a way of extending your application to provide custom functionality via buttons that run code that you specify. If you have used TipoTapp, then you have come upon Actions several times. On the UI, you have been engaging with controls at the top-right side of the screen. You can see an example of these below.

![Actions](/images/actions/image_001.png)

TipoTapp allows you to further extend your application by creating Custom Actions. The Actions are backed by code which is run when the user engages with the button. This code can either be local, or it can be run from the cloud. We'll soon see examples of both.

You can create Actions on list views, detail views and edit views. You can also specify Actions that run on deletion of an object. These are usually hidden and are run when the Delete button of a record is clicked. An example use case of this is: you might want to override the normal delete operation so that when the user presses delete, the record isn't deleted from the database, but only marked as deleted and removed from the UI.

## Client Side Actions

![Client Customizations](/images/developer/ClientCustomisations.png)

As mentioned, you can create an Action that runs code that is defined locally on TipoTapp. This type of Action is a Client Side Action. The code written must be in JavaScript. Lets see how you would go about creating a Client Side Action.

We'll create an Action on the Detail view of the Student Tipo, that will log some information about a particular record.

To create the Action, edit the Tipo and open the `View` tab. Open the Advanced Editor of `View` and add an Action with the name `Log`. Switch on the `Highlight` control (we'll see what this does later and select an icon for it. If you set an icon for an Action, it will appear as a round button with the icon on it. If you don't set an icon for it, only the text will show in a rectangular button.

![Create Action](/images/actions/image_002.png)

Add the following code to the JavaScript code and save the Tipo.

```js
data_handle.then(function(result) {
  console.log(result); // "Stuff worked!";
}, function(err) {
  console.log(err); // Error: "It broke"
});
```

Head to Home and select a Student record to view its Detail View. You will see a button on the top right of the view. Click it and check in your browser's Console to ensure that the record's First Name has been logged.

![Log Action](/images/actions/image_003.png)

In the above, we used the expression `` to refer to a record's first_name field. Below, are the patterns that govern expressions you can use.

Expression Pattern | Description | Client/Server
------------ | --------------- | ---------------
`$tipo_root`.<field_name> | Access data from the beginning of the object. | Client
`$tipo_root`.top_level_field.array[$index].child_field | Access data in other fields in the same array as  current. In PO line items, referring to line units in total can be accessed using `$tipo_root`.po_line_items[$index].units | Client
`$tipo`.<child_field> | Same example above can be expressed as `$tipo`.units | Client
`$tipo_handle`.user_meta | To access logged-in user details as documented in TipoHandle | Client
`$tipo_handle`.application_meta | To access logged-in application details as documented in TipoHandle | Client

## Tipo Handle
TipoHandle is a utility service that allows client side javascript to perform common operations such as fetching data from server, saving data or even tailoring the UI as required.

### ```application_meta```
Member name | Description
------------ | ---------------
`application_meta.application` | Application ID
`application_meta.application_owner_account` | Application Owner Account ID 

### ```user_meta```
Member name | Description
------------ | ---------------
`user_meta.tipo_id` | Currently it is the email address
`user_meta.account` | Subscriber account to which the user belongs
`user_meta.application` | Current application
`user_meta.application_owner_account` | Current application owner account ID
`user_meta.fully_qualified_username` | 'Application Owner ID'.'Application ID'.'tipo_id' (Used in Cognito)
`user_meta.role` | User role
`user_meta.user_attributes` | Additional attributes e.g. If the role is linked certain Tipos, during user invitation instances of those tipos are selected and stored in these user_attributes. for Student it would look like user_meta.user_attributes.Student.[212Student123]

### ```perspective```

Member name | Description
------------ | ---------------
`perspective.tipo_name` | Perspective TipoName
`perspective.display_name` | Perspective Tipo display name
`perspective.field_name` | Perspective field name
`perspective.tipo_id` | Perspective Tipo ID

###  ```getConfirmation (user_message) ```
Present user with a confirmation message and get user response.

	- user_message : User will be prompted to confirm using this user message.
	// return boolean; True if user selected "Yes".

	Example Usage:
	tipoHandle.getConfirmation("Please confirm if the object 234234 can be saved or deleted.");

###  ```hideElement (element_class) or showElement(element_class) ```
Each field has a class associated to uniquely identify the field to hide or show.
Example 1: Say Purchase Order has a order_total field, there will be a class called `order_total`.
Example 2: To hide something in an array of a group field, i.e. in a Purchase Order line item description, a class will be associated with the line item description in the following pattern: `line_item_n_description` (`n` is the array index) 

	- element_class: element identifier to show/hide element
	//return void;
	
- Scenario 1: Hide or Show Fields
- Scenario 2: Hide or show Actions
Each action uses action_name as the class associated to uniquely identify the action, so that it can be hidden or shown. If the action is already hidden in the meta-data, it will not be available in the client for show/hide
	
### ``` getTipoDefinition(tipo_name) ```
Fetch TipoDefinition for the Tipo specified in `tipo_name`.

	- tipo_name : Tipo name to fetch TipoDefinition for.
	// return TipoDefinition(as a promise)

### ``` callAction(tipo_name, action_name, selected_tipo_ids, additional_tipo_name, additional_tipo) ```
Perform action specified in `action_name` on the Tipo specified in `tipo_name`.

	- tipo_name: Tipo name of the detail view to be refreshed.
	- tipo_id: Tipo Id for which detail view to refresh.
	- selected_tipo_ids: this is an array that contains the selected tipo ids.
	- additional_tipo_name: if there is additional data that action requires specify the name here.
	- additional_tipo: supply the additional data here.
	// return tipo_response(as a promise); //result from the server is supplied back to the caller.

### ``` routeTo(url) ```
User will be presented with the URL specified in `url`. Please specify the path after the `#` character.

	- url : resource location after `#`. E.g. /tipo/PurchaseOrder/93829282782 or /tipo/Customer
	// return void;

### ``` saveTipo(tipo_name, tipo_id, tipo_data) ```
Save tipo on server with the data supplied in `tipo_data`.

	- tipo_name
	- tipo_id
	- tipo_data
	// return boolean(as a promise); If true save tipo is successful.

### ``` saveTipos(tipo_name, tipo_data) ```
Save array tipo on server with the data supplied in `tipo_data`.

	- tipo_name
	- tipo_data
	// return boolean(as a promise); If true save tipo is successful.
	
### ``` createTipo(	tipo_name, tipo_data, query_params) ```
Create tipo on server with the data supplied in `tipo_data`.

	- tipo_name
	- tipo_data
	- query_params
	// return boolean(as a promise); If true save tipo is successful.

### ``` createTipos(tipo_name, tipo_data, query_params) ```
Create array of tipos on server with the array data supplied in `tipo_data`.

	- tipo_name
	- tipo_data
	- query_params
	// return boolean(as a promise); If true save tipo is successful.

### ``` deleteTipo(tipo_name,tipo_id) ```
Delete tipo with name specified in `tipo_name` and ID specified in `tipo_id`.

	- tipo_name
	- tipo_id
	// return boolean(as a promise); If true delete tipo is successful.

### ``` getTipo(tipo_name, tipo_id, query_params) ```
Get tipo data for `tipo_name` with ID specified in `tipo_id`.

	- tipo_name
	- tipo_id
	- query_params
	// return promise;

### ``` getTipos(tipo_name, query_params) ```
Get tipo data for `tipo_name` with query parameters specified in `query_params`.

	- tipo_name
	- query_params
	// return promise;
	
### ``` presentForm(tipo_name, tipo, context, submit_label, show_cancel) ```
Present create form using the structure of the tipo definition specified in `tipo_name` and the `submit_label` is displayed to the user. This function does not save the data collected on the server, instead it will simply save data in `tipo_data`.
	
	- tipo_name: Tipo name for which create form will be presented to the user
	- tipo: once user submits data is saved in this object
	- submit_label: Name to the submit button
	- show_cancel: boolean to indicate if the cancel button should be displayed
	- context: If an action is performed on a tipo, and if the client side dependency form presented requires base tipo data use this object. 
	// return void;
	

### ``` presentFormWithData(tipo_name, tipo, submit_label, show_cancel) ```
Present edit form using the structure of the tipo definition specified in `tipo_name` and the `submit_label` is displayed to the user.
	
	- tipo_name: Tipo name for which edit form will be presented to the user
	- tipo: data from this will be presented to the user and also after user submits, the results are saved in this object
	- submit_label: name to the submit button
	- show_cancel: boolean to indicate if the cancel button should be displayed
	//return void;

### ``` generateTipoConfigs(file) ```
Provide a JSON file to generate TipoDefinition from JSON data sample.

## Tipo Level Events
Tipo level events are fired when a new instance of a tipo is created/cloned, updated, deleted, listed and clicked in a list.

### OnList: ``` `<Tipo Name>`_OnList(data_handle) ```
This is triggered before presenting the list of tipos in a list view. The can be useful to suppress certain items or add some additional items to the list returned by the server.

    - tipoHandle: handle to the utility service
    - data_handle.tipo_list: list of tipos,
    // return void;

### OnCreate: ``` `<Tipo Name>`_OnCreate(data_handle) ```
This is triggered when user performs create new or clone in the list view. Only short display fields will be present the tipo_list and cloned_tipo.

    - tipoHandle: handle to the utility service
    - data_handle.tipo_list: if the create is performed from the list view, this contains all the tipos in the list view. 
    - data_handle.cloned_tipo - Present only if the create event was fired due to clone operation. 
    // return boolean; //Return true to continue creating/saving tipo

### OnClick: ``` `<Tipo Name>`_OnClick(data_handle) ```
This is triggered only when the list item is clicked in the list view. When actions like, delete/clone are performed on a tipo in the list view, this event is not fired. Only short display fields will be present the tipo_list and selected_tipo. 

    - tipoHandle: handle to the utility service
    - data_handle.tipo_list: list of tipos in the list view
    - data_handle.selected_tipo - tipo data for the selected tipo.
	// return boolean; //Return true to continue creating/saving tipo
    
### OnDelete: ``` `<Tipo Name>`_OnDelete(data_handle) ```
This event is triggered when a tipo is selected for deletion. This can be useful to control the behaviour when a tipo is deleted. For example, if this is a prent (TODO: present?) tipo and this event can be used to delete the child tipos before continuing with the deletion.

    - tipoHandle: handle to the utility service
    - data_handle.tipo: contains  data for the tipo that is selected for deletion.
    // return boolean/promise; Returns true, default delete will be executed. Returns false, default action will not be executed.

### OnView: ``` `<Tipo Name>`_OnView(data_handle) ```
This event is fired when user selects tipo for viewing. Before presenting the detailed view any customisations required can be performed using this event.
	
	- tipoHandle: handle to the utility service.
	- data_handle.tipo: contains data for the tipo that is selected for viewing details of the tipo.
    // return void;

### OnSave: ``` `<Tipo Name>`_OnSave(data_handle) ```
OnSave is fired when a new tipo is created or edited. In both cases, before sending the data to server, this event is fired. Data going to server can be modified by changing the data in tipo. Tipo Handle provides a number of functions to save an object in server. 

	- tipoHandle: handle to the utility service.
	- data_handle.tipo: contains data for the tipo.
	- data_handle.mode: contains whether the Save is triggered from create or edit mode
    // return boolean/promise; Only if true data will be saved in the server.

## Tipo Field Level Events
//TODO for Murali. The following still needs to be documented properly.

### OnChange:	``` `<Tipo Name>`_`<FieldName>`_OnChange(data_handle)```
This is applicable only in create or edit forms. This event is triggered when user changes the value of a field.

	- tipoHandle: handle to the utility service.
	- data_handle.tipo: contains data for the tipo.
	- data_handle.context: handle to the current context in a deep json structure. When in an array to refer to the neighboring field that is in the same array index, simply use this.
	- data_handle.old_value: value before change
	- data_handle.new_value: value after change.
	// return boolean; If true change is propagated, if false change is not propagated.
    
### OnArrayItemAdd:	``` `<Tipo Name>`_`<FieldName>`_OnArrayItemAdd(data_handle)```
	- tipoHandle: handle to the utility service.
	- data_handle.tipo: contains data for the tipo.
	- data_handle.context: handle to the current context in a deep json structure. When in an array to refer to the neighboring field that is in the same array index, simply use this.
	- data_handle.array: handle to the array
	- data_handle.item: newly added item.
	// return boolean; If true add will continue;
	
### OnArrayItemRemove: ``` `<Tipo Name>`_`<FieldName>`_OnArrayItemRemove(data_handle)```
	- tipoHandle: handle to the utility service.
	- data_handle.tipo: contains data for the tipo.
	- data_handle.context: handle to the current context in a deep json structure. When in an array to refer to the neighboring field that is in the same array index, simply use this.
	- data_handle.array: handle to the array
	- data_handle.item: removed item.
	// return boolean; If true delete will continue;

### BeforeLookup: ``` `<Tipo Name>`_`<FieldName>`_BeforeLookup(data_handle)```
	- tipoHandle: handle to the utility service.
	- data_handle.tipo: contains data for the tipo.
	- data_handle.context: handle to the current context in a deep json structure. When in an array to refer to the neighboring field that is in the same array index, simply use this.
	- data_handle.query_params: is an array of objects with two fields `param_name` and `param_value`. Important key is `tipo_filter` that contains the filter used on the server side for lookups. By altering this, the lookup behaviour can be altered.
	// return void;

### AftereLookup: ``` `<Tipo Name>`_`<FieldName>`_AfterLookup(data_handle)```
	- tipoHandle: handle to the utility service.
	- data_handle.tipo: contains data for the tipo.
	- data_handle.context: handle to the current context in a deep json structure. When in an array to refer to the neighboring field that is in the same array index, simply use this.
	- data_handle.tipo_list: contains the result data of lookup.
	- data_handle.options: an array of objects with two fields `key` and `label`
	// return void;

## Tipo Actions
These are javascript based actions that run on the client side in the browser.

### OnCick: ``` `<Tipo Name>`_`<action_name>`(data_handle)```
Perform action specified in `action_name` on the Tipo specified in `tipo_name`. This function will be called after capturing the client-side dependency, if exists.

	- data_handle.tipo_name: Tipo name on which action is performed.
	- data_handle.action_name: Name of the action performed
	- data_handle.selected_tipo_ids: this is an array that contains the selected tipo ids.
	- data_handle.additional_tipo_name: This is the client side dependency tipo name
	- data_handle.additional_tipo: Client side dependency data
	- data_handle.selected_tipos: In the list view this will be an array, and in the detail/create/edit view this is single object on which the action is performed.
	// return void;