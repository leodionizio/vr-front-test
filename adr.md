# ADR: Decisão sobre Estrutura do Projeto e Uso de Module Federation

## Contexto

Durante o desenvolvimento do projeto de frontend para a **VR Benefícios**, que envolve múltiplos microfrontends (**header** e **footer**) integrados a um aplicativo principal (**root-app**), tomamos algumas decisões arquiteturais importantes sobre como estruturar e gerenciar o código.

Duas abordagens foram consideradas:
1. **Uso de um gerenciador de monorepo**, como **Lerna** ou **Nx**, para unificar a gestão dos pacotes e dependências dos microfrontends.
2. **Uso de Webpack Module Federation** para carregar e renderizar dinamicamente os microfrontends.

### Decisão 1: Não usar um gerenciador de monorepo

**Decisão**: Optei por **não utilizar um gerenciador de monorepo** como **Lerna** ou **Nx**.

**Razão**: Acredito que seria mais interessante manter cada aplicação funcionando separadamente, pois isso reflete melhor um cenário real onde os microfrontends são geridos de forma independente. Em ambientes reais de produção, microfrontends costumam ser mantidos em repositórios diferentes, permitindo maior independência entre as equipes e ciclos de deploy. 

Além disso, essa abordagem facilita o desenvolvimento modular e a separação de responsabilidades, permitindo que os microfrontends possam ser atualizados e implantados de forma independente do app principal.

**Implicações**:
- Cada microfrontend tem suas próprias dependências e scripts de desenvolvimento.
- O gerenciamento individual facilita a independência entre os módulos.
- Não há necessidade de lidar com a complexidade adicional de configuração de ferramentas de monorepo, mantendo a simplicidade no desenvolvimento.

### Decisão 2: Usar Webpack Module Federation

**Decisão**: Utilizei **Webpack Module Federation** para integrar os microfrontends no `root-app`.

**Razão**: O **Module Federation** foi escolhido porque permite que cada microfrontend seja carregado dinamicamente como um módulo remoto no aplicativo principal, sem precisar ser incluído diretamente no build. Essa abordagem oferece várias vantagens:
- **Separação clara de responsabilidades**: Cada microfrontend pode ser desenvolvido, versionado e implantado de forma independente.
- **Carregamento dinâmico**: O Webpack Module Federation permite que os microfrontends sejam carregados sob demanda, reduzindo o tempo de build do aplicativo principal e melhorando o desempenho.
- **Escalabilidade**: Essa arquitetura permite a adição de novos microfrontends no futuro, sem a necessidade de alterar significativamente o aplicativo principal.

**Implicações**:
- Os microfrontends são expostos e consumidos como módulos remotos via **Module Federation**.
- O aplicativo principal (`root-app`) carrega e renderiza os microfrontends de forma dinâmica, proporcionando uma experiência de desenvolvimento mais modular e escalável.
- A estrutura de **Module Federation** também oferece suporte a atualizações independentes dos microfrontends, sem necessidade de rebuild completo.

## Status

Decisão finalizada e implementada.
