var Koa = require('koa');
var Router = require('koa-router');
var qspatch = require('koa-qs');
var pixelWidth = require('string-pixel-width');
var makeLabel = require('.');

var app = new Koa();
var router = new Router();
qspatch(app, 'first');

router
    .get('/svg', ctx => {
        ctx.response.type = 'image/svg+xml';
        ctx.response.body = makeLabel(ctx.request.query);
    });

app
    .use(router.routes())
    .listen(3000, function() {
        console.log('Koa is listening to http://localhost:3000');
    });
