jQuery.sap.declare("${namespace}.Component");

sap.ui.core.UIComponent.extend("${namespace}.Component", {

    createContent : function() {

        // create root view
        var oView = sap.ui.view({
            id: "idViewApp",
            viewName: "${namespace}.view.App",
            type: "XML",
            viewData: { component : this }
        });

        // set data model on root view
        oView.setModel(new sap.ui.model.json.JSONModel("model/mock.json"));

        // set i18n model
        var i18nModel = new sap.ui.model.resource.ResourceModel({
            bundleUrl : "i18n/messageBundle.properties"
        });
        oView.setModel(i18nModel, "i18n");

        // done
        return oView;
    }
});
