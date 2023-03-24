import { LoginPage } from "../Locators/login_page"

const loginPage = new LoginPage()

context('Login tests', () => {
    beforeEach(() => {
        cy.visit('https://dev-kdiapp.kendigital.net.my/user-login')
    })
    
    
    it('Verify login', () => {
        
        loginPage.signIn()
         
    })

    it('verify user details', () =>{
        loginPage.signIn()
        cy.wait(5000)
        if(cy.contains('Go to Dashboard')){
        cy.get('button[class="btn min-width btn-danger"]').click()
        }
        cy.xpath('//div[@class="user-title justify-content-start mt-3"]').should('contain', 'Welcome')
        cy.xpath('//div[@class="user-title justify-content-start mt-3"]').should('contain', 'Client ID')
    })

    it('Verify withdrawal button', () => {
        loginPage.signIn()
        cy.wait(5000)
        if(cy.contains('Go to Dashboard')){
        cy.get('button[class="btn min-width btn-danger"]').click()
        }
        cy.xpath('//button[normalize-space()="Withdrawal"]').should('have.class','btn btn-lg min-width btn-solid-navigation mx-1')
        .should('contain', 'Withdrawal')
        .should('be.visible')
        .should('be.enabled')
        .click()
    })
})