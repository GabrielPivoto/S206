/// <reference types = "cypress"/>


describe('Cenário de teste: Testar as funcionalidades de Login do site Globalsqa', () => {

    it('Caso de teste: Registrar um usuário com sucesso', () => {

        cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
        cy.get('.btn-link').click();
        cy.get('#firstName').type('qainatel');
        cy.get('#Text1').type('qainatel');
        cy.get('#username').type('qainatel');
        cy.get('#password').type('qainatel');
        cy.get('.btn-primary').click();
        cy.get('.ng-binding').should('contain.text', 'Registration successful');

    })

    it('Caso de teste: Falha ao tentar registrar devido a dados inválidos', () => {

        // Aumentando a cobertura de testes. Entrando na tela de registrar por duas formas diferentes.
        cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
        cy.get('#firstName').type('qainatel');
        cy.get('#Text1').type('qainatel');
        cy.get('#username').type('qainatel');
        cy.get('#password').type('qainatel');
        cy.get('#firstName').clear();
        cy.get('.has-error > .help-block').should('have.text', 'First name is required');
        cy.get('.btn-primary').should('be.disabled');
        

    })

    it('Caso de teste: Login na plataforma com sucesso', () => {

        var userInfo = criarUsuario();
        cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
        cy.get('#username').type(userInfo[0]);
        cy.get('#password').type(userInfo[1]);
        cy.get('.btn-primary').click();
        cy.get('h1.ng-binding').should('contain.text',userInfo[0]);

    })


})

// Funcao

function criarUsuario(){


    let horas = new Date().getHours().toString();
    let minutos = new Date().getMinutes().toString();
    let segundos = new Date().getSeconds().toString();
    let userId = 'User' + horas + minutos + segundos;
    let userPas = 'UserPas' + horas + minutos + segundos;
    let userInfo = [userId,userPas];

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
    cy.get('.btn-link').click();
    cy.get('#firstName').type(userId);
    cy.get('#Text1').type(userId);
    cy.get('#username').type(userId);
    cy.get('#password').type(userPas);
    cy.get('.btn-primary').click();
    cy.get('.ng-binding').should('contain.text', 'Registration successful');

    return userInfo;

}