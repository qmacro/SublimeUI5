sap.ui.controller("${namespace}.view.App", {

    onInit: function(oEvent) {

        this.oApp = this.getView().byId("idAppRoot");

        // Have child views use this controller for navigation
        var that = this;
        this.oApp.getPages().forEach(function(oPage) {
            oPage.getController().navigation = that;
        });

    },


    navTo: function(sPageId, oContext) {

        this.oApp.to(sPageId);
        if (oContext) {
            this.oApp.getPage(sPageId).setBindingContext(oContext);
        }

    },


    navBack: function() {

        this.oApp.back();

    } 

});