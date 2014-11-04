sap.ui.jsview("view.launchpad", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf view.launchpad
	 */
	getControllerName : function() {
		return "view.launchpad";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf view.launchpad
	 */
	createContent : function(oController) {

		var page =  new sap.m.Page({
			title : "My Launchpad",
			showNavButton: true,
			backgroundDesign: sap.m.PageBackgroundDesign.Standard, 			

			content : [

				new sap.m.TileContainer("tile_container", {
				height: "100%",
				width: "100%",
				allowAdd: true,
				tiles : [

					new sap.m.StandardTile("tile_sample", {
						title : "Sample Tile",
						info : "This is a sample Tile",
						numberUnit: "Effort",
						number: "0",
						icon: "icons/alarm.png",
//						press: oController.onPressSampleApp
					}),

					new sap.m.StandardTile("tile_app1", {
						title : "{i18n>Tile_Title_App1}",
						info : "{i18n>Tile_Info_App1}",
						numberUnit: "{i18n>Tile_NumberUnit_App1}",
						number: "{/App1/hits}",
						icon: "icons/bar_chart.png",
						iconDensityAware: false,
						removable: false,
					}),

					new sap.m.StandardTile("tile_app2", {
						title : "{i18n>Tile_Title_App2}",
						info : "{i18n>Tile_Info_App2}",
						numberUnit : "{i18n>Tile_NumberUnit_App2}",
						number: "{/App2/hits}",
						icon: "icons/card.png",
						removable : false,
					}),

					new sap.m.StandardTile("tile_app3", {
						title : "{i18n>Tile_Title_App3}",
						info : "{i18n>Tile_Info_App3}",
						numberUnit : "{i18n>Tile_NumberUnit_App3}",
						number: "{/App3/hits}",
						icon: "icons/document.png"
					}),

					new sap.m.StandardTile("tile_app4", {
						title : "{i18n>Tile_Title_App4}",
						info : "{i18n>Tile_Info_App4}",
						numberUnit : "{i18n>Tile_NumberUnit_App4}",
						number: "{/App4/hits}",
						icon: "icons/money.png"
					}),

					new sap.m.StandardTile("tile_app5", {
						title : "{i18n>Tile_Title_App5}",
						info : "{i18n>Tile_Info_App5}",
						numberUnit : "{i18n>Tile_NumberUnit_App5}",
						number: "{/App5/hits}",
						icon: "icons/pie_chart.png"
					}),

				]

			})
	
			]
		});
		
		page.setEnableScrolling(false); // give a fixed height, so the TileContainer can use 100% height

		return page;
	}

});
