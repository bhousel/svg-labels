var Koa = require('koa');
var app = new Koa();

app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(3000, function() {
    console.log('Koa is listening to http://localhost:3000');
});
