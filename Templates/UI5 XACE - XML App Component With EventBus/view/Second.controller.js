sap.ui.controller("${namespace}.view.Second", {

	onInit: function() {
			this.bus = sap.ui.getCore().getEventBus();
	},
	
    handleNavButtonPress: function(oEvent) {
        this.bus.publish("nav", "back");
    }

});