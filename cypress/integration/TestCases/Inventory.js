/// <reference types="Cypress"/>

import { Inventory } from "../../../PageObjects/PageActions/InventoryActions"

const Inventory_Elements = new Inventory

describe("Page Object Model", function(){

    it("Inventory Page", function(){
        cy.visit("https://bugbug.io/")
        Inventory_Elements.Product()
        Inventory_Elements.Features()
        Inventory_Elements.Solution()
        Inventory_Elements.QA()
    })

})

