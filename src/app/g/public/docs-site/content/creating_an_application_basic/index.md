---
title: Creating an Application - Basic
weight: 2
---

## Introduction
When you log in to your TipoTapp account, the first view that you'll see is the Home Page of the Dashboard with the `My Apps` tab selected. This is where you'll be able to access your created apps.

![My Apps](/images/creating_an_application_01.png)

TipoTapp allows you to create several applications. Each application that you create will own its data and it will also be isolated from other applications.

For each application that you create, you will have to model the objects that will hold its data. Objects are referred to as `Tipo`s and each Tipo represents a core module in your application. For example if you were to create a hospital management application, you might have the following Tipos: `Doctor`, `Patient`, `Department`, e.t.c. Each Tipo has fields that define its data. For example the `Doctor` Tipo might have the fields `ID`, `First Name`, `Last Name`, `Social Security Number`, `Department`, e.t.c.

Other than creating the objects that will hold your application's data, you can define access controls that will determine the access permission that different users will have when using the app. By combining different data and logic operations in your Tipos, you can create very simple to extremely complicated applications.

To guide you in creating your application on TipoTapp, we have provided a thourough guide that has been divided into three sections: Basic, Intermediate and Advanced. This is the **Basic** section and if you take a look at the menu on the left panel, you will find links to the other two. The guide will walk you through the process of creating and configuring an application. It will start with the basics of creating the application and proceed to more complex concepts.

As you follow along with the **Creating an Application Guide**, you will be presented with information in a need-to-know basis. The TipoTapp interface can be a bit complex, so it will be overwhelming if we presented everything to you at once. At each point, we'll present you with the information you need to complete the task at hand. Because of this, there will be some parts of the UI that won't be explained when you happen upon them. So don't be alarmed when you encounter this as every feature of TipoTapp will eventually be covered. We have also provided a [Reference Guide](/reference_manual/index.html) that contains a summarised description of important concepts and features for your browsing. We have also written a guide that explores [TipoTapp's Interface](/tipotapp_interface/index.html), so if you ever have a question regarding a UI element, you can go quickly search through that.

This first section of the **Creating an Application Guide**, will cover:

 - How to create an application
 - How to add data objects (Tipos) to the app, specify the fields each Tipo will contain and the type of data that will be stored in the field
 - How to add data (records) to the app
 - How to customize the appearance of the app. This will range from customizing how the app looks (logo, font, colours) to customizing other aspects such as  how data is displayed and the appearance of forms
 - How to customize email templates
 - How to invite users to the app, assign them roles and control their data access

## Creating the Application
To demonstrate the process of creating an application with TipoTapp, we are going to create an application that could be used in a higher-learning institution to manage student data. In this section of the guide, the app will start off simple with a few Tipos and then get more complex as we move to the Intermediate and Advanced sections.

We'll name the app **Student Management System** and the following are the Tipos that we'll add to it in this section and their respective fields:

**Student**

 - Student ID
 - First Name
 - Middle Name
 - Last Name
 - Date of Birth
 - Gender
 - Address
 - Phone Number
 - Email
 - Admission Date
 - Admission Number
 - Course
 
**Address**

 - Address ID
 - Street Address
 - Address Line 1
 - Address Line 2
 - State
 - Suburb/County
 - State/Province/Region
 - Country
 - Zip/Postal Code
 
**Course**

 - Course ID
 - Name
 - Units
 
**Unit**

 - Unit ID
 - Name

{{< note title="Tip" >}}
It is usually a good idea to start out planning your application on paper. Draft out what it will do, what data it will contain, who will have access to the data and the actions they will be able to take. Once you have this, creating the application will be much faster.
{{< /note >}}

To create an application, click on the + button on the bottom right side of the screen.

On the page that appears, fill in the details for the application.

![My Apps](/images/creating_an_application_02.png)

The App Name is the only required field here. You must ensure that the name entered is unique to your account. A user account cannot have apps sharing the same name. You can also add a Description of the app and select an Icon from a list of available Material Design icons.

The `App Link` will be automatically generated. As the name implies, this will be the URL used to access the app. For now, you can ignore the `App Version` field, this will be covered later on when we discuss Version Control.

If you publish an app as a Sample App, it will be publicly available and accessible via the `Sample Apps` tab of the Home Page.

![Sample Apps](/images/creating_an_application_03.png)

Here you'll find other apps that you can take a look at to see what's possible to build with TipoTapp. You can copy these and play around with them to get a feel of the system.

After creating an app, it will be visible on the Dashboard. Below, you can see the app we created with a custom Description and App Icon.

![Student Management System](/images/creating_an_application_04.png)

## Modelling App Data
You just created an application and it's immediately available for use, but without any useful data, it is not that useful to you. In this section, we'll take a look at how you can model your app's data.

From the Dashboard, click on the app you just created. A new tab will be opened in your browser. This view of the Dashboard will be specific to that application and you can use it to configure the app.

On the Dashboard, on the left menu, you will see some Tipos listed there. Applications that you create come pre-loaded with some Tipos that you can choose to delete, edit or use as-is. There is no data that has been added for any of the Tipos, but you can add a record by using the + button at the bottom right of the screen.

![Customer records](/images/creating_an_application_05.png)

The generated Tipos correspond to some of the Tipos that we are going to eventually create for the Student Management System, namely: `Student`, `Course`, `Unit`, `Admin` and `Departments`. You can keep these Tipos in your application and just continue reading through the guide without creating them yourself, but we are going to deleting ours and build the app from scratch.

To edit the app's data objects, head over to the `Develop` menu by selecting the wrench icon on the top-right of the screen. The first page you'll see here will display some information about the app. Using the controls on the top-right of the screen, you can edit this data or you can delete the app altogether.

![Develop menu](/images/creating_an_application_06.png)

Open the menu to the left and select `App Definitions`. Remember, we'll thouroughly cover the interface later on, so for now, you don't need to know what the other options in the menu do.

![Develop menu](/images/creating_an_application_07.png)

The App Definitions menu displays Tipos that have been created to hold the app's data. Here you can view, edit, create and delete Tipos. At the moment, we can see the following Tipos that were automatically generated with the new app: `MasterData`, `Departments`, `Staff`, `Course`, `Unit`, `Student` and `Address`. Feel free to click on any Tipo to see its various fields.

We'll delete the `MasterData`, `Departments`, `Staff`, `Course`, `Unit` and `Student` Tipos here. We'll keep the `Address` one, since the `Student` Tipo that we'll create will store the studen't address, thus there is no need to recreate this object.

To delete a Tipo, select it from the menu and click on the middle Delete button at the top-right of the screen.

![Delete button](/images/creating_an_application_08.png)

With the App Definitions menu selected, use the + button at the bottom-right of the screen to add a Tipo to the app. We'll start with the `Unit` Tipo that will hold data related to a course unit. We'll keep things simple though. Our `Unit` object will only store the unit's ID and name.

At the top of the page that comes up, you can enter the Tipo's Meta Data. Below we've filled out its Name, Description, Icon and Menu. With the Home menu selected, the Tipo will appear on the Home menu and we'll be able to access its records from there.

![Field meta data](/images/creating_an_application_09.png)

To add fields to the Tipo, select the + control to the right of the `Fields` section and fill out the field's data. With this view of the Field control, you can add basic information about the field as shown.

![Field view](/images/creating_an_application_10.png)

Remeber we had mentioned that a Unit will have two fields: `Unit ID` and `Name`. There is no need to add an ID field as this will be automatically generated for any Tipo you add to the application.

The `Sequence` will hold a number that will determine the order the field will have among other fields belonging to the Tipo. If you leave this blank, it will be autogenerated by incrementing the Sequence value of a previous field. The ID field that will be autogenerated will have Sequence of `-1` and the Sequence of other fields that you add to the Tipo (while leaving the `Sequence` field blank) will start at `1` and increment from there.

The `Field` holds the name of the field and the `Type` specifies the type of data the field will hold. You can select the value from a list of Basic tipo Types or from Tipo Objects. We select `Simple String` for this field.

![Field type](/images/creating_an_application_11.png)

When you turn on `Short Display`, the field will be visible whenever an instance of the Tipo is displayed in a listview. This can be seen when viewing the records of a certain Tipo or in a form where the particular Tipo is embedded in another Tipo (we'll see an example of this later on).

Basically any data object you can add on TipoTapp, has two Edit menus - a Basic one and an Advanced one. To access the Advanced menu, use the following icon that is located to the right of the Basic menu.

![Advanced edit](/images/creating_an_application_12.png)

If you open the Advanced Edit menu of the Name field we just added, you will see a lot more options that you can configure for the field. We'll cover what they all do in another part of the documentation, but for now head over to the `Data Settings` section and switch on the `Meaningful Key?` control.

To explain what this does, let's first take a look at the `Course` Tipo that we'll create. As mentioned previously, a Course will have the following fields: `Course ID`, `Name` and `Units`. The Units that a course will have will be of type `Unit`. When creating a Course record, we'll be able to select its units from a dropdown menu. Without specifying any of the Tipo's fields as the `Meaningful Key`, the ID will be taken as the Meaningful Key and it is what will be displayed in the list of Units on the dropdown menu. Also, when viewing a particular course's details, its Units will just appear as a list of IDs. This won't be very useful as it will be hard to identify the various Units. So, by switching on `Meaningful Key` for the `Name` field of the Unit Tipo, a Unit's name will be visible whenever the Unit is part of another Tipo.

You can mark several fields of a Tipo as the Meaningful Key, but if you do this, only the first field that has been marked as Meaningful Key will be considered. Later on in the guide, we'll look at how you can create multiple-field Meaningful Keys which are meaningful keys consisting of one or more fields.

Finally, scroll down the Advanced Edit menu and turn on the `Mandatory?` switch in the `Display Settings` section. With this switched on, the field will be a Required field and an instance of the Tipo won't be able to be saved without entering some value for the field.

Click on the `DONE` button at the bottom-right of the Advanced Editor to go back to the Basic Editor and from there, you can save the Tipo with the check mark Button at the top-right.

If you head back to `App Definitions` from the menu, you will see the newly created Tipo listed there. From here, you can edit or delete the Tipo.

Next, we'll add the `Course` Tipo. Use the `+` button from `App Definitions` to bring up the Tipo creation form.

Fill out the following fields in the `Meta Data` section:

 - **Name**: Course
 - **Description**: Course Tipo
 - **Icon**: school
 - **Choose Menu**: Home

Add the `Name` field to the Tipo with the following values:

 - **Field**: Name
 - **Type**: Simple String
 - **Short Display**: Yes
 - **Mandatory** (from Advanced Editor): Yes
 - **Meaningful Key** (from Advanced Editor): Yes
 
Then add the `Units` field to the Tipo with the following values:

 - **Field**: Units
 - **Type**: Unit (selected from the `Tipo Objects` section)
 - **Multi-valued/Array** (from `Data Settings` section of the Advanced Editor): Yes
 
Setting a field as `Multi-valued/Array` will allow the field to hold several values. This is appropriate since each course will be able to have several Units associated to it.

Lastly, add the `Student` Tipo with the following values.

`Meta Data`:

 - **Name**: Student
 - **Description**: Student Tipo
 - **Icon**: perm identity
 - **Choose Menu**: Home
 
`First Name` field:

 - **Field**: First Name
 - **Type**: Simple String
 - **Short Display**: Yes
 - **Mandatory** (from Advanced Editor): Yes
 
`Middle Name` field:

 - **Field**: Middle Name
 - **Type**: Simple String

`Last Name` field:

 - **Field**: Last Name
 - **Type**: Simple String
 - **Short Display**: Yes
 - **Mandatory** (from Advanced Editor): Yes
 
`Date of Birth` field:

 - **Field**: Date of Birth
 - **Type**: Date/Time
 - **Mandatory** (from Advanced Editor): Yes
 
`Gender` field:

 - **Field**: Gender
 - **Type**: Simple String
 - **Short Display**: Yes
 - **Mandatory** (from Advanced Editor): Yes
 - **Allowed values** (from `Data Settings` section of the Advanced Editor): Male, Female, Other
 
Adding `Allowed values` to a field will add a drop down menu to that field in the Tipo creation form, populated with the values you insert here.
 
{{< warning title="Note" >}}
Do not separate the options with commas, instead press the `Return` key after every option entered. This will ensure that every value entered before `Return` is a separate option. If you use commas, then the value ` Male, Female, Other` will be taken as a single option. If you use Return, then your options should look as shown below.
{{< /note >}}

![Allowed values](/images/creating_an_application_13.png)
 
`Address` field:

 - **Field**: Address
 - **Type**: Address (selected from the `Tipo Objects` section)
 - **Mandatory** (from Advanced Editor): Yes
 - **Relationship Type** (from `Relationship Settings` section of the Advanced Editor): embed
 
Each Student will have an address. Instead of adding address-related fields to the Student tipo, we instead separate them out into another Tipo: `Address`. TipoTapp is modelled on [Object Oriented Programming principles](https://en.wikipedia.org/wiki/Object-oriented_programming) and one concept that we encourage is the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) when building your Tipos. Your Tipos should follow the [single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle) in that, a Tipo should have responsibility over a single part of the functionality provided by the software.

Having address-related data in a separate Tipo also encourages object reuse. If we decided to add a `Teacher` or `Staff` Tipo to the application, we could reuse the `Address` Tipo here instead of creating address fields in these Tipos.

For the Student Tipo, we specify `embed` as the relationship type of the Address field. There are two relationship types: `embed` and `reference`.

With `embed`, the Tipo will be embedded into the current Tipo. This is used in cases where a copy of another object is required instead of a reference. You'll see later in the Student creation form, fields from the Address Tipo will be part of the form as though they are part of the Student Tipo.

With `reference` relationship, only the Tipo's key will be stored in the current Tipo.

{{< note title="Note" >}}
There are two caveats about the embedded Tipos that we want you to note at this point:

 - Whether or not the fields belonging to the embedded Tipo appear in listviews depends on the `Short Display` value of those fields and not on the `Short Display` value of the particular field in the current Tipo. To clarify this further, let's look at the Student Tipo. We haven't switched on the `Short Display` value for its Address field. However, the `Address` has some fields whose `Short Display` has been switched on. Therefore, these fields will be visible even though the `Address` field of the Student Tipo has been set to not be visible. If you don't want an embedded field to be displayed, you should turn off `Short Display` for all its fields as well.
 - When you select `embed` for a Tipo's field and also specify that field as `Mandatory`, the field will pass validation as long as there is any value entered in the embedded Tipo's fields. For example, in this example, we set the Student's Address field as `Mandatory`, but if you take a look at the `Address` Tipo, its fields haven't been set as `Mandatory`. Therefore, as long as the user enters a value for at least one Address field, then the form will pass. Obviously, this isn't the behaviour you'd like so you should also edit the Address Tipo and set some of its important field as `Mandatory` (e.g. `Address Line 1`, `Country`, `Zip/Postal Code`). We won't do this in this guide, we'll leave it up to you.
{{< /note >}}

`Phone Number` field:

 - **Field**: Phone Number
 - **Type**: Simple String
 - **Short Display**: Yes
 - **Mandatory** (from Advanced Editor): Yes
 
There is a section in the Advanced Editor labelled `Validations`. Here, you can add validations to the fields. The validations are [regular expressions](https://en.wikipedia.org/wiki/Regular_expression) that the field's value will be validated against. You can select from a list of available regular expressions from the `Choose Validations` dropdown menu (like we do below for the `Email` field), or you can add your own to the `Custom Validations` field.

`Email` field:

 - **Field**: Email
 - **Type**: Simple String
 - **Short Display**: Yes
 - **Mandatory** (from Advanced Editor): Yes
 - **Choose Validations** (from `Validations` section of the Advanced Editor): Email
 
`Admission Date` field:

 - **Field**: Admission Date
 - **Type**: Date/Time
 - **Short Display**: Yes
 - **Mandatory** (from Advanced Editor): Yes
 
`Admission Number` field:

 - **Field**: Admission Number
 - **Type**: Simple String
 - **Short Display**: Yes
 - **Mandatory** (from Advanced Editor): Yes
 
`Course` field:

 - **Field**: Course
 - **Type**: Course
 - **Short Display**: Yes
 - **Mandatory** (from Advanced Editor): Yes
 
Before we start adding data to the app, let's do some housekeeping on the Home Menu. Open `Menu Definitions` from the menu and select `Home` from the list shown. Click on the Edit control at the top-right of the screen and then scroll down to the `Tipo Menu` section. Here, the Tipos that we set `Home` for their `Choose Menu` field are listed. From here, you can set their order of appearance or remove them from the menu.

You'll see the `Student`, `Course`, `Unit`, `Admin` and `Departments` Tipos listed here. As mentioned, when you set `Home` for a Tipo's `Choose Menu` field, it will automatically be listed here. But if you delete a Tipo, it will not be automatically removed from the Home menu, so you need to do this yourself. We had deleted the `Departments` Tipo previously, but it is still listed here. Remove the `Departments` and `Admin` Tipos from the list by using the Delete button to the right of the particular Tipo. Don't worry about the `Admin` Tipo right now. We'll take a look at it in the second section of the guide. Just remove it for now so that it won't be listed when we take a look at the Home menu. You can also order the remaining Tipos by changing their Sequence. If they aren't already set so, change the sequences of the `Student`, `Course` and `Unit` Tipos to 1, 2 and 3 respectively.

Go back to the app's homepage and you should see the Tipos that you created added to the Home menu.

![Home menu](/images/creating_an_application_14.png)

You can now add data to the app.

### Adding Data to the Application

To add records of a certain Tipo, select that Tipo and use the + button at the bottom-right of the screen to create a new instance of the Tipo. When you save the record, it will be listed on the Dashboard. Below you can see some of the data that we added to the app.

![Unit records](/images/creating_an_application_15.png)

![Course records](/images/creating_an_application_16.png)

![Student records](/images/creating_an_application_17.png)

For each record shown, the details that are visible in the above list views are the fields whose **Short Display** switch was turned on. If you want to view more details of a record, click on it and all its other details will be brought up.

![Course record detail view](/images/creating_an_application_18.png)

![Student record detail view](/images/creating_an_application_19.png)

Notice the below icon next to the `Address` details of the `Student` record, Whenever you see this icon, you can click on it to see more details regarding the particular field it's on. In the above case, if you click on the More Details icon of the Address field, you will be shown all the fields of the `Address` Tipo. If you had switched off **Short Display** for some/all the fields in the `Address` Tipo, then the particular fields wouldn't have shown up on the `Student` record detail view. But on clicking on the More Details icon next to the Address Field, you would have been able to see all the Address fields.

![More details icon](/images/creating_an_application_20.png)

### Filtering Data and Searching Through Records

TODO: Ask Raj if we should cover this here or if it's an Advanced concept

## Configuring Forms

If you have added data to your application, then you have encountered the app's forms.

When it comes to forms, TipoTapp allows you to customize their look and feel. We'll look at a couple of ways we can improve our form's appearance.

### Form Field Width

By default, a form is divided into three columns and each field takes up one column. You can see this in the image below. The fields are arranged in three columns and each field takes up a single column.

![1 column field](/images/creating_an_application_21.png)

You can change the width of a field by setting its `Form Width ` field. To do this, go to `App Definitions` and select the Tipo you want modified. Go into Edit mode and open the Advanced Editor of the field whose width you want to modify. In our case, we'll modify the First Name field of the Student Tipo. Go down to the `Display Settings` section and select `2` as its `Form Width`. `Form Width` specifies how many columns a field takes in the form. Click on `Done` then save the changes.

When you bring up the form again, you'll see that the First Name field now takes up two columns.

![2 column field](/images/creating_an_application_22.png)

As mentioned, by default, forms are divided into 3 cloumns, but we'll see later how to change the number of columns for your views when we take a look at Flow and Grid layouts. Regardless of how many columns a form has, the `Form Width` of a field will determine how many of those columns the field takes up. Below you can see a 5 column form with a `First Name` field with a `Form Width` of `3`.

![3 column field](/images/creating_an_application_23.png)

### Dividers

You can improve the appearance of a form by separating related fields from others with dividers. Let's take a look at this feature in action by modifying the Student form. We'll place a divider before the studen't admission details, isolating them from the other details.

Go to `App Definitions`, select the Student Tipo and enter into Edit mode. Add a field named `Admission Details` of Type `Divider` and set its `Sequence` to a number that is between the Sequence number of the `Email` field and the Sequence number of the `Admission Date`. You can select any number, even a floating point. An example is shown below.

![Divider](/images/creating_an_application_24.png)

Save the changes and go back to the Student form. You should see an `Admission Details` Divider separating the admission details from the details that come before.

![Divider](/images/creating_an_application_25.png)

### Field Groups

Another way that you can improve a form is by using Field Groups to group related items together. We'll demonstrate this by adding another filed to the Student Tipo. We'll add a field for the studen't extra curricular activities.

Go to `App Definitions`, select the Student Tipo and enter edit mode. Scroll down to the `Field Groups` section and click on the + control to add one. Name it `Extra-Curricular-Activities`. The name of the field group should not have any whitespace characters. So far when creating a field, Tipo or an application, you have been able to have spaces in the name, but this is not so for the Field Group name. Including spacing in the name will result in a bug.

Open the Advanced Editor for the Field Group you just added and then add the following two fields to it. Note that their Type is `True/False` and their `Short Display` has been turned on. You can add as many extra curricular activities as you want.

![Field Group](/images/creating_an_application_26.png)

After adding Fields to that Field Group, go back to the main Editor and Add a new Field to the Tipo. Name it `Extra Curricular Activities` And set its Type to `Extra-Curricular-Activities`. You'll find this option added in the Type selector menu under the `Field Groups` section.

![Field Group](/images/creating_an_application_27.png)

Save the changes and open up the Student form again to see the created form group.

![Field Group](/images/creating_an_application_28.png)

## Configuring How Data is Displayed

On TipoTapp, you can customize how data is displayed. Data can be either displayed in a Flow Layout or in a Grid Layout. We'll take a look at both of these next.

### Flow Layout

By default the data shown in list views is displayed in a Flow Layout that has 3 columns. Below, you can see this for the Student records.

![Student records](/images/creating_an_application_17.png)

With the flow layout, all the fields of a Tipo (including any embeded Tipos) whose `Show Display` switch was turned on are shown in the list view.

If you select one of the records and view it in the detail view, by default, its data is also shown in three columns.

![Student record detail view](/images/creating_an_application_19.png)

We can change the number of columns displayed. To do this, head over to `App Definitions` and edit the Student Tipo. Open the Advanced Editor of the `Meta Data` section. You will see the fields shown below.

![Student meta data](/images/creating_an_application_29.png)

Take note of these fields: `Desktop Max Columns`, `Tablet Max Columns` and `Mobile Max Columns`. These are used to set the maximum number of columns shown in a Flow Layout on desktop, tablet and mobile devices respectively.

The default for desktop and tablet is 3 columns while for mobile, it is 1 column. We do not recommend setting several columns for mobile as the data will then be difficult to read, but you are free to decide how you want your app's data to be displayed.

We are going to change the number of columns for the Student Tipo in Flow Layout to be 5 on the desktop. Select `5` from the dropdown menu of the `Desktop Max Columns` field. Save the changes and go back to the home dashboard and take a look at the Student records.

![5 column flow layout](/images/creating_an_application_30.png)

You can see the 5 columns in the image above. If you had set the `Form Width` of a particular field previously, you might want to re-adjust the value you set for it to accomodate the increase in columns. In the above, we changed the `Form Width` of the First Name column to `3` so now it takes up 3 of the 5 columns.

{{< note title="Note" >}}
Remember that the `X Max Columns` value sets the maximum number of columns that can be shown for a particular screen size. It doesn't set a strict number of columns that will be shown for a particular device. Just because you set 5 columns for desktop doesn't mean all users using a computer to access the app will see the data in 5 columns. The TipoTapp UI is responsive and so the data will be adjusted according to the browser size. If a user is viewing the data on a smaller screen or browser window, then they will see a fewer number of columns.
{{< /note >}}

Setting the `X Max Columns` of a Tipo affects the following: list views that are in Flow Layout, forms and detail views.

### Grid Layout

The other way data can be displayed on TipoTapp is via a Grid Layout. With the Grid Layout records are displayed on a Grid, with each record taking up a single row on the grid. By default, the grid has 3 columns, but you can change this depending on the number of fields you want displayed in the list views.

To demonstrate this, we'll change the Student list view from a Flow Layout to a Grid Layout. Head over to `App Definitions`, select the Student Tipo and get into Edit mode. Scroll down to the `List Customization` section and open the Advanced Editor. You should see the fields shown below.

![List custimization](/images/creating_an_application_31.png)

Turn on `Desktop Grid` and click on `Done`. By default, the list view grid will have 3 columns. Let's increase this so that it shows more data. Scroll up to the `Meta Data` section and open the Advanced Editor. Set the `Grid Max Columns` to `6`. Below, we've left the previous setting of `Desktop Max Columns` to `5`. Since we've switched the list view to the Grid Layout, the `Desktop Max Columns` value will only affect the views that use Flow Layout i.e. detail views and forms.

![Grid max columns](/images/creating_an_application_32.png)

Save the changes and go back to the Home menu to take a look at the list view's new look.

![6 column grid layout](/images/creating_an_application_33.png)

Other than list views, TipoTapp also supports Grid Layouts for Field Groups. Right now, if you take a detailed view of a Student record, you will see the following Field Group for `Extra Curricular Activities`. It's data is displayed in a flow layout.

![Field group flow layout](/images/creating_an_application_34.png)

To change the field group to a grid layout, go to `App Definitions` and edit the Student Tipo. Scroll down to the `Fields` section and open the Advanced Editor of the `Extra Curricular Activities` field. From the `Group Settings` section, you can switch on the Grid Layout for desktop, tablet or mobile.

![Group settings](/images/creating_an_application_35.png)

### Flow/Grid Layout, Which Should You Use?

With the Flow Layout, a list view shows all the Displayed fields of a record. The Flow Layout is best used when you want a large amount of data to be viewable when scrolling through your data, without requiring you to go into the detail view of a record to view the data.

A Grid Layout on the other hand, is suitable for when you only need the list view to show you just enough fields of a record for you to make a decision on picking the right one. Grid views are more compact and thus display more records on screen.

### Multiple Field Meaningful Key

When creating the Unit and Course Tipos, we looked at setting a field as the `Meaningful Key`. As mentioned, only one field can be the Meaningful Key. If yo set several fields as the Meaningful Key, then only the first occurnce of a field set as Meanigful Key will be considered. This could be ideal and sufficient in identifying a Tipo record. For instance, for our Unit and Course Tipos, having their Name field as the Meaningful Key is enough to identify a unit or course since these usually have a unique name. For some other types of data, having only one field as the Meaningful Key isn't that useful. Let's take the Student Tipo for example. Imagine you had a `Department` Tipo that had a `Students` field that held students belonging to that department. Now if you set either the Student `First Name` or `Last Name` as the Meaningful Key, you would have trouble picking the correct students that belong to a department when creating or editing a Department's record since students will most probably have similar first (or last) names.

To mitigate this and make it easier to identify a student, you can add a field to the Student Tipo which holds a value that is the combination of two or more other fields. For instance, you can have a Student field named `Key` that will hold a combination of a student's first, middle and last names. You can then set this field as the Meaningful Key which will make it easier to identify the correct student. If you want even more uniqueness to the `Key` field, you can add in the Student `Admission Number` to the other fields. Let's take a look at how you would go about implementing this.

Head over to `App Definitions`, select the Student Tipo and go into Edit mode. Add a field named `Key` to the Tipo and set its Type to `Simple String`. Open the Advanced Editor of the field and scroll down to `Data Settings`. Set the following for the `Expression` field.

```
($tipo.first_name + ' ' + $tipo.middle_name + ' ' + $tipo.last_name)
```

The `Expression` field takes a JavaScript expression and executes it to determine the value of the field. In the above expression, we concatenate the values of the three variables that hold the first, middle and last names of the particular instance of the Student Tipo.

## Customizing the App

Other than changing how data is displayed, TipoTapp allows you to change the complete look-and-feel of the app. Instead of using the app as it is, you can customize it so that it is more in line with your organization's branding.

To change how the app looks, select `Develop` from the navigation bar and then from the menu on the left, select `Customizations`.

![Customization menu](/images/creating_an_application_36.png)

In the next three sections, we'll be using the Editor found here.

### Setting the App's Logo and Font

If you look at your app's naviagtion bar, you will see a default logo on the left side of the bar. To change this, get into Edit mode and scroll down to `Appearance Settings`. Go down to the `Logo` field and use the control on the left (with the clip icon) to select an image.

![Change logo](/images/creating_an_application_37.png)

TODO: Ask Raj about the image types allowed as well as the dimensions.

To change the app's Font, you can select one from the dropdown on the `Font` field.

![Change font](/images/creating_an_application_38.png)

TODO: Ask Raj if you can use yor own fonts or if it's restricted to available options.

### Changing the App's Color

TipoTapp uses Material Design on its interface. You can change the default primary and accent colors of your app by either selecting from the available color themes, or you can use your own custom palette. We'll look at the latter option in the second part of this guide. Right now, let's look at the available palette.

![Change color](/images/creating_an_application_39.png)

From `Appearance Settings`, you will find a `Choose Colour Theme` section shown above. The first time you click on a color, that color will be set as the Primary color. If you click on another color, this color will be set as the Accent. Each time you change colors, a preview of the resulting UI is shown below the palette.

### Customizing Email Templates

TipoTapp provides templates for the following types of emails: `Reset Password Email`, `User Registration Email`, `User Registration Confirmation Email` and `Welcome Email`. You can use the default message in these, or you can change it as well as the formatting. You can change this from the `Email Templates` section. Select the email you want to change and open its Advanced Editor. Here, you can enter the HTML markup of the email. Make sure to use the correct variable names for the various fields in your app. These are seen as the values inside curly braces e.g. `{applicationName}`

![Change email template](/images/creating_an_application_40.png)