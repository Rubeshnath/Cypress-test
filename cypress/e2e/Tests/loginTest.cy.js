import { LoginPage } from "../Locators/login_page"

const loginPage = new LoginPage()

context('Login tests', () => {
    beforeEach(() => {
        cy.visit('https://dev-kdiapp.kendigital.net.my/user-login')
    })
    
    
    it('.type() - type into a DOM element', () => {
        
        loginPage.signIn()
        
        //cy.get('input[placeholder="Username or Email"]').type('vraghul0001@gmail.com')
        //cy.get('input[placeholder="Password"]').type('Abcd@123')
        //cy.get('#btnNext').click()
        cy.wait(5000)
        if(cy.contains('Go to Dashboard')){
        cy.get('button[class="btn min-width btn-danger"]').click()
        }
        cy.xpath('//div[@class="user-title justify-content-start mt-3"]').should('contain', 'Welcome')
        cy.xpath('//div[@class="user-title justify-content-start mt-3"]').should('contain', 'Client ID')
        cy.xpath('//button[normalize-space()="Withdrawal"]').should('have.class','btn btn-lg min-width btn-solid-navigation mx-1')
        .should('contain', 'Withdrawal')
        .should('be.visible')
        .should('be.enabled')
        .click()

    
    })
})