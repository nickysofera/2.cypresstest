import { usernameMyElementId, passwordMyElementId } from "./idlogin.cy.js"

//homepage
describe('Make Appointment at Hongkong CURA Healthcare Center', () => {
  it('passes', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')

//Verify username with elementId
    cy.get(usernameMyElementId).type('John Doe')
//Verify password with elementId
    cy.get(passwordMyElementId).type('ThisIsNotAPassword')
//Verify button login
    cy.get('#btn-login')
    .should('contain', 'Login')
    .click()
//Verify to select Facility
    cy.get('#combo_facility')
    .select('Hongkong CURA Healthcare Center')
    .should('have.value', 'Hongkong CURA Healthcare Center')
//Verify checkbox 
    cy.get('#chk_hospotal_readmission')
    .click()
//Verify combo box
    cy.get('#radio_program_none')
    .click()
//Verify visit date
    cy.get('#txt_visit_date')
    .type('29/10/2024')
    .should('have.value', '29/10/2024')
//Verify to input comment
    cy.get('#txt_comment')
    .type('Make Appointment Test', {force:true})
    .should('have.value', 'Make Appointment Test')
//Verify button Book Appointment
    cy.get('#btn-book-appointment')
    .click()

    
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
