# USER LIST

<a href="README.md" style="display: inline;">
    <img src="https://img.shields.io/badge/README-EN-green?label=README"  alt="README" />
</a>
<a href="README.PT_BR.md" style="display: inline;">
    <img src="https://img.shields.io/badge/README-PT-green?color=blue&label=README" alt="README PT-BR" />
</a>
<a href="https://www.linkedin.com/in/douglaswalas/"  style="display: inline;">
    <img src="https://img.shields.io/badge/Autor-Douglas%20Walas-green?color=green&label=Autor&style=flat-square" alt="Repository Author"/>
</a>

_<a href="README.PT_BR.md">You can read this `README` in language `PT-BR` on click here!</a>_

Webpage make to get data fetched on REST API and show on list.
API used: https://randomuser.me/api/
Preview this page on: https://user-list-dwrp.netlify.app

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

Avaliable:
  - List users fetched
  - Search user on list
  - Sort users by column list
  - Select columns to show or hide

Coming soon:
  - Filter users by Nationalities
  - Other view type to select (Card List)
  - More instaltion types with custom scripts**
  - Own backend for better control
  - User details

** Being able to use Docker and integrate commands with the backend to be created

[Go to top ⬆](#sessions)

## Requirements

- Node.js version `LTS`
- npm version `^6.14.13` or yarn version `^1.22.18`

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
This project structure is this::

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

No more complexty, only trying to do clean. 
Internally  the `src` work with:
- components: _contains global app components_
- page: _contains app page, may have subfolders_
  - ComponentScreen.tsx: all components logics are here!
  - subfolders - optional:
    - modules: where is it real components for `ComponentScreen`
    - styles: all styles for this pages are here.
    - hooks: maybe `ComponentScreen` can are polluted, so is need make hook function to clear `ComponentScreen`
- routes: _all app routes are here_
- utils: _things with `constants`, `services`, `functions` and others can are here!_

[Go to top ⬆](#sessions)

## Technologies

Used for this project:
* [Node.js](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/)
* [React](https://pt-br.reactjs.org/)
* [GIT](https://git-scm.com/)
* [Netlify](https://app.netlify.com/)

[Go to top ⬆](#sessions)

## React Technologies

Libs used here:
  - [Create React APP](https://github.com/facebook/create-react-app/)
  - [MUI](https://mui.com/)
  - [React Query](https://react-query.tanstack.com/)
  - [React Router](https://reactrouter.com)
  - [Axios](https://axios-http.com/)
  - [UUID](https://github.com/uuidjs/uuid#readme)

[Go to top ⬆](#sessions)

## Final Considerations
This project was intended to contain more than just a simple listing. If you are looking at this project and there are still features to be implemented, it is probably not as I would like it to yet.
The ultimate goal is to have an API of its own that makes the query in the `randomuser.me` API to be able to control both the number of queries and traffic and cache control.
In addition, two listing options would also be added, one in table and one in cards. And a details screen to display more accurate information from the selected user.

[Go to top ⬆](#sessions)
## Meta

Douglas Walas – [Linkedin](https://www.linkedin.com/in/douglaswalas/)

Distributed under the MIT license. See [LICENSE](LICENSE) for more informations.

[https://github.com/DWRP](https://github.com/DWRP/)

[Go to top ⬆](#sessions)

## Contributing

1. Make _fork_ of project (<https://github.com/DWRP/user-list/fork>)
2. Create a _branch_ for your change (`git checkout -b feature/fooBar`)
3. Make the _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Create a new _Pull Request_

[Go to top ⬆](#sessions)