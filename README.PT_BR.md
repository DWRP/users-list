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
- [Technologies](#technologies)
- [React Technologies](#react-technologies)
- [More Explanations](#more-explanations)
- [Review](#review)
- [Architecture](#architecture)
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
- Mais tipos de instalação via scripts\*\*
- Backend próprio para melhor controle
- Detalhes do usuário

\*\* Poder usar Docker e integrar comandos com backend a ser criado

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

## Technologies

Usado para este projeto:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://pt-br.reactjs.org/)
- [GIT](https://git-scm.com/)
- [Netlify](https://app.netlify.com/)

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

## More Explanations

Below is a brief explanation of why I chose and used the technologies mentioned above.

<div>
  <details>
    <summary>Netlify</summary>
    <p>No inicio deste README tem um link para visualizar esse projeto no ar. E isso foi possível com facilidade graças ao Netlify. O netlify é uma ótima ferramenta para hospedar sites gratuitamente e como eu precisava de algo rápido, decidir ir por algo que eu já conhecia. Gosto muito dessa ferramenta pois ela utiliza de CI/CD ela mesma para manter a página no ar e também monitora qualquer alteração de commit/PR para ser possível testar a aplicação antes mesmo de publicar. Geralmente eu iria escolher o github pages para utilizar junto do meu dominio próprio, mas eu queria utilizar dessa vez da integração do Netlify para simular um código em produção.</p>
  </details>
  <details>
    <summary>GIT</summary>
    <p>Nem tem muito para falar sobre o git. Melhor versionador de código, sem dúvida alguma.</p>
  </details>
  <details>
    <summary>Typescript</summary>
    <p>Como todo projeto padronizado, escolher o typescript para utilizar todo recurso disponível do javascript e até os não disponíveis da linguagem foi a melhor escolha. Tanto para identificar erros, quanto para definir os tipos que precisavam ser usados na aplicação e ser utilizado também por outros que fossem alterar este código</p>
  </details>
  <details>
    <summary>Node.js</summary>
    <p>O objetivo era ter um desenvolvimento rápido e o mais simples possível para ser entregue no menor tempo viável.</p>
  </details>
  <details>
    <summary>Reactjs</summary>
    <p>Para projetos de possível crescimento e que busca tanto escalabilidade quanto estabilidade, o React é um exelente framework para atender a essas duas demandas. Decidi que seria o ideal tanto por ser um framework que já uso frequentemente, mas também por ser ideal para atender a velocidade de criação que eu precisava e também como ser um excelente componentizador. Trabalhar com Componentes sem dúvida é muito bom a nível de escalabilidade e manutenção.</p>
  </details>
  <details>
    <summary>MUI</summary>
    <p>Apesar do fato de eu gostar mais de estilizar um-a-um meus componentes com outras ferramentas como o `styledComponents`, ter pouco tempo para desenvolver me levou a utilizar a MUI que já utilizo em muitos outros projetos, mas dessa vez deixei a tematização para o MUI fazer, enquanto eu só fiquei com a criação e utilização dos componentes, facilitando muito meu trabalho e reduzindo à velocidade de desenvolvimento.</p>
  </details>
  <details>
    <summary>React Query</summary>
    <p>Ao usar o `React Query`, meu objetivo era de obter um melhor controle de cache da aplicação, podendo manter mais persistência dos dados e fazer toda aplicação fluir de maneira mais suave. Porém, levei em conta que eu iria conseguir fazer o backend também, então se até o momento não há uma pasta `api` neste projeto, eu claramente não consegui finalizar a aplicação do jeito que eu gostaria, que é adicionando um controle de fluxo e também um cacheamento de dados que seria controlado apenas pela minha própria api.</p>
  </details>
  <details>
    <summary>React Router</summary>
    <p>Já conheço a lib a um bom tempo e uso desde os primórdios de sua versão para controlar as rotas das minhas aplicações já que ela por si só fornece uma boa padronização ao código. Uma pena eu não ter conseguido fazer mais telas como eu gostaria, e se não adicionei mais páginas após ter escrito esse README, então essa lib se tornou inútil para a aplicação como um todo. Mas é sempre bom manter, pensando na possibilidade de um dia crescer.</p>
  </details>
  <details>
    <summary>Axios</summary>
    <p>Sempre utilizei o axios para fazer minhas consultas à API's, já que sua interface é simples de usar e é até possível criar alguns padrões muito bons com ele. Sem dúvida gosto muito de usar essa lib.</p>
  </details>
  <details>
    <summary>UUID</summary>
    <p>Durante o desenvolvimento, notei que o ID que é retornado pela api às vezes vem nula ou vazia e isso estava criando conflitos dentro do componente de lista, então para resolver isso, instalei o `uuid` para criar um id único sempre que a consulta fosse feita, com isso o problema do identificador foi resolvido</p>
  </details>
</div>

[Go to top ⬆](#sessions)


## Review

Definitivamente eu gostei de testar coisas novas neste projeto como usar o React Query que é uma tecnologia nova para mim ou me desafiar usando só o MUI como base sem estilizar nada 'à força" via `Styled Components`. Porém, a falta de tempo foi um fator muito decisivo no fato de não ter feito tudo o que eu gostaria. Pretendo manter esse projeto em evolução, mas não sei dizer se vai atender o propósito original dele. Ao menos me diverti testando muitas coisas novas e resolvendo os vários problemas que me apareceçam no caminho.

Abaixo tem mais coisa sobre a estrutura do projeto, que foi outra coisa que também decidir ir na novidade e acredito que achei um padrão novo para me inspirar arquiteturalmente nos meus próximos projetos. Acredito que ao menos ganhei muito conhecimento com isso e espero continuar evoluindo desse jeito em todos os próximos desafios.

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

- components: contém os components globais da aplicação\_
- page: _contém as páginas da aplicação, como também pode conter subpastas_
  - ComponentScreen.tsx: Toda lógica do componente é contida aqui!
  - subpastas - opicional:
    - modules: Aqui ficam módulos do `ComponentScreen`. o `ComponentScreen` pode também gerencia N modulos, como por exemplo: `Modulo de Listagem`, `Modulo de Detalhe`, `Modulo de Edição` e com isso cada página pode conter N rotas organizadas pelos seus módulos\*\*
    - styles: Todos os estilos da página ficam aqui.
    - hooks: Talvez o `ComponentScreen` pode estar poluido, então é necessário criar um hook para limpar o `ComponentScreen`
- routes: _Todas as rotas da aplicação estão aqui_
- utils: coisas como `constants`, `services`, `functions` e outros podem estar aqui!\_

\*\*Imagine a página de usuários, caso você precise adicionar a rota `/listar` você pode ter o módulo `UserList` dentro do `UserScreen` e também ter depois o detalhamento com `UserView` também em `UserScreen` e organizar isso da maneira que dejesar (seja via parametro de componente ou via rota)

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
