

This is a repository for a REST API. Using this API We can perform following tasks - 
1. create users (POSTMAN LINK - http://localhost:8080/auth/register) 
2. login (POSTMAN LINK - https://localhost:8080/auth/login)
3. get users (POSTMAN LINK - http://localhost:8080/users)
4. delete user (POSTMAN LINK - http://localhost:8080/users/:id)
5. update user (POSTMAN LINK - http://localhost:8080/users/:id)

Features:

- Environment, Typescript, Nodemon setup
- MongoDB & Mongoose connect, Database creation
- Controllers creation
- Middlewares creation
- Cookie based authentication
- Postman testing
- Create, Read, Update

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone 
```

### Install packages

```shell
npm i
```

### Setup MongoDB URL

In `src/index.ts`:

```js
const MONGO_URL = ''; // DB URI
```

### Start the app

```shell
npm start
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `start`         | Starts a development instance of the app |
