const loginElementLocators = require('../PageElements/LoginPageElements.json')

export class loginPageElements{

    email(emaill){
        cy.get(loginElementLocators.LoginPageLocators.email_text).type(emaill)
        cy.wait(2000)
        return
    }

    password(passwordd){
        cy.get(loginElementLocators.LoginPageLocators.password_text).type(passwordd)
        cy.wait(2000)
        return
    }

    LoginButton(){
        cy.get(loginElementLocators.LoginPageLocators.login_button).click()
        cy.wait(2000)
        return
    }

    CloseButton(){
        cy.get(loginElementLocators.LoginPageLocators.close_button).click()
        cy.wait(2000)
        return
    }

}
