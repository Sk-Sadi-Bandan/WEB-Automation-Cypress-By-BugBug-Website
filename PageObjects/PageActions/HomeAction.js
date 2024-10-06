const HomeElementLocators = require('../PageElements/Home.json')

export class Home{

    Pricing(){
        cy.get(HomeElementLocators.HomeLocators.Pricing).click({ multiple: true })
        cy.wait(2000)
        return
    }

    Demo(){
        cy.get(HomeElementLocators.HomeLocators.Demo).click({ multiple: true })
        cy.wait(2000)
        return
    }

    Resource(){
        cy.get(HomeElementLocators.HomeLocators.Resource).click()
        cy.wait(2000)
        return
    }

    Blog(){
        cy.get(HomeElementLocators.HomeLocators.Blog).click({ force: true })
        cy.wait(2000)
        return
    }

    CaseStudies(){
        cy.get(HomeElementLocators.HomeLocators.CaseStudies).click()
        cy.wait(2000)
        return
    }

}
