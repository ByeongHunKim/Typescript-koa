# Before Start

- node v16.17.1
- npm v8.15.0

## [reference-site](https://code-masterjung.tistory.com/46)

---

## 1. install some packages

- 자동 서버 재시작을 위한 `nodemon`
- 타입스크립트의 타입 정의를 위한 `@types~`
- 타입스크립트 트랜스 파일을 메모리에서 바로 할 수 있게 해주는 `ts-node`
- `eslint` 관련 패키지들

```shell
npm init --y
npm i koa
npm i --save-dev typescript ts-node nodemon @types/koa @types/node
npm i --save-dev eslint eslint-config-prettier @typescript-eslint/parser
```

## 2. setting Prettier - .prettierrc

- `$ touch .prettierrc`

```
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```

## 3. setting eslint - .eslintrc

- `$ touch .eslintrc`

```shell
{
  "env": {
    "browser":true,
    "commonjs": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "prettier"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "no-console": "warn"
  }
}
```

## 4.setting typescript - tsconfig.json

```shell
{
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"],
  "compirlerOptions": {
    "target": "es5",
    "module": "commonjs",
    "lib": ["ES5", "ES6"],
    "sourceMap": true,
    "outDir": "./dist",
    "strict": true,
    "baseUrl": "./",
    "esModuleInterop": true,
    "experimentalDecorators": true
  }
}
```

## 5. edit file - package.json

```shell
{
  ...,
  "scripts": {
    "start": "nodemon --exec ts-node src/index.ts",
    "test": "NODE_ENV=test jest"
  }
}
```

## 6. create folder and file

```shell
mkdir src
cd src
touch index.ts
```

## 7. sample code - index.ts

```typescript
import { Context } from 'koa';

const Koa = require('koa');

const app = new Koa();

app.use((ctx: Context) => {
  ctx.body = 'hello, hunsman!';
});

app.listen(4000, () => {
  console.log('Listening on 4000 port ');
});
```

## 8. start sample server

- `$ npm start`
- `http://localhost:4000/` 접속
