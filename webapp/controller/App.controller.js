sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
     onInit : function () {
         // set data model on view
         var oData = {
            recipient : {
               name : " ",
               phone:" ",
               street: " ",               
               city: " "
               
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
         // set i18n model on view
         var i18nModel = new ResourceModel({
            bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
         });
         this.getView().setModel(i18nModel, "i18n");
      },
      onShowHello : function () {
         // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var msgName = this.getView().getModel().getProperty("/recipient/name");
         var msgStreet = this.getView().getModel().getProperty("/recipient/address");
         var msgCity = this.getView().getModel().getProperty("/recipient/city");
         var msgNumber = this.getView().getModel().getProperty("/recipient/phone");         
         //--
         var sMsg = oBundle.getText(msgName + 
            " | " + msgStreet + 
            " | " + msgCity + 
            " | " + msgNumber);
         // show message
         MessageToast.show(sMsg);
         console.log(sMsg);
      }
   });
});