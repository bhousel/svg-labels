const fs = require('fs');
const path = require('path');
const test = require('tap').test;
const makeLabel = require('../.');


function fixture(name) {
  const buffer = fs.readFileSync(path.normalize(`${__dirname}//fixtures//${name}.svg`));
  return buffer.toString();
}


test('makeLabel', t => {

// | option.text          | string | 'bug'             | Label text - will appear centered on the label. |
// | option.fontfamily    | string | 'Helvetica,Arial' | Text font - we just pass this directly into the SVG file. |
// | option.fontsize      | number | 12                | Font size in px - this affects the overall size of the label. |
// | option.fontweight    | number | 600               | Font weight as a number (over 500 is considered 'bold'). |
// | option.width         | number | calculated        | Label width - calculated based on fontsize, but you can override it. |
// | option.strokeopacity | number | 0.12              | Opacity for the shadow outline. |
// | option.strokewidth   | number | calculated        | Shadow stroke width - also calculated but you can override it. |
// | option.bgcolor       | hex    | #ee0701           | Background color of the label. |
// | option.fgcolor       | hex    | #333026 / #ffffff | Foreground color of the label - calculated for light/dark backgrounds but you can override it. |
// | option.strokecolor   | hex    | #273135           | Stroke color for the shadow outline. |

  t.test('defaults', t => {
    const results = makeLabel();
    t.same(results, fixture('defaults'));
    t.end();
  });

  t.test('text', t => {
    t.test('sets text', t => {
      const results = makeLabel({ text: 'hello world' });
      t.same(results, fixture('text1'));
      t.end();
    });

    t.end();
  });

  t.test('fgcolor', t => {
    t.test('sets fgcolor', t => {
      const results = makeLabel({ fgcolor: 'efef00' });
      t.same(results, fixture('fgcolor1'));
      t.end();
    });

    t.end();
  });

  t.test('bgcolor', t => {
    t.test('sets dark bgcolor', t => {
      const results = makeLabel({ bgcolor: '128a0c' });
      t.same(results, fixture('bgcolor1'));
      t.end();
    });
    t.test('sets light bgcolor', t => {
      const results = makeLabel({ bgcolor: '84b6eb' });
      t.same(results, fixture('bgcolor2'));
      t.end();
    });

    t.end();
  });

  t.test('fontsize', t => {
    t.test('sets fontsize', t => {
      const results = makeLabel({ fontsize: '20' });
      t.same(results, fixture('fontsize'));
      t.end();
    });

    t.end();
  });

  t.test('fontweight', t => {
    t.test('sets fontweight', t => {
      const results = makeLabel({ fontweight: '200' });
      t.same(results, fixture('fontweight'));
      t.end();
    });

    t.end();
  });

  t.test('width', t => {
    t.test('sets width', t => {
      const results = makeLabel({ width: '150' });
      t.same(results, fixture('width'));
      t.end();
    });

    t.end();
  });

  t.test('fontfamily', t => {
    t.test('sets fontfamily', t => {
      const results = makeLabel({ fontfamily: 'Courier New' });
      t.same(results, fixture('fontfamily'));
      t.end();
    });

    t.end();
  });

  t.test('strokeopacity', t => {
    t.test('sets strokeopacity', t => {
      const results = makeLabel({ strokeopacity: '1' });
      t.same(results, fixture('strokeopacity'));
      t.end();
    });

    t.end();
  });

  t.test('strokewidth', t => {
    t.test('sets strokewidth', t => {
      const results = makeLabel({ strokewidth: '8' });
      t.same(results, fixture('strokewidth'));
      t.end();
    });

    t.end();
  });

  t.test('strokecolor', t => {
    t.test('sets strokecolor', t => {
      const results = makeLabel({ strokecolor: '00f' });
      t.same(results, fixture('strokecolor'));
      t.end();
    });

    t.end();
  });

  t.end();
});