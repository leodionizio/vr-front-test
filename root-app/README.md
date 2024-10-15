# Root App

O **Root App** é o aplicativo principal do teste de frontend para a **VR Benefícios**. Ele utiliza **Webpack Module Federation** para carregar e renderizar dinamicamente os microfrontends `header` e `footer`.

## 📋 Requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

## 🚀 Como rodar o projeto

1. **Instalar as dependências**

   Navegue até a pasta `root-app` e execute o comando:

   ```bash
   yarn install
   ```

2. **Iniciar o servidor de desenvolvimento**

   Para iniciar o servidor local, execute:

   ```bash
   yarn start
   ```

   O aplicativo será servido em `http://localhost:3000` e carregará os microfrontends de `header` e `footer`.

## 📦 Tecnologias Utilizadas

- **React**: Biblioteca para criação de interfaces.
- **Webpack Module Federation**: Para integrar os microfrontends no root-app de forma modular e dinâmica.
- **Jest**: Framework para testes unitários.
