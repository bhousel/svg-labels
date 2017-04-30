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
        var text = qs.text || 'bug';
        var fontfamily = qs.fontfamily || 'Helvetica,Arial';
        var fontsize = +qs.fontsize || 12;
        var fontweight = +qs.fontweight || 600;
        var fontsizeadjust = Math.round(fontsize * (fontweight > 500 ? 1.1 : 1));
        var pad = Math.round(fontsize * 0.75);
        var width = qs.width || Math.round(pixelWidth(text, { size: fontsizeadjust }) + pad);
        var height = Math.round(fontsize * 1.6666);
        var roundness = Math.round(height * 0.1);
        var fgcolor = qs.fgcolor || '#ffffff';
        var bgcolor = qs.bgcolor || '#ee0701';

        ctx.body =
'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + width + '" height="' + height + '">' +
'<rect width="' + width +'" height="' + height + '" rx="' + roundness + '" ry="' + roundness + '" fill="' + bgcolor + '"/>' +
'<text x="' + Math.round(width / 2) + '" y="' + Math.round(height * 0.7) + '" fill="' + fgcolor + '" text-anchor="middle" ' +
   'font-family="' + fontfamily + '" font-size="' + fontsize + '" font-weight="' + fontweight + '">' +
 text + '</text>' +
'</svg>';

    });

app
    .use(router.routes())
    .listen(3000, function() {
        console.log('Koa is listening to http://localhost:3000');
    });
