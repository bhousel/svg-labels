var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router
    .get('/label', ctx => {
        var width = 80;
        var text = 'Hello Koa';
        var fgcolor = '#ffffff';
        var bgcolor = '#ee0701';
        var fontfamily = 'Helvetica,Arial';
        var fontsize = 12;
        var fontweight = 600;
        ctx.body =
'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="20">' +
'<rect width="' + width +'" height="20" rx="2" ry="2" fill="' + bgcolor + '"/>' +
'<text x="' + width / 2 + '" y="14" fill="' + fgcolor + '" text-anchor="middle" ' +
   'font-family="' + fontfamily + '" font-size="' + fontsize + '" font-weight="' + fontweight + '">' +
 text + '</text>' +
'</svg>';

    });

app
    .use(router.routes())
    .listen(3000, function() {
        console.log('Koa is listening to http://localhost:3000');
    });
