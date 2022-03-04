const pixelWidth = require('string-pixel-width');
const xmlEscape = require('xml-escape');
const valuesjs = require('values.js');
const Values = require('values.js');


function getHexColor(str) {
  if (typeof str !== 'string') return null;

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
  // const fontfamily = options.fontfamily || 'Helvetica,Arial';
  const fontfamily = options.fontfamily || '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif';
  const fontsize = +options.fontsize || 12;
  const fontweight = +options.fontweight || 500;
  const fontsizeadjust = Math.round(fontsize * (fontweight > 500 ? 1.1 : 1));
  // const pad = Math.round(fontsize * 0.75);
  const pad = Math.round(fontsize * 1.3);
  const pwidth = pixelWidth(text, { size: fontsizeadjust }) || (text.length * 50 * (fontsizeadjust / 100));
  const width = +options.width || Math.round(pwidth) + pad;
  // const height = Math.round(fontsize * 1.6666);
  const height = Math.round(fontsize * 1.8333);
  const textx = Math.round(width / 2);
  const texty = Math.round(height * 0.7);
  // const roundness = Math.max(1, Math.round(height * 0.1));
  const roundness = Math.max(1, Math.round(height / 2));
  const strokeopacity = +options.strokeopacity || 1;
  const strokewidth = +options.strokewidth || Math.max(1, Math.round(height * 0.05));
  const color = options.color || '#d73a4a';
  const values = new valuesjs("#" + color)
  const bgcolor = values.shade(50).hexString();
  const fgcolor = options.fgcolor || values.tint(50).hexString();
  console.log(getBrightness(color))
  const strokecolor = options.strokecolor || fgcolor;

  return (
`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
<rect width="${width}" height="${height}" rx="${roundness}" ry="${roundness}" fill="${bgcolor}" stroke="${strokecolor}" stroke-width="${strokewidth}" stroke-opacity="${strokeopacity}" stroke-linejoin="round"/>
<text x="${textx}" y="${texty}" fill="${fgcolor}" text-anchor="middle" font-family="${xmlEscape(fontfamily)}" font-size="${fontsize}" font-weight="${fontweight}">${xmlEscape(text)}</text></svg>`
  );
}

module.exports = makeLabel;