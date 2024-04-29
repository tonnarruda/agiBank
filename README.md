#Teste Agibank
Este repositório contém testes automatizados usando Cypress para validar a funcionalidade de pesquisa em um site específico. Os testes foram desenvolvidos para garantir que a pesquisa retorne resultados corretos e trate casos de pesquisa inválida adequadamente.

Pré-requisitos
Node.js instalado (versão recomendada: LTS)
NPM ou Yarn instalado
Como executar os testes
Clone este repositório para sua máquina local:
bash
Copy code
git clone https://github.com/seu-usuario/teste-agibank.git
Navegue até o diretório do projeto:
bash
Copy code
cd teste-agibank
Instale as dependências do projeto:
bash
Copy code
npm install
Execute os testes Cypress:
bash
Copy code
npm run test
Isso abrirá a interface do Cypress e executará os testes automatizados.
Estrutura do projeto
cypress/integration/: Este diretório contém todos os arquivos de teste escritos em Cypress.
cypress/fixtures/: Este diretório contém dados de exemplo usados nos testes.
cypress/support/: Este diretório contém arquivos de suporte, como comandos personalizados e plugins.
Descrição dos testes
Pesquisa Válida
Cenário: Testa se a pesquisa retorna resultados corretos para uma consulta válida.
Passos:
Acessa a página inicial.
Clica no ícone de pesquisa.
Insere a consulta "Empréstimo FGTS" no campo de pesquisa.
Pressiona Enter.
Resultado Esperado:
Deve exibir os resultados para a consulta "Empréstimo FGTS".
Deve conter o texto "Resultados encontrados para: Empréstimo FGTS".
Deve exibir o resultado "Como funciona o empréstimo do FGTS? Confira tudo aqui!".
Pesquisa Inválida
Cenário: Testa se a pesquisa trata adequadamente uma consulta inexistente.
Passos:
Acessa a página inicial.
Clica no ícone de pesquisa.
Insere uma consulta inexistente no campo de pesquisa.
Pressiona Enter.
Resultado Esperado:
Deve exibir uma mensagem informando que nada foi encontrado para a consulta.
Deve exibir sugestões para pesquisar por outras palavras.