export default function createAccount () {}

describe('Forgot password ', () => {

    beforeEach(() => {
        cy.visit('https://app.city-drive.pl')
    })

    it('Forgot password with a registered email', () => {
        cy.contains('I forgot my password').scrollIntoView().click(); 
        cy.wait(2000);
        cy.contains('Email').scrollIntoView().click(); 
        cy.get('input[placeholder="youremail@example.com"]'). click(). type('flavia.ormf@gmail.com',{ log: false });
        cy.contains('Reset Password').scrollIntoView().click(); 
        cy.contains('A password recovery email has been sent to the email address associated with your account.').should('be.visible');
    })

    it('Forgot password with a non-registered email', () => {
        cy.contains('I forgot my password').scrollIntoView().click(); 
        cy.wait(2000);
        cy.contains('Email').scrollIntoView().click(); 
        cy.get('input[placeholder="youremail@example.com"]'). click(). type('flavia.moraisqa+22@gmail.com',{ log: false });
        cy.contains('Reset Password').scrollIntoView().click();  
        cy.contains('User not found or token expired').should('be.visible');
    }) 

    it('Mandatory field forgot password (email)', () => {
        cy.contains('I forgot my password').scrollIntoView().click();  
        cy.wait(2000); 
        cy.contains('Email').scrollIntoView().click(); 
        cy.contains('Reset Password').scrollIntoView().click();
        cy.contains('This field is required').should('be.visible');
    }) 

    it('Invalid field forgot password (phone number)', () => {
        cy.contains('I forgot my password').scrollIntoView().click();  
        cy.wait(2000); 
        cy.contains('Email').scrollIntoView().click(); 
        cy.get('input[placeholder="youremail@example.com"]'). click(). type('flavia.ormf')
        cy.contains('Reset Password').scrollIntoView().click();
        cy.contains('Email is invalid').should('be.visible');

    })

    it('Forgot password with a registered phone number', () => {
        cy.contains('I forgot my password').scrollIntoView().click();
        cy.wait(2000);
        cy.get('.rounded-lg > .r-1loqt21').click();
        cy.contains('Brazil').scrollIntoView().click();
        cy.get('.css-11aywtz').click().type('21995623494')
        cy.contains('Reset Password').scrollIntoView().click();  
        cy.contains('A password recovery message has been sent to the phone number associated with your account.').should('be.visible');
    })

    it('Forgot password with a non-registered phone number', () => {
        cy.contains('I forgot my password').scrollIntoView().click(); 
        cy.wait(2000);
        cy.get('.rounded-lg > .r-1loqt21').click();
        cy.contains('Brazil').scrollIntoView().click();
        cy.get('.css-11aywtz').click().type('99999999999')
        cy.contains('Reset Password').scrollIntoView().click(); 
        cy.contains('User not found or token expired').should('be.visible');
    })

    it('Invalid field forgot password (phone number)', () => {
        cy.contains('I forgot my password').scrollIntoView().click();  
        cy.contains('Reset Password').scrollIntoView().click();
        cy.contains('Phone number is invalid').should('be.visible');
    })

    it.only('Return to Login button', () => {
        cy.contains('I forgot my password').scrollIntoView().click();  
        cy.contains('Return to Login').scrollIntoView().click();
        cy.contains('Jump right in! Sign in to experience the magic of your account.').should('be.visible');
    })    

    it.only('Sign Up button', () => {
        cy.contains('I forgot my password').scrollIntoView().click(); 
        cy.contains('Sign Up').scrollIntoView().click();
        cy.contains('Go ahead and sign up, let everyone know how awesome you are!').should('be.visible')
    })

})