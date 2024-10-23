import { usernameMyElementId, passwordMyElementId } from "./idlogin.cy.js"

describe('Make Appointment at Hongkong CURA Healthcare Center', () => {
  it('passes', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')

    it('input id user with valid username', () => {
    cy.get(usernameMyElementId).type('John Doe')
    })

    it('input user password with valid password', () => {
    cy.get(passwordMyElementId).type('ThisIsNotAPassword')
    })

    it('click button login', () => {
    cy.get('#btn-login')
    .should('contain', 'Login')
    .click()
    })

    it('pick dropdown list', () => {
    cy.get('#combo_facility')
    .select('Hongkong CURA Healthcare Center')
    .should('have.value', 'Hongkong CURA Healthcare Center')
    })

    it('pick one checkbox', () => {
    cy.get('#chk_hospotal_readmission')
    .click()
    })

    it('pick one radio button', () => {
    cy.get('#radio_program_none')
    .click()
    })

    it('pick visit date', () => {
    cy.get('#txt_visit_date')
    .type('29/10/2024')
    .should('have.value', '29/10/2024')
    })

    it('input tex comment', () => {
    cy.get('#txt_comment')
    .type('Make Appointment Test', {force:true})
    .should('have.value', 'Make Appointment Test')
    })

    it('click button appointment', () => {
    cy.get('#btn-book-appointment')
    .click()
    })

    
 //   .should('have.value', 'Hongkong CURA Healthcare Center')
  
/*
    cy.contains('a', 'get').click()

    cy.get('#query-btn')
    .should('contain', 'Button')
    .click()

    cy.go('back')
    */
  })
})
