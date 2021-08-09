sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		createReportsModel: function(){
			var oModel = new JSONModel({
				reports:[{
					"id": "1",
					"nome": "ZPROVAVITTORIO"
				},{
					"id": "2",
					"nome": "ZPROVAVITTORIO"
				}]
			});
			oModel.setDefaultBindingMode("TwoWay");
			return oModel;
		}

	};
});