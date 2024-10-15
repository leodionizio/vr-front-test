# VR Frontend Test

Este repositório contém o código de um teste de frontend desenvolvido para a **VR Benefícios**. O projeto é composto por três aplicativos principais:

- **Header** (microfrontend)
- **Footer** (microfrontend)
- **Root App** (aplicativo principal que renderiza os microfrontends)

A arquitetura utilizada é de **microfrontends** com **Module Federation**, onde o `header` e o `footer` são renderizados dinamicamente dentro do `root-app`.

## 📋 Requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) (gerenciador de pacotes)

## 🚀 Como rodar o projeto

O projeto pode ser executado de maneira simultânea utilizando um script que inicia os três aplicativos ao mesmo tempo.

### Passos:

1. **Clone o repositório**

   ```bash
   git clone git@github.com:leodionizio/vr-front-test.git
   ```

2. **Instale as dependências**

   Instale as dependências necessárias:

   ```bash
   yarn install:all
   ```

3. **Rodar os aplicativos**

   Para iniciar os três aplicativos (`header`, `footer`, e `root-app`) ao mesmo tempo, você pode usar o comando abaixo:

   ```bash
   yarn start:all
   ```

   Isso irá iniciar o servidor local para cada um dos apps.

   - O **header** será servido em `http://localhost:3001`
   - O **footer** será servido em `http://localhost:3002`
   - O **root-app** será servido em `http://localhost:3000` e incluirá os microfrontends de header e footer.

### Scripts Individuais

Se você preferir iniciar cada app separadamente, pode rodar os seguintes comandos:

- Para iniciar o **header**:
  
  ```bash
  yarn start:header
  ```

- Para iniciar o **footer**:
  
  ```bash
  yarn start:footer
  ```

- Para iniciar o **root-app**:
  
  ```bash
  yarn start:root-app
  ```

### Usando o Module Federation

Os microfrontends estão sendo integrados ao **root-app** usando **Webpack Module Federation**. Isso permite que os aplicativos `header` e `footer` sejam carregados dinamicamente como módulos remotos dentro do `root-app`, sem necessidade de build monolítica.

Você pode verificar as configurações no `webpack.config.js` de cada aplicativo.

## 📂 Estrutura do Repositório

A estrutura básica do repositório é a seguinte:

```
vr-front-test/
│
├── header/       # Microfrontend Header
├── footer/       # Microfrontend Footer
├── root-app/     # Aplicativo Principal (Root App)
├── package.json  # Configuração do projeto principal
└── README.md     # Você está aqui!
```

## 📦 Tecnologias Utilizadas

- **React**: Biblioteca para criação de interfaces.
- **Webpack**: Bundler utilizado para gerenciar a build dos microfrontends.
- **Jest**: Framework para testes unitários e integração.
- **Module Federation**: Integração dos microfrontends no root-app de forma modular e dinâmica.
- **Concurrently**: Ferramenta para rodar múltiplos scripts simultaneamente.
- **Yarn**: Gerenciador de pacotes.

## 🤝 Contribuição

Este projeto é um teste de frontend, então não estamos aceitando contribuições no momento. No entanto, fique à vontade para explorar e aprender com o código!

