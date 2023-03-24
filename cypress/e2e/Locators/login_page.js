export class LoginPage{

    userName = "input[placeholder='Username or Email']"
    password = "input[placeholder='Password']"
    loginButton = "#btnNext"
    

    signIn(){
        cy.get(this.userName).type('vraghul0001@gmail.com')
    
        cy.get(this.password).type('Abcd@123')
    
        cy.get(this.loginButton).click()
    }
}
