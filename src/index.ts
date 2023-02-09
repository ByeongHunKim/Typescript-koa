import { Context } from 'koa';

const Koa = require('koa');

const app = new Koa();

app.use((ctx: Context) => {
  ctx.body = 'hello, hunsman!';
});

app.listen(4000, () => {
  console.log('Listening on 4000 port ');
});
