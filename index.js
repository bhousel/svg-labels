const pixelWidth = require('string-pixel-width');
const xmlEscape = require('xml-escape');


function getHexColor(str) {
    if (typeof str !== 'string') {
        return null;
    }
    const match = str.match(/^#?(?:[0-9a-f]{3}){1,2}$/i);
    if (match !== null) {
        let color = match[0];
        return (color.charAt(0) === '#') ? color : `#${color}`;
    } else {
        return null;
    }
}

// https://www.w3.org/TR/AERT#color-contrast
// https://trendct.org/2016/01/22/how-to-choose-a-label-color-to-contrast-with-background/
function getBrightness(color) {
    const short = (color.length < 5);
    const r = parseInt(short ? color[1] + color[1] : color[1] + color[2], 16);
    const g = parseInt(short ? color[2] + color[2] : color[3] + color[4], 16);
    const b = parseInt(short ? color[3] + color[3] : color[5] + color[6], 16);
    return ((r * 299) + (g * 587) + (b * 114)) / 1000;
}


var makeLabel = function(options) {
    options = options || {};
    const text = options.text || 'bug';
    const fontfamily = options.fontfamily || 'Helvetica,Arial';
    const fontsize = +options.fontsize || 12;
    const fontweight = +options.fontweight || 600;
    const fontsizeadjust = Math.round(fontsize * (fontweight > 500 ? 1.1 : 1));
    const pad = Math.round(fontsize * 0.75);
    const pwidth = pixelWidth(text, { size: fontsizeadjust }) || (text.length * 50 * (fontsizeadjust / 100));
    const width = +options.width || Math.round(pwidth) + pad;
    const height = Math.round(fontsize * 1.6666);
    const textx = Math.round(width / 2);
    const texty = Math.round(height * 0.7);
    const roundness = Math.max(1, Math.round(height * 0.1));
    const strokeopacity = +options.strokeopacity || 0.12;
    const strokewidth = +options.strokewidth || Math.max(1, Math.round(height * 0.05));
    const bgcolor = getHexColor(options.bgcolor) || '#ee0701';
    const fgcolor = getHexColor(options.fgcolor) || (getBrightness(bgcolor) > 140.5 ? '#333026' : '#fff');
    const strokecolor = getHexColor(options.strokecolor) || '#273135';

    return (
`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
<rect width="${width}" height="${height}" rx="${roundness}" ry="${roundness}" fill="${bgcolor}" stroke="${strokecolor}" stroke-width="${strokewidth}" stroke-opacity="${strokeopacity}" stroke-linejoin="round"/>
<text x="${textx}" y="${texty}" fill="${fgcolor}" text-anchor="middle" font-family="${xmlEscape(fontfamily)}" font-size="${fontsize}" font-weight="${fontweight}">${xmlEscape(text)}</text></svg>`
    );
}

module.exports = makeLabel;
