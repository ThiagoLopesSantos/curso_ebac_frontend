# Projeto de Testes Automatizados com Cypress para Agenda de Contatos

Este projeto foi desenvolvido como parte do exercício da matéria de automação de testes. O objetivo é criar uma suíte de testes automatizados do tipo end-to-end (E2E) para a aplicação "Agenda de Contatos", validando suas principais funcionalidades de criação, edição e remoção.

**Aplicação Testada:** [https://ebac-agenda-contatos-tan.vercel.app/](https://ebac-agenda-contatos-tan.vercel.app/)

---

## 🚀 Tecnologias Utilizadas

* **Cypress:** Framework principal para a escrita e execução dos testes E2E.
* **JavaScript:** Linguagem de programação para a criação dos scripts de teste.
* **Node.js:** Ambiente de execução para o Cypress.

---

## ✅ Funcionalidades Testadas

Os testes automatizados cobrem o ciclo de vida completo de um contato na agenda, garantindo que as seguintes funcionalidades estão operando como esperado:

1.  **Inclusão de Contato:**
    * O teste preenche os campos de nome, e-mail e telefone.
    * Clica no botão "Adicionar".
    * Verifica se o novo contato aparece corretamente na lista.

2.  **Alteração de Contato:**
    * O teste localiza um contato existente na lista.
    * Clica no botão "Editar".
    * Altera as informações de nome e e-mail.
    * Clica no botão "Alterar" para salvar as modificações.
    * Verifica se as novas informações são exibidas e as antigas não estão mais visíveis.

3.  **Remoção de Contato:**
    * O teste localiza um contato na lista.
    * Clica no botão "Deletar".
    * Verifica se o contato foi efetivamente removido da lista.

---

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para configurar e rodar os testes em seu ambiente local.

### Pré-requisitos

* Ter o [Node.js](https://nodejs.org/en/) instalado (versão 16 ou superior).
* Ter o Git instalado para clonar o repositório.

### Passos para Execução

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/ThiagoLopesSantos/curso_ebac_frontend.git](https://github.com/ThiagoLopesSantos/curso_ebac_frontend.git)
    ```

    **Acesse a branch correta**
    ```bash
    git checkout exercicio_cypress
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd curso_ebac_frontend
    ```

3.  **Instale as dependências do Cypress:**
    ```bash
    npm install
    ```

4.  **Execute os testes:**

    Você pode rodar os testes de duas formas:

    * **Modo Interativo (recomendado para visualização):**
        * Abre a interface gráfica do Cypress, onde você pode ver os testes rodando em tempo real.
        ```bash
        npx cypress open
        ```
        * Na interface, clique no arquivo de teste desejado para executá-lo.

    * **Modo Headless (execução via terminal):**
        * Roda todos os testes diretamente no terminal, sem abrir o navegador. Ideal para integração contínua.
        ```bash
        npx cypress run
        ```

---

## 📁 Estrutura do Projeto

* Os scripts de teste estão localizados no diretório `cypress/e2e/`.
* O arquivo de teste contém todos os cenários (inclusão, alteração e remoção) para validar a jornada do usuário na aplicação.