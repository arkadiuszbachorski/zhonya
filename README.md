# Zhonya

Zhonya is an application that allows users to easily measure time which they spend on specific activity. User can manage their time better thanks to the available statistics and specific case description.

## How to run

Zhonya is available online here:

[zhonya.hekko24.pl](https://www.zhonya.hekko24.pl/)

### Locally

Clone or download repository:

```
git clone https://github.com/arkadiuszbachorski/zhonya
```

Install node_modules: 

```
npm install
```

Create .env file based on .env.example:

```dotenv
# your app url
REACT_APP_URL=http://localhost:3000
REACT_APP_API_URL=https://api.zhonya.hekko24.pl/api
# token required by API for E2E tests 
REACT_APP_E2E_TOKEN=sDx49FsldgpSDA0013x
# browser launch type for E2E tests
REACT_APP_TEST_HEADLESS=true
```

Run developer server:

```
npm run start
```

If you want to run unit and integration tests:

```
npm run test
```

If you want to run E2E tests:

```
npm run e2e
```

## About the project and technologies

That idea was maturing in my mind as a tool I would like to use myself. Time management mistakes often result from lack of clear information how much given activity can occupy. Zhonya solves that problem by becoming a source and tool of gathering time information.

I created this project myself. Starting from the idea, through specification and UI design, and ending with backend and frontend. The lack of any time or technological restriction made Zhonya a sandbox where I could test various solutions.


### Specification

I used thought map to create the first concept. Initially Zhonya was supposed to measure time needed for the projects and compare data with time estimations. However, thank to the thought map, I quickly realised it would be too big undertaking. I decided to simplify assumptions and make Zhonya general purpose application.

For the second concept I used Trello board. I wrote down functionality, database fields and relationships, few UI inspirations and made an general roadmap. As I progressed, I decided it isn't worth to still update it, because it's single-person project.

### Graphic design

For the graphic design I used Figma. During the design process I polished concept, analysed functionality and user experience. Design meant to be simple and clear. Mainly you can see only four colors: primary purple color, gray accent color, font color and background color. I only designed desktop version with the light theme.

Landing page was the toughest for me, because it required lot of graphic skills. I have bet on large call-to-action, animations, quick descriptions and contact form. Except landing page I felt quite confident, because most of the project bet on user experience with a tool.

I was using Figma for the first time, but certainly not the last. Probably I didn't use even a fraction of it's potential, but for me the project was more a prototype than pixel-perfect source. It was entertaining challenge to stand on the other side of development process.

### Backend

I was wondering for a moment whether to use Express.js. However I haven't learned it yet, so I decided to choose familiar tool. I created REST API using my favourite Laravel.

I developed part of the backend right away after graphic design. Then I started to develop backend and frontend in parallel. This approach allowed me to test it better and save some time writing only useful and well designed endpoints.

### Frontend

Of course, this is the React application. I used only Hooks, you won't find any class component. 

There isn't much global state, so I gave up Redux. I used custom hooks based on Context API instead.

I was wondering between CSS modules and styled-component. The choice fell on CSS modules with SCSS preprocessor, however today I would prefer styled-components. I had to import global package with mixins and variables anyway. At the same time, I had to use plain CSS variables to keep theme changeable without much of dirty code. Not very elegant solution.

Everything is responsive. I gave up mobile-first approach, because I designed the desktop and creating from desktop to mobile was more natural for me.

For unit and integration tests I used Jest and few @testing-library elements. For E2E tests I used Puppeteer. I decided not to mock API responses. To maintain high code quality I was accompanied by irreplaceable ESLint and Prettier.

I wrapped axios with my own hooks as HTTP client. I implemented basic and repetitive functionality, i.e notifications based on response status, loading and validation errors. I didn't implement any cache so data is fetched from API with every route change.

Among other libraries I have used:

- react-router
- react-inlt
- react-toastify
- recharts
- react-fontawesome
