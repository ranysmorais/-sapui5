sap.ui.jsview("contactBook.book",{
    getControllerName : function(){
        return "contactBook.book";
    },

    createContent : function(oController) {
        var layout = new sap.ui.commons.layout.MatrixLayout({
            id : 'matrix4',
            layoutFixed : false,
        });

        var appHeader = new sap.ui.commons.AplicationHeader('appHeader', {
            logoText : "Bank Application",
            displayLogoff: false,
            displayWelcome : true,
            useraName: Welcome
        });

        layout.createRow(appHeader);

        var rPannel = sap.ui.comons.Panel('iPnannel', {
            text: "contat book list",
        });

        var oTable = new sap.ui.table.DataTable({
            id: "contactId",
            title: "Contact Book Application",
            with: "100%",
            visibleRowCount: 10,
            selectionMode : sap.ui.table.SelectionMode.Sigle,

            //setEditable : false

            rowSelectionChange: function(oEvent){},
            toolbar: new sap.ui.commons.Toolbar({
                items: [
                    new sap.ui.comons.Button({
                        text: "New Contact",
                        press: function(){
                            oController.Create();
                        }
                    }),

                    new sap.ui.comons.Button({
                        text: "Update Contact",
                        press: function(){
                            oController.Update();
                        }
                    }),

                    new sap.ui.comons.Button({
                        text: "Delete Contact",
                        press: function(){
                            oController.Detele();
                        }
                    }),

                ]
            })
        });

        oTable.add.Column(new sap.ui.table.Column({
            label: new sap.ui.comons.Label({
                text: "contact ID"
            }),

            template: new sap.ui.comons.TextField().bindProprety("value","contactCountry"),
        

            label: new sap.ui.comons(new sap.ui.table.Column)({
                label: new sap.ui.com.Label({
                    text: "Contact Country"
                }),

                template : new sap.ui.commons.TextField().bindProprety("value","contactCountry"),

                sortProperty: "contactCountry"

            })
        }));

        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({
                text:"Region"
            }),
            template: new sap.ui.commons.TextField().bindProperty("value", "region"),

            sortProperty: "region"
        }));

        oTable.addColumn(new sap.ui.Label({
            labe: new sap.ui.commons.Label({
                text: "Street"
            }),

            template: new sap.ui.commons.TextField().bindProperty("value", "street"),

            sortProperty : "street"
        }));

        rPannel.add(oTable);
        
        layout.createRow(rPannel);

        this.addContent(layout);
        
    }
});