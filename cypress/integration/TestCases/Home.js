/// <reference types="Cypress"/>

import { Home } from "../../../PageObjects/PageActions/HomeAction"


const Home_Elements = new Home

describe("Page Object Model", function(){

    it("Home Page", function(){
        cy.visit("https://bugbug.io/")
        Home_Elements.Pricing()
        Home_Elements.Demo()
        Home_Elements.Resource()
        Home_Elements.Blog()
        Home_Elements.Resource()
        Home_Elements.CaseStudies()
    })

})

