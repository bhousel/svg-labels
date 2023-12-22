const test = require('node:test').test;
const assert = require('node:assert').strict;
const fs = require('node:fs');
const makeLabel = require('../.');


function fixture(name) {
  const buffer = fs.readFileSync(`./test/fixtures/${name}.svg`);
  return buffer.toString();
}


test('makeLabel', async t => {

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

  await t.test('defaults', t => {
    const result = makeLabel();
    assert.deepEqual(result, fixture('defaults'));
  });

  await t.test('text', async t => {
    await t.test('sets text', t => {
      const result = makeLabel({ text: 'hello world' });
      assert.deepEqual(result, fixture('text1'));
    });
  });

  await t.test('fgcolor', async t => {
    await t.test('sets fgcolor', t => {
      const result = makeLabel({ fgcolor: 'efef00' });
      assert.deepEqual(result, fixture('fgcolor1'));
    });
  });

  await t.test('bgcolor', async t => {
    await t.test('sets dark bgcolor', t => {
      const result = makeLabel({ bgcolor: '128a0c' });
      assert.deepEqual(result, fixture('bgcolor1'));
    });
    await t.test('sets light bgcolor', t => {
      const result = makeLabel({ bgcolor: '84b6eb' });
      assert.deepEqual(result, fixture('bgcolor2'));
    });
  });

  await t.test('fontsize', async t => {
    await t.test('sets fontsize', t => {
      const result = makeLabel({ fontsize: '20' });
      assert.deepEqual(result, fixture('fontsize'));
    });
  });

  await t.test('fontweight', async t => {
    await t.test('sets fontweight', t => {
      const result = makeLabel({ fontweight: '200' });
      assert.deepEqual(result, fixture('fontweight'));
    });
  });

  await t.test('width', async t => {
    await t.test('sets width', t => {
      const result = makeLabel({ width: '150' });
      assert.deepEqual(result, fixture('width'));
    });
  });

  await t.test('fontfamily', async t => {
    await t.test('sets fontfamily', t => {
      const result = makeLabel({ fontfamily: 'Courier New' });
      assert.deepEqual(result, fixture('fontfamily'));
    });
  });

  await t.test('strokeopacity', async t => {
    await t.test('sets strokeopacity', t => {
      const result = makeLabel({ strokeopacity: '1' });
      assert.deepEqual(result, fixture('strokeopacity'));
    });
  });

  await t.test('strokewidth', async t => {
    await t.test('sets strokewidth', t => {
      const result = makeLabel({ strokewidth: '8' });
      assert.deepEqual(result, fixture('strokewidth'));
    });
  });

  await t.test('strokecolor', async t => {
    await t.test('sets strokecolor', t => {
      const result = makeLabel({ strokecolor: '00f' });
      assert.deepEqual(result, fixture('strokecolor'));
    });
  });

});