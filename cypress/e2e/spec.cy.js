describe('Teste Agibank', () => {
  const data = {
    search: 'Empréstimo FGTS',
    inexisteteSearch: 'Pesquisa Inexistente'
  };

  beforeEach(() => {
    cy.visit('/');
    cy.get('.ast-search-icon').should('be.visible').click();
  });

  it('Pesquisa Válida', () => {
    cy.get('input[id=search-field]').should('be.visible').clear().type(data.search + '{enter}');
    cy.contains(`Resultados encontrados para: ${data.search}`).should('be.visible');
    cy.contains('Como funciona o empréstimo do FGTS? Confira tudo aqui!').should('be.visible')
  });

  it('Pesquisa Inválida', () => {
    cy.get('input[id=search-field]').should('be.visible').clear().type(data.inexisteteSearch + '{enter}');
    cy.contains('Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras. Pesquisar por:').should('be.visible');

  });
});
