/// <reference types="Cypress"/>

import { loginPageElements } from "../../../PageObjects/PageActions/LoginPageActions"

const Login_Elements = new loginPageElements

describe("Page Object Model", function(){

    it("Login Page", function(){
        cy.visit("https://app.bugbug.io/sign-in/")
        Login_Elements.email("ssbandan313@gmail.com")
        Login_Elements.password("sadi1234")
        Login_Elements.LoginButton()
        Login_Elements.CloseButton()
    })

})