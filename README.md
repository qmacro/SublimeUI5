SublimeUI5
==========

Sublime Text Package for SAPUI5/OpenUI5

Basic instructions
------------------
 - Go to your Sublime Text 2(3)/Packages directory (Check Preferences -> Browse Packages to find the location)
 - Git clone this repo.
 - Install STProjectMaker to enable templating. Ctrl-Shift-P Install STProjectMaker.
 - Add the following to the STProjectMaker User settings (Preferences -> Package Settings -> Project Maker) so that it can find the SublimeUI5 templates: { "template_path": "c:\\sublime\\Data\\Packages\\SublimeUI5\\Templates\\" }. Note that escaping of slashes is necessary on Windows.
 - Project -> Create Project or Ctrl-Shift-N to select a template.
 - Profit!

Introduction
------------

[SAPUI5](https://sapui5.hana.ondemand.com/sdk/) (Open Source version: [OpenUI5](sap.github.io/openui5/)) 
is a UI framework for modern HTML5 applications.

Works in Sublime Test 2 and Sublime Test 3.

Whatever others might tell you, you don't need to use Eclipse to develop apps in SAPUI5. If, like me, you
use Sublime Text, you can use this package to help you. It contains _snippets_ and _templates_ for UI5. For more information on Sublime Text snippets, see the [snippet documentation](http://docs.sublimetext.info/en/sublime-text-3/extensibility/snippets.html), and for more information on templates, see the [STProjectMaker](https://github.com/bit101/STProjectMaker) plugin, which I use to power the templates. Both snippets and templates make writing code by hand easier. At least for me.

Screencast
----------
I've recorded a quick screencast to introduce you to the snippet and template usage with SublimeUI5: [SublimeUI5 - Snippets & Templates for SAPUI5/OpenUI5](https://www.youtube.com/watch?v=ts0EogQZvS8).

Snippets
--------
There are JavaScript, HTML and XML snippets, the latter being for building views in XML. I've made a stab at organising them along the same lines as the UI5 namespaces, with extra extensions to denote language or format. 

For example, the snippet for the XML view based control 'IconTabBar' is in the Snippets/sap/m/ folder and is called [IconTabBar.xml.sublime-snippet](https://github.com/qmacro/SublimeUI5/blob/master/Snippets/sap/m/IconTabBar.xml.sublime-snippet). All Sublime Text snippets end with the 'sublime-snippet' extension; I've added 'xml' to denote that this one is XML, and the IconTabBar camelcasing follows the actual control name standard too. 

Here's what the snippet looks like:

    <snippet>
        <tabTrigger>IconTabBar</tabTrigger>
        <scope>text.html, source.js</scope>
        <description>sap.m.IconTabBar JS</description>
        <content><![CDATA[
    new sap.m.IconTabBar({
        items: [
            ${1:}
        ]
    })
    ]]></content>
    </snippet>

You can see the actual content that will be inserted (within the `<![CDATA[...]]>` section) and there's a placeholder which you'll be able to tab to and enter what you want, after you've invoked the snippet. Have a look at the screencase mentioned earlier to see how snippet insertion works. The snippet is only triggered in HTML and JavaScript contexts (see the `<scope/>` element), and to trigger it, you type "IconTabBar" and hit the <tab> key (see the `<tabTrigger/>` element).

There's also, in the same folder, [IconTabBar.js.sublime-snippet](https://github.com/qmacro/SublimeUI5/blob/master/Snippets/sap/m/IconTabBar.js.sublime-snippet). That's a JavaScript equivalent. 

There are also some snippets in the jQuery.sap space, notably a few 'utility' ones such as [log.js.sublime-snippet](https://github.com/qmacro/SublimeUI5/blob/master/Snippets/jQuery/sap/log.js.sublime-snippet), which will help you generate a `jQuery.sap.log.error|warning|info|debug('...')` statement. 

Note that regardless of which folder or subfolder any given snippet is in, Sublime Text will find it and make it available to you.


Templates
---------
With the STProjectMaker you can have ready-built applications created for you, having specified where it should live, and some parameters that you might want to use (to replace placeholder variables for, say, your namespace, for example).

For the time being, I've fleshed out a set of configured templates, based on various UI5 application fundamentals:

 - Whether the views will be XML based (_X_) or JavaScript based (_J_) (not looking at HTML or JSON views yet)
 - Whether the root control will be sap.m.App for a smartphone-only style application, (_A_) or sap.m.SplitApp, for a split-screen master/detail scenario, commonly found in SAP Fiori (_S_)
 - Whether a Component-based application approach is to be used (_C_) or not (_N_)
 - Which navigation mechanism is to be employed; one based on the EventBus (_E_), or one based on Routing (_R_)
 
With this I've come up with short codes based on the letters above. The first couple of templates that I've created and made available as a first go are: 

 - _XACE_ - XML views, App-based, with Component, using EventBus for navigation.

 - _XSCE_ - XML views, SplitApp-based, with Component, using EventBus for navigation.

 Have a look in the [Templates](https://github.com/qmacro/SublimeUI5/tree/master/Templates) folder for more details.

Documentation on how to use the templates is coming soon!
