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

Avaliable:

- List users fetched
- Search user on list
- Sort users by column list
- Select columns to show or hide

Coming soon:

- Filter users by Nationalities
- Other view type to select (Card List)
- More instaltion types with custom scripts\*\*
- Own backend for better control
- User details

\*\* Being able to use Docker and integrate commands with the backend to be created

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

## Technologies

Used for this project:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://pt-br.reactjs.org/)
- [GIT](https://git-scm.com/)
- [Netlify](https://app.netlify.com/)

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

## More Explanations

Below is a brief explanation of why I chose and used the technologies mentioned above.

<div>
  <details>
    <summary>Netlify</summary>
    <p>At the beginning of this README there is a link to view this project live. And that was made possible with ease thanks to Netlify. netlify is a great tool to host websites for free and as I needed something fast, I decided to go for something I already knew. I really like this tool because it uses CI/CD itself to keep the page live and also monitors any commit/PR changes to be able to test the application even before publishing. Usually I would choose github pages to use with my own domain, but this time I wanted to use the Netlify integration to simulate a code in production.</p>
  </details>
  <details>
    <summary>GIT</summary>
    <p>There's not much to say about git. Best code versioner, without a doubt.</p>
  </details>
  <details>
    <summary>Typescript</summary>
    <p>Like any standardized project, choosing typescript to use all available javascript resources and even those not available in the language was the best choice. Both to identify errors and to define the types that needed to be used in the application and also be used by others who would change this code</p>
  </details>
  <details>
    <summary>Node.js</summary>
    <p>The objective was to have a rapid development and as simple as possible to be delivered in the shortest possible time.</p>
  </details>
  <details>
    <summary>Reactjs</summary>
    <p>For projects with possible growth and looking for both scalability and stability, React is an excellent framework to meet these two demands. I decided that it would be ideal both because it is a framework that I already use often, but also because it is ideal to meet the speed of creation I needed and also because it is an excellent componentizer. Working with Components is undoubtedly very good in terms of scalability and maintenance.</p>
  </details>
  <details>
    <summary>MUI</summary>
    <p>Despite the fact that I like to style my components one-by-one with other tools like `styledComponents`, having little time to develop led me to use the MUI that I already use in many other projects, but this time I left the theming for the MUI to do, while I was only left with the creation and use of the components, making my work much easier and reducing development speed.</p>
  </details>
  <details>
    <summary>React Query</summary>
    <p>When using `React Query`, my goal was to get better control over the application cache, being able to maintain more data persistence and make the whole application flow more smoothly. However, I took into account that I would be able to do the backend as well, so if there is no `api` folder in this project so far, I clearly couldn't finish the application the way I would like, which is by adding a flow control and also a data caching that would only be controlled by my own api.</p>
  </details>
  <details>
    <summary>React Router</summary>
    <p>I've known the lib for a long time and I've been using it since the beginning of its version to control the routes of my applications since it by itself provides a good standardization to the code. Too bad I couldn't make more screens as I would like, and if I didn't add more pages after writing this README, then this lib became useless for the application as a whole. But it's always good to keep, thinking about the possibility of one day growing.</p>
  </details>
  <details>
    <summary>Axios</summary>
    <p>I have always used axios to make my API queries, since its interface is simple to use and it is even possible to create some very good patterns with it. No doubt I really like using this lib.</p>
  </details>
  <details>
    <summary>UUID</summary>
    <p>During development I noticed that the id which is returned by the api sometimes comes null or empty and this was creating conflicts inside the list component so to solve this I installed `uuid` to create a unique id whenever the query was done, with that the identifier problem was solved</p>
  </details>
</div>

[Go to top ⬆](#sessions)

## Review

I definitely enjoyed trying out new things in this project like using React Query which is a new technology for me or challenging myself using just the MUI as a base without 'forcibly' styling anything via `Styled Components`. However, the lack of time was a very decisive factor in the fact that I didn't do everything I wanted. I intend to keep this project evolving, but I can't say if it will fulfill its original purpose. At least I had fun trying out a lot of new things and solving the various problems that I appear on the way.

Below is more about the structure of the project, which was another thing that also decided to go with the novelty and I believe that I found a new pattern to inspire me architecturally in my next projects. I believe that at least I gained a lot of knowledge with this and I hope to continue evolving in this way in all the next challenges.

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
Internally the `src` work with:

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
