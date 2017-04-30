var Koa = require('koa');
var Router = require('koa-router');
var qspatch = require('koa-qs');
var pixelWidth = require('string-pixel-width');
var makeLabel = require('.');

var app = new Koa();
var router = new Router();
qspatch(app, 'first');

router
    .get('/label', ctx => {
        var l = makeLabel(ctx.request.query);
        ctx.body = l;
    });

app
    .use(router.routes())
    .listen(3000, function() {
        console.log('Koa is listening to http://localhost:3000');
    });
