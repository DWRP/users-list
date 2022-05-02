# USER LIST

<a href="README.md">
    <img src="https://img.shields.io/badge/README-EN-green?color=blue&label=README" alt="README" style="display: inline;"/>
</a>
<a href="README.PT_BR.md">
    <img src="https://img.shields.io/badge/README-PT-green?label=README" alt="README PT-BR" style="display: inline;"/>
</a>
<a href="https://www.linkedin.com/in/douglaswalas/"  style="display: inline;">
    <img src="https://img.shields.io/badge/Autor-Douglas%20Walas-green?color=green&label=Autor&style=flat-square" alt="Repository Author"/>
</a>

_<a href="README.md">Você pode ler esse README em EN-US clicando aqui!</a>_

Página da Web para obter dados obtidos na API REST e mostrar na lista.
API usada: https://randomuser.me/api/
Visualize o site em: https://user-list-dwrp.netlify.app

<img width="890" alt="image" src="https://user-images.githubusercontent.com/34161002/166256918-202b5153-76a4-4442-902f-0a8e6e6b23eb.png" >

## Sessions
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Architecture](#architecture)
- [Technologies](#technologies)
- [React Technologies](#react-technologies)
- [Final Considerations](#final-considerations)
- [Meta](#meta)
- [Contributing](#contributing)

[Go to top ⬆](#user-list)

## Features 

Disponíveis:
  - Listar usuários buscados
  - Procurar usuário na lista
  - Ordenar usuários pelas colunas
  - Selecionar colunas para visualizar/ocutar

Em breve:
  - Filtrar usuários por nacionalidades
  - Outro tipo de visualização para selecionar (Card List)
  - Mais tipos de instalação via scripts**
  - Backend próprio para melhor controle 
  - Detalhes do usuário

** Poder usar Docker e integrar comandos com backend a ser criado

[Go to top ⬆](#sessions)

## Requirements

- Node.js versão `LTS`
- npm versão `^6.14.13` ou yarn versão `^1.22.18`

[Go to top ⬆](#sessions)

## Installation
```bash
  cd web
  npm install
  npm start
```
or

```bash
  cd web
  yarn install
  yarn start
```

[Go to top ⬆](#sessions)

## Architecture
A estrutura deste projeto é essa:

```
user-list
├── README.md
├── README.PT_BR.md
├── CHANGELOG.md
├── LICENSE.md
├── .gitignore
└── web
    ├── .env.development
    ├── package.json
    ├── tsconfig.json
    ├── yarn.lok
    ├── node_modules
    ├── public
    |   ├── favicon.ico
    |   ├── index.html
    |   └── robots.txt
    └── src
        ├── components
        ├── pages
        ├── routes
        ├── utils
        ├── index.tsx
        └── react-app-env.d.ts
```

Sem muita complexidade, apenas tentando manter limpa. 
Internamente o `src` funciona com:
- components: contém os components globais da aplicação_
- page: _contém as páginas da aplicação, como também pode conter subpastas_
  - ComponentScreen.tsx: Toda lógica do componente é contida aqui!
  - subpastas - opicional:
    - modules: Aqui ficam módulos do `ComponentScreen`. o `ComponentScreen` pode também gerencia N modulos, como por exemplo: `Modulo de Listagem`, `Modulo de Detalhe`, `Modulo de Edição` e com isso cada página pode conter N rotas organizadas pelos seus módulos**
    - styles: Todos os estilos da página ficam aqui.
    - hooks: Talvez o `ComponentScreen` pode estar poluido, então é necessário criar um hook para limpar o `ComponentScreen`
- routes: _Todas as rotas da aplicação estão aqui_
- utils: coisas como `constants`, `services`, `functions` e outros podem estar aqui!_

**Imagine a página de usuários, caso você precise adicionar a rota `/listar` você pode ter o módulo `UserList` dentro do `UserScreen` e também ter depois o detalhamento com `UserView` também em `UserScreen` e organizar isso da maneira que dejesar (seja via parametro de componente ou via rota)

[Go to top ⬆](#sessions)

## Technologies

Usado para este projeto:
* [Node.js](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/)
* [React](https://pt-br.reactjs.org/)
* [GIT](https://git-scm.com/)
* [Netlify](https://app.netlify.com/)

[Go to top ⬆](#sessions)

## React Technologies

Bibliotecas usadas aqui:
  - [Create React APP](https://github.com/facebook/create-react-app/)
  - [MUI](https://mui.com/)
  - [React Query](https://react-query.tanstack.com/)
  - [React Router](https://reactrouter.com)
  - [Axios](https://axios-http.com/)
  - [UUID](https://github.com/uuidjs/uuid#readme)

[Go to top ⬆](#sessions)

## Final Considerations
Este projeto tinha o intuito de conter mais do que apenas uma listagem simples. Caso você esteja vendo este projeto e ainda existem recursos a serem implementados, provávelmente ele não está como eu gostaria ainda.
O objetivo final é ter uma API própria que faça a consulta na API do `randomuser.me` para ser possível um controle tanto de quantidade de consultas, quanto de contole do tráfego e cacheamento. 
Além de que também seria adicionado duas opções de listagem, uma em tabela e outra em cards. E uma tela de detalhes para exibir informações mais precisas do usuário que fosse selecionado.

[Go to top ⬆](#sessions)

## Meta

Douglas Walas – [Linkedin](https://www.linkedin.com/in/douglaswalas/)

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

[https://github.com/DWRP](https://github.com/DWRP/)

## Contributing

1. Faça o _fork_ do projeto (<https://github.com/DWRP/user-list/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_
