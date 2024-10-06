const InventoryElementLocators = require('../PageElements/Inventory.json')

export class Inventory{

    Product(){
        cy.get(InventoryElementLocators.InventoryLocators.Product).click()
        cy.wait(2000)
        return
    }

    Features(){
        cy.get(InventoryElementLocators.InventoryLocators.Features).click()
        cy.wait(2000)
        return
    }

    Solution(){
        cy.get(InventoryElementLocators.InventoryLocators.Solution).click()
        cy.wait(2000)
        return
    }

    QA(){
        cy.get(InventoryElementLocators.InventoryLocators.QA).click()
        cy.wait(2000)
        return
    }

}
