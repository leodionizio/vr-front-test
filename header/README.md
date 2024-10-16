# Header Microfrontend

Este é o microfrontend **Header** que faz parte do teste de frontend para a **VR Benefícios**. Ele é carregado dinamicamente no aplicativo principal (root-app) usando **Webpack Module Federation**.

## 📋 Requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

## 🚀 Como rodar o projeto

1. **Instalar as dependências**

   Navegue até a pasta `header` e execute o comando:

   ```bash
   yarn install
   ```

2. **Iniciar o servidor de desenvolvimento**

   Para iniciar o servidor local, execute:

   ```bash
   yarn start
   ```

   O microfrontend `header` será servido em `http://localhost:3001` e pode ser integrado ao root-app.

3. **Rodar os testes unitários e de integração**

   Para rodar os testes, execute:

   ```bash
   yarn test
   ```

## 📦 Tecnologias Utilizadas

- **React**: Biblioteca para criação de interfaces.
- **Webpack Module Federation**: Para expor o microfrontend e permitir que ele seja utilizado no root-app.
- **Jest**: Framework para testes unitários.
