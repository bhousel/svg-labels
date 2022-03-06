const Koa = require('koa');
const Router = require('@koa/router');
const send = require('koa-send');
const makeLabel = require('.');

const app = new Koa();
const router = new Router();
require('koa-qs')(app);

router
  .get('/svg', ctx => {
    ctx.response.type = 'image/svg+xml';
    ctx.response.body = makeLabel(ctx.request.query);
  })
  .get('/', async (ctx) => {
    await send(ctx, '/docs/index.html');
  })
  .get('(.*)', async (ctx) => {
    await send(ctx, ctx.path, { root: __dirname + '/docs' });
  });

var port = process.env.PORT || 3000

app
  .use(router.routes())
  .listen(port, () => console.log('Koa is listening to http://localhost:' + port) );