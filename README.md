# Workshop Platform
People understand new things when they "learn by doing". Its time our courses and **workshops** start reflecting that. Make exercises where you ask learners to build something. Then add helpful notes and your version so they try first and see what they missed.

![Demo](public/demo.jpg)

## Quick Start

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/itaditya/workshop-platform?file=/src/pages/exercises/exercise-1/playground.js)

## Advanced Setup

Fork and clone this repo and then do the following-

1. Install dependencies-

```sh
yarn install
```

2. Start frontend & server in **separate terminals**.

```sh
# Tab 1
yarn dev

# Tab 2
yarn server
```

Open the project on `http://localhost:3000/exercises/exercise-1`.

### For learners

If you want to solve Exercise 1 then open `src/pages/exercises/exercise-1/playground.js`. When you edit the component it should update in the browser in real time.

In the browser you can see the notes on the right-hand side. You can see the tutor's solution by switching tabs. Their code will be present in the `challenge.js` alongside your file.

**Ask Assistant for help**

Running `yarn assistant` can inform you about the common issues in your `playground.js` code. If you use a modern editor like VS Code then it will show squiggly lines below the problematic code as well.

**Get your code evaluated**

Running `yarn evaluate` will test if your code satisfies all the requirements of the challenge. By running `yarn evaluate --watch` you can re-evaluate automatically as soon as you change some code in `playground.js`.

### For Tutors

Exercise lives in folder `src/pages/exercises/exercise-1`. For each exercise you need to add notes in `notes.mdx` and the challenge in `challenge.js`.

**Create new exercise with**

```sh
yarn create-exercise
```

**Create evaluator tests**

You can also add an evaluator for each exercise like we do in `src/exercise-tests` folder. Run it with `yarn test-challenges`.

**Use JSON APIs**

Many challenges go along the lines of - fetch list of blog posts from an API, show the data in UI. For that there is a ready-made API server with various collections. Run it with `yarn server`.

Under the hood it uses `json-server` package so you can GET requests with pagination, filter and relations support.

* [Example Request](https://workshop-platform.netlify.app/.netlify/functions/api/users?_limit=3)
* [Documentation on API parameters](https://github.com/typicode/json-server#routes)

Available resources

```
http://localhost:9191/gallery
http://localhost:9191/products
http://localhost:9191/users
http://localhost:9191/tweets
http://localhost:9191/posts
```

You can also do mutations like POST request which would keep the side-effects in memory till the server is running.

**Lint Code**

Lint your challenges with `yarn lint-challenges`
