export default function createAccount () {}
const imageComAlt = 'img[alt="A car based on a combustion engine"]';

describe('Sign up ', () => {

    beforeEach(() => {
        cy.visit('https://app.city-drive.pl/sign-up')
    })

    it('Sign up with BR chars (email)', () => {
        cy.get('input[placeholder="Insert your first name"]'). click(). type('Flávia');
        cy.get('input[placeholder="Insert your surname"]'). click(). type(`Morais${Math.round(Math.random() * 100)}`);
        cy.contains('Email').scrollIntoView().click(); 
        cy.get('input[placeholder="youremail@example.com"]'). click(). type(`flavia.ormf${Math.round(Math.random() * 100)}@mailinator.com`);
        cy.get('input[placeholder="*****"]').eq(0).click().type('#Test123',{ log: false });
        cy.get('input[placeholder="*****"]').eq(1).click(). type('#Test123',{ log: false });
        cy.get(imageComAlt).click();
        cy.get(':nth-child(3) > .r-1i6wzkk > .css-175oi2r'). click();
        cy.contains('Create Account').scrollIntoView().click(); 
        cy.contains('Please enter the 6-digit code sent to your email').should('be.visible');
    })
    it('Sign up with Polish chars (email)', () => {
        cy.get('input[placeholder="Insert your first name"]'). click(). type('Fłavia');
        cy.get('input[placeholder="Insert your surname"]'). click(). type(`Morais${Math.round(Math.random() * 100)}`);
        cy.contains('Email').scrollIntoView().click(); 
        cy.get('input[placeholder="youremail@example.com"]'). click(). type(`flavia.ormf${Math.round(Math.random() * 100)}@mailinator.com`);
        cy.get('input[placeholder="*****"]').eq(0).click().type('#Test123',{ log: false });
        cy.get('input[placeholder="*****"]').eq(1).click(). type('#Test123',{ log: false });
        cy.get(imageComAlt).click();
        cy.get(':nth-child(3) > .r-1i6wzkk > .css-175oi2r'). click();
        cy.contains('Create Account').scrollIntoView().click(); 
        cy.contains('Please enter the 6-digit code sent to your email').should('be.visible');
       })

    
    it('Sign up with BR chars (phone number)', () => {
        cy.window().then((win) => {
            win.gerarNumeroCelularAleatorio = function () {
              const ddd = Math.floor(Math.random() * 90) + 10;
              const parteNumerica = Math.floor(Math.random() * 900000000) + 100000000;
              return `(${ddd}) 9${parteNumerica}`;
            };
        });
        cy.get('input[placeholder="Insert your first name"]'). click(). type('Flávia');
        cy.get('input[placeholder="Insert your surname"]'). click(). type(`Morais${Math.round(Math.random() * 100)}`);   
        cy.get('.z-10 > .flex-col > .rounded-lg > .r-1loqt21').click();
        cy.contains('Brazil').scrollIntoView().click();
        cy.window().then((win) => {
        const phoneElement = win.gerarNumeroCelularAleatorio();
        cy.get('.z-10 > .flex-col > .rounded-lg > .css-11aywtz').click().type(phoneElement);
        cy.get('input[placeholder="*****"]').eq(0).click().type('#Test123',{ log: false });
        cy.get('input[placeholder="*****"]').eq(1).click(). type('#Test123',{ log: false });
        cy.get(imageComAlt).click();
        cy.get(':nth-child(3) > .r-1i6wzkk > .css-175oi2r'). click();
        cy.contains('Create Account').scrollIntoView().click();
        cy.contains('Please enter the 6-digit code sent to your phone number').should('be.visible');
    })
})

    it('Sign up with Polish chars (phone number)', () => {
        cy.window().then((win) => {
            win.gerarNumeroCelularAleatorio = function () {
              const ddd = Math.floor(Math.random() * 90) + 10;
              const parteNumerica = Math.floor(Math.random() * 900000000) + 100000000;
              return `(${ddd}) 9${parteNumerica}`;
            };
        });
        cy.get('input[placeholder="Insert your first name"]'). click(). type('Fłavia');
        cy.get('input[placeholder="Insert your surname"]'). click(). type(`Morais${Math.round(Math.random() * 100)}`);   
        cy.get('.z-10 > .flex-col > .rounded-lg > .r-1loqt21').click();
        cy.contains('Brazil').scrollIntoView().click();
        cy.window().then((win) => {
        const phoneElement = win.gerarNumeroCelularAleatorio();
        cy.get('.z-10 > .flex-col > .rounded-lg > .css-11aywtz').click().type(phoneElement);
        cy.get('input[placeholder="*****"]').eq(0).click().type('#Test123',{ log: false });
        cy.get('input[placeholder="*****"]').eq(1).click(). type('#Test123',{ log: false });
        cy.get(imageComAlt).click();
        cy.get(':nth-child(3) > .r-1i6wzkk > .css-175oi2r'). click();
        cy.contains('Create Account').scrollIntoView().click();
        cy.contains('Please enter the 6-digit code sent to your phone number').should('be.visible');
    })
})  

it('First name validation rule', () => { 
    cy.get('input[placeholder="Insert your first name"]'). click(). type('Fl');
    cy.get('input[placeholder="Insert your surname"]'). click(). type(`Morais${Math.round(Math.random() * 100)}`);
    cy.contains('Email').scrollIntoView().click(); 
    cy.get('input[placeholder="youremail@example.com"]'). click(). type(`flavia.ormf${Math.round(Math.random() * 100)}@mailinator.com`);
    cy.get('input[placeholder="*****"]').eq(0).click().type('#Test123',{ log: false });
    cy.get('input[placeholder="*****"]').eq(1).click(). type('#Test123',{ log: false });
    cy.get(imageComAlt).click();
    cy.get(':nth-child(3) > .r-1i6wzkk > .css-175oi2r'). click();
    cy.contains('Create Account').scrollIntoView().click(); 
    cy.contains('First name must be at least 3 characters long').should('be.visible');
    })

it('Surname validation rule', () => { 
    cy.get('input[placeholder="Insert your first name"]'). click(). type('Flávia');
    cy.get('input[placeholder="Insert your surname"]'). click(). type('T');
    cy.contains('Email').scrollIntoView().click(); 
    cy.get('input[placeholder="youremail@example.com"]'). click(). type(`flavia.ormf${Math.round(Math.random() * 100)}@mailinator.com`);
    cy.get('input[placeholder="*****"]').eq(0).click().type('#Test123',{ log: false });
    cy.get('input[placeholder="*****"]').eq(1).click(). type('#Test123',{ log: false });
    cy.get(imageComAlt).click();
    cy.get(':nth-child(3) > .r-1i6wzkk > .css-175oi2r'). click();
    cy.contains('Create Account').scrollIntoView().click(); 
    cy.contains('Surname must be at least 3 characters long').should('be.visible'); 
    })

it('Phone number validation', () => { 
    cy.get('input[placeholder="Insert your first name"]'). click(). type('Flávia');
    cy.get('input[placeholder="Insert your surname"]'). click(). type('Morais');
    cy.get('.z-10 > .flex-col > .rounded-lg > .css-11aywtz').click().type('1234')
    cy.get('input[placeholder="*****"]').eq(0).click().type('#Test123',{ log: false });
    cy.get('input[placeholder="*****"]').eq(1).click(). type('#Test123',{ log: false });
    cy.get(imageComAlt).click();
    cy.get(':nth-child(3) > .r-1i6wzkk > .css-175oi2r'). click();
    cy.contains('Create Account').scrollIntoView().click(); 
    cy.contains('Phone number is invalid').should('be.visible'); 
    })

it('Password validation rule', () => { 
    cy.get('input[placeholder="Insert your first name"]'). click(). type('Flávia');
    cy.get('input[placeholder="Insert your surname"]'). click(). type('Morais');
    cy.get('.z-10 > .flex-col > .rounded-lg > .css-11aywtz').click().type('1234')
    cy.get('input[placeholder="*****"]').eq(0).click().type('#Test1',{ log: false });
    cy.get('input[placeholder="*****"]').eq(1).click(). type('#Test123',{ log: false });
    cy.get(imageComAlt).click();
    cy.get(':nth-child(3) > .r-1i6wzkk > .css-175oi2r'). click();
    cy.contains('Create Account').scrollIntoView().click(); 
    cy.contains('Password must be at least 8 characters long').should('be.visible'); 
    cy.contains('Passwords must match').should('be.visible');
    })

it('Repeat password required field', () => {    
    cy.get('input[placeholder="Insert your first name"]'). click(). type('Flávia');
    cy.get('input[placeholder="Insert your surname"]'). click(). type('Morais');
    cy.get('.z-10 > .flex-col > .rounded-lg > .css-11aywtz').click().type('21995623494');
    cy.get('input[placeholder="*****"]').eq(0).click().type('#Test123',{ log: false });
    cy.get(imageComAlt).click();
    cy.get(':nth-child(3) > .r-1i6wzkk > .css-175oi2r'). click();
    cy.contains('Create Account').scrollIntoView().click(); 
    cy.contains('This field is required').should('be.visible');;	
})

it('Select vehicle rule', () => {  
    cy.get('input[placeholder="Insert your first name"]'). click(). type('Flávia');
    cy.get('input[placeholder="Insert your surname"]'). click(). type('Morais');
    cy.get('.z-10 > .flex-col > .rounded-lg > .css-11aywtz').click().type('21995623494');
    cy.get('input[placeholder="*****"]').eq(0).click().type('#Test123',{ log: false });
    cy.get('input[placeholder="*****"]').eq(1).click(). type('#Test123',{ log: false });
    cy.get(':nth-child(3) > .r-1i6wzkk > .css-175oi2r'). click();
    cy.contains('Create Account').scrollIntoView().click(); 
    cy.contains('You must select at least one vehicle');	
    })

it('Accept terms and privacy rule', () => { 
    cy.get('input[placeholder="Insert your first name"]'). click(). type('Flávia');
    cy.get('input[placeholder="Insert your surname"]'). click(). type('Morais');
    cy.get('.z-10 > .flex-col > .rounded-lg > .css-11aywtz').click().type('21995623494');
    cy.get('input[placeholder="*****"]').eq(0).click().type('#Test123',{ log: false });
    cy.get('input[placeholder="*****"]').eq(1).click(). type('#Test123',{ log: false });
    cy.get(imageComAlt).click();
    cy.contains('Create Account').scrollIntoView().click(); 
    cy.contains('You must accept terms and privacy').should('be.visible');
    })

it.only('I already have an account button', () => {  
    cy.contains('I already have an account').scrollIntoView().click(); 
    cy.contains('Jump right in! Sign in to experience the magic of your account.').should('be.visible');
})

})