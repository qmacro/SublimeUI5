SublimeUI5
==========

Sublime Text 2 Package for SAPUI5/OpenUI5

Basic instructions:

 - go to your Sublime Text 2/Packages directory
 - git clone this repo
 - profit!

Introduction
============

[SAPUI5](https://sapui5.hana.ondemand.com/sdk/) (Open Source version: [OpenUI5](sap.github.io/openui5/)) 
is a UI framework for modern HTML5 applications.  

Whatever others might tell you, you don't need to use Eclipse to develop apps in SAPUI5. If, like me, you
use Sublime Text, you can use this package to help you. It contains [snippets](http://docs.sublimetext.info/en/sublime-text-3/extensibility/snippets.html) and UI5 templates, powered by the [STProjectMaker] (https://github.com/bit101/STProjectMaker) plugin, to make writing code by hand easier. 

Screencast
----------
I've recorded a quick screencast to introduce you to the snippet and template usage with SublimeUI5: [https://www.youtube.com/watch?v=ts0EogQZvS8](SublimeUI5 - Snippets & Templates for SAPUI5/OpenUI5).

Snippets
--------

There are JavaScript, HTML and XML snippets, the latter being for building views in XML. I've made a stab at organising them along the same lines as the UI5 namespaces, with extra extensions to denote language or format. 

For example, the snippet for the XML view based control 'IconTabBar' is in the Snippets/sap/m/ folder and is called [https://github.com/qmacro/SublimeUI5/blob/master/Snippets/sap/m/IconTabBar.xml.sublime-snippet](IconTabBar.xml.sublime-snippet). All Sublime Text snippets end with the 'sublime-snippet' extension; I've added 'xml' to denote that this one is XML, and the IconTabBar camelcasing follows the actual control name standard too. 

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

There's also, in the same folder, [https://github.com/qmacro/SublimeUI5/blob/master/Snippets/sap/m/IconTabBar.js.sublime-snippet](IconTabBar.js.sublime-snippet). That's a JavaScript equivalent. 

There are also some snippets in the jQuery.sap space, notably a few 'utility' ones such as [https://github.com/qmacro/SublimeUI5/blob/master/Snippets/jQuery/sap/log.js.sublime-snippet](log.js.sublime-snippet), which will help you generate a `jQuery.sap.log.error|warning|info|debug('...')` statement. 

Note that regardless of which folder or subfolder any given snippet is in, Sublime Text will find it and make it available to you.

