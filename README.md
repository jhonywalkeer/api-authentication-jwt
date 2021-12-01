<h1 align="center">
    <img width="40%"  alt="API Authentication JWT" src="./readme/assets/images/repo-icon-apijwt.svg" />
</h1>

## 💻 Repository Summary

To authenticate a user, a client application sends a JSON Web Token (JWT) in the HTTP request authorization header to its backend API. All of this built using oTypescript and TypeORM.

## 🚩 But what are you doing?

| Content                                                              |
| -------------------------------------------------------------------- |
| ✅ User migrations  |
| ✅ Users Model               |
| ✅ Cadaster route            |
| ✅ Authentication route      |
| ✅ Authentication middleware |

## 🛠 Technologies

Project was built using **Node.js**, **Typescript**, **JSON Web Token** and the following dependencies:

- **[Bcrypt.js](https://www.npmjs.com/package/bcryptjs)** - Optimized bcrypt in JavaScript with zero dependencies. Compatible to the C++ bcrypt binding on node.js and also working in the browser.

- **[ESLint](https://www.npmjs.com/package/eslint)** - Is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to JSLint and JSHint with a few exceptions

- **[Express](https://www.npmjs.com/package/express)** - Fast, unopinionated, minimalist web framework for node.

- **[Dotenv](https://www.npmjs.com/package/dotenv)** - Is a zero-dependency module that loads environment variables from a `.env` file into `process.env`. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

- **[Nodemon](https://www.npmjs.com/package/nodemon)** - Is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

- **[Prettier](https://www.npmjs.com/package/prettier)** - Is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

- **[PG](https://www.npmjs.com/package/pg)** - Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.

- **[Reflect Metadata](https://www.npmjs.com/package/reflect-metadata)** - Allows you to do runtime reflection on types. The native (non reflect-metadata) version of type inference is much poorer than reflect-metadata and consists only of typeof and instanceof

- **[TS Node](https://www.npmjs.com/package/ts-node)** - TypeScript execution and REPL for node.js, with source map and native ESM support.

- **[TypeORM](https://www.npmjs.com/package/typeorm)** - Is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES5, ES6, ES7, ES8). Its goal is to always support the latest JavaScript features and provide additional features that help you to develop any kind of application that uses databases - from small applications with a few tables to large scale enterprise applications with multiple databases.

## 🔨 Local Installation

You need [Node.js](https://nodejs.org) version 10 or higher, but if you want to use [Yarn](https://yarnpkg.com/) you can also just have it on your computer to continue.

```bash
git clone https://github.com/jhonywalkeer/api-authentication-jwt.git

$ cd api-authentication-jwt
$ npm install or yarn install
```

And now to run our api locally just run the following command:

```bash
$ cd api-authentication-jwt
$ npm dev or yarn dev
```
