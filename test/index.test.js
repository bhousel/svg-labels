'use strict';

var fs = require('fs');
var path = require('path');
var test = require('tap').test;
var makeLabel = require('../.');


function fixture(name) {
    var buffer = fs.readFileSync(path.normalize(`${__dirname}//fixtures//${name}.svg`));
    return buffer.toString();
}


test('makeLabel', function(t) {

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


    t.test('defaults', function(t) {
        var results = makeLabel();
        t.deepEqual(results, fixture('defaults'));
        t.end();
    });


    t.test('text', function(t) {
        t.test('sets text', function(t) {
            var results = makeLabel({ text: 'hello world' });
            t.deepEqual(results, fixture('text1'));
            t.end();
        });

        t.end();
    });

    t.test('fgcolor', function(t) {
        t.test('sets fgcolor', function(t) {
            var results = makeLabel({ fgcolor: 'efef00' });
            t.deepEqual(results, fixture('fgcolor1'));
            t.end();
        });

        t.end();
    });

    t.test('bgcolor', function(t) {
        t.test('sets dark bgcolor', function(t) {
            var results = makeLabel({ bgcolor: '128a0c' });
            t.deepEqual(results, fixture('bgcolor1'));
            t.end();
        });
        t.test('sets light bgcolor', function(t) {
            var results = makeLabel({ bgcolor: '84b6eb' });
            t.deepEqual(results, fixture('bgcolor2'));
            t.end();
        });

        t.end();
    });

    t.test('fontsize', function(t) {
        t.test('sets fontsize', function(t) {
            var results = makeLabel({ fontsize: '20' });
            t.deepEqual(results, fixture('fontsize'));
            t.end();
        });

        t.end();
    });

    t.test('fontweight', function(t) {
        t.test('sets fontweight', function(t) {
            var results = makeLabel({ fontweight: '200' });
            t.deepEqual(results, fixture('fontweight'));
            t.end();
        });

        t.end();
    });

    t.test('width', function(t) {
        t.test('sets width', function(t) {
            var results = makeLabel({ width: '150' });
            t.deepEqual(results, fixture('width'));
            t.end();
        });

        t.end();
    });

    t.test('fontfamily', function(t) {
        t.test('sets fontfamily', function(t) {
            var results = makeLabel({ fontfamily: 'Courier New' });
            t.deepEqual(results, fixture('fontfamily'));
            t.end();
        });

        t.end();
    });

    t.test('strokeopacity', function(t) {
        t.test('sets strokeopacity', function(t) {
            var results = makeLabel({ strokeopacity: '1' });
            t.deepEqual(results, fixture('strokeopacity'));
            t.end();
        });

        t.end();
    });

    t.test('strokewidth', function(t) {
        t.test('sets strokewidth', function(t) {
            var results = makeLabel({ strokewidth: '8' });
            t.deepEqual(results, fixture('strokewidth'));
            t.end();
        });

        t.end();
    });

    t.test('strokecolor', function(t) {
        t.test('sets strokecolor', function(t) {
            var results = makeLabel({ strokecolor: '00f' });
            t.deepEqual(results, fixture('strokecolor'));
            t.end();
        });

        t.end();
    });

    t.end();
});
