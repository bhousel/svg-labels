[![npm version](https://badge.fury.io/js/svg-labels.svg)](https://badge.fury.io/js/svg-labels)

## svg-labels

:label: Generate GitHub-style labels in SVG

### What is it?

If you've ever tried to recreate a GitHub label in a markdown document
or issue, you'll discover you can't do it!  Markdown doesn't let you style
text and colors.

We can get around this by styling the text and colors in an SVG "image" and
embedding that instead:

![bug](http://labl.es/svg?text=bug&bgcolor=ee0701)
![duplicate](http://labl.es/svg?text=duplicate&bgcolor=ccc)
![enhancement](http://labl.es/svg?text=enhancement&bgcolor=84b6eb)
![help wanted](http://labl.es/svg?text=help%20wanted&bgcolor=128A0C)
![invalid](http://labl.es/svg?text=invalid&bgcolor=e6e6e6)
![question](http://labl.es/svg?text=question&bgcolor=cc317c)
![wontfix](http://labl.es/svg?text=wontfix&bgcolor=fff)

The code for this is hosted on [labl.es](http://labl.es).

It works just like similar badge generator sites like [shields.io](shields.io) or [badge.fury.io](badge.fury.io)


### What's included

`makeLabel(options)` - does what it says on the tin

| option               | type   | default           | description       |
| -------------------- | ------ | ----------------- | ----------------- |
| option.text          | string | 'bug'             | Label text - will appear centered on the label. |
| option.fontfamily    | string | 'Helvetica,Arial' | Text font - we just pass this directly into the SVG file. |
| option.fontsize      | number | 12                | Font size in px - this affects the overall size of the label. |
| option.fontweight    | number | 600               | Font weight as a number (over 500 is considered 'bold'). |
| option.width         | number | calculated        | Label width - calculated based on fontsize, but you can override it. |
| option.strokeopacity | number | 0.12              | Opacity for the shadow outline. |
| option.strokewidth   | number | calculated        | Shadow stroke width - also calculated but you can override it. |
| option.bgcolor       | hex    | #ee0701           | Background color of the label. |
| option.fgcolor       | hex    | #333026 / #ffffff | Foreground color of the label - calculated for light/dark backgrounds but you can override it. |
| option.strokecolor   | hex    | #273135           | Stroke color for the shadow outline. |

All hex colors can be passed either as 3 or 6 characters, and the '#' is optional.


### Server

[server.js](server.js) contains a simple microservice built on the
[koa.js](http://koajs.com/) framework.

`npm run start` will start the server on port 3000.

This is the same code that serves up [labl.es](http://labl.es).


### Bugs

There may be <sub>![bugs](http://labl.es/svg?text=bugs&bgcolor=ee0701)</sub> !

Report any issues here:  https://github.com/bhousel/svg-labels/issues


## License

svg-labels is available under the [ISC License](https://opensource.org/licenses/ISC).
See the [LICENSE.md](LICENSE.md) file for more details.

