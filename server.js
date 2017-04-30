var Koa = require('koa');
var Router = require('koa-router');
var qspatch = require('koa-qs');
var pixelWidth = require('string-pixel-width');

var app = new Koa();
var router = new Router();
qspatch(app, 'first');

router
    .get('/label', ctx => {
        var qs = ctx.request.query;
        var pad = 8;
        var text = qs.text || 'bug';
        var fontfamily = qs.fontfamily || 'Helvetica,Arial';
        var fontsize = +qs.fontsize || 12;
        var fontweight = +qs.fontweight || 600;
        var fontsizeadjust = fontsize + (fontweight > 500 ? 1 : 0);
        var width = qs.width || pixelWidth(text, { size: fontsizeadjust }) + pad;
        var fgcolor = qs.fgcolor || '#ffffff';
        var bgcolor = qs.bgcolor || '#ee0701';

        ctx.body =
'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + width + '" height="20">' +
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
