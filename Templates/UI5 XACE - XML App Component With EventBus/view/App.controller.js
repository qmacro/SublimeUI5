sap.ui.controller("${namespace}.view.App", {

    onInit: function(oEvent) {

        var bus = sap.ui.getCore().getEventBus();
        bus.subscribe("nav", "to", this.navToHandler, this);
        bus.subscribe("nav", "back", this.navBackHandler, this);

        this.oApp = this.getView().byId("idAppRoot");

    },


    navToHandler: function(channelId, eventId, data) {

        this.oApp.to(data.id);
        if (data.data.context) {
            this.oApp.getPage(data.id).setBindingContext(data.data.context);
        }

    },


    navBackHandler: function() {

        this.oApp.back();

    } 

});