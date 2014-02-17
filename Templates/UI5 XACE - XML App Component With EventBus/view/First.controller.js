sap.ui.controller("${namespace}.view.First", {

	onInit: function() {
		this.bus = sap.ui.getCore().getEventBus();
	},

    handleListSelect: function(oEvent) {
        this.bus.publish("nav", "to", {
			id: "idViewApp--idViewSecond",
			data: {
				context: oEvent.getParameter("listItem").getBindingContext()
			}
		});
    }


});