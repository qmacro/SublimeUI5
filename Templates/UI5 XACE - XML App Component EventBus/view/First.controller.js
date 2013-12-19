sap.ui.controller("${namespace}.view.First", {

    handleListSelect: function(oEvent) {
        this.navigation.navTo("idViewApp--idViewSecond", oEvent.getParameter("listItem").getBindingContext());
    }


});