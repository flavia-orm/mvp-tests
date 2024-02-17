export default function createAccount () {}

describe('Autentication ', () => {

    beforeEach(() => {
      cy.visit('https://app.city-drive.pl')
    })

    it('Log in with a valid credentials (email)', () => {
        cy.wait(2000);
        cy.contains('Email').scrollIntoView().click(); 
        cy.get('input[placeholder="youremail@example.com"]'). click(). type('flavia.ormf@gmail.com',{ log: false });
        cy.get('input[placeholder="******"]'). click(). type('#Flavia123',{ log: false });
        cy.get('.space-y-4 > .bg-primary').click();
    })

    it('Login with invalid credentials (email)', () => {
      cy.contains('Email').scrollIntoView().click();
      cy.get('input[placeholder="youremail@example.com"]'). click(). type('flavia.ormf@gmail.com');
      cy.get('input[placeholder="******"]'). click(). type('#Testing123',{ log: false });
      cy.get('.space-y-4 > .bg-primary').click();
      cy.contains('Invalid credentials.').should('be.visible');
    });
   
   it.only('Mandatory fields test - email)',() =>{
    cy.contains('Email').scrollIntoView().click();
    cy.get('input[placeholder="******"]'). click(). type('#Testing123',{ log: false });
    cy.get('.space-y-4 > .bg-primary').click();
    cy.contains('This field is required').should('be.visible');
  });

  it.only('Mandatory fields test - password',() =>{
    cy.contains('Email').scrollIntoView().click();
    cy.get('input[placeholder="youremail@example.com"]'). click(). type('flavia.ormf@gmail.com');
    cy.get('.space-y-4 > .bg-primary').click();
    cy.contains('This field is required').should('be.visible');
  })
})