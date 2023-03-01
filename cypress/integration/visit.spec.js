it('Acessar a tela de home', () => {
    cy.visit('/')
    cy.url().should('be.equal', 'https://automationexercise.com/')
})

it('Acessar a tela de products', () => {
    cy.visit('/')
    cy.get('a[href*="/products"]').click()
    cy.url().should('be.equal', 'https://automationexercise.com/products')
})

it('Acessar a tela de cart', () => {
    cy.visit('/')
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    cy.url().should('be.equal', 'https://automationexercise.com/view_cart')
})

it('Acessar a tela de signup/login', () => {
    cy.visit('/')
    cy.get('a[href*="/login"]').click()
    cy.url().should('be.equal', 'https://automationexercise.com/login')
})