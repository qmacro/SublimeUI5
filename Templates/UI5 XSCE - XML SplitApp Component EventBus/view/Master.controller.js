sap.ui.controller("${namespace}.view.Master", {

    handleListSelect: function(oEvent) {
        this.navigation.navTo("idViewRoot--idViewDetail", oEvent.getParameter("listItem").getBindingContext());
    }


});