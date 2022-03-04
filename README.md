## svg-labels-dark

Generate <sub>![awesome](https://svg-labels-dark.herokuapp.com/svg?text=awesome&bgcolor=0052cc)</sub> GitHub-style labels in SVG, But in dark mode!!

### What is it?

If you've ever tried to recreate a GitHub label in a markdown document
or issue, you'll discover you can't do it!  Markdown doesn't let you style
text and colors.

We can get around this by styling the text and colors in an SVG "image" and
embedding that instead:

![bug](https://svg-labels-dark.herokuapp.com/svg?text=bug&color=ee0701)
![duplicate](https://svg-labels-dark.herokuapp.com/svg?text=duplicate&color=cccccc)
![enhancement](https://svg-labels-dark.herokuapp.com/svg?text=enhancement&color=84b6eb)
![help wanted](https://svg-labels-dark.herokuapp.com/svg?text=help%20wanted&color=128A0C)
![invalid](https://svg-labels-dark.herokuapp.com/svg?text=invalid&color=e6e6e6)
![question](https://svg-labels-dark.herokuapp.com/svg?text=question&color=cc317c)
![wontfix](https://svg-labels-dark.herokuapp.com/svg?text=wontfix&color=ffffff)

The code for this is based/forked from [labl.es](https://labl.es) and now hosted at [svg-labels-dark.herokuapp.com](https://svg-labels-dark.herokuapp.com/).

It works just like similar badge generator sites like [shields.io](https://shields.io/) or [badge.fury.io](https://badge.fury.io/)


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
| option.color         | hex    | d73a4a            | Hex of the color you want.
| option.bgcolor       | hex    | calculated        | Background color of the label. |
| option.fgcolor       | hex    | calculated        | Foreground color of the label - calculated for light/dark backgrounds but you can override it. |
| option.strokecolor   | hex    | calculated        | Stroke color for the shadow outline. |

All hex colors can be passed as 6 characters, and the '#' is optional.

<!---
### Server

[server.js](server.js) contains a simple microservice built on the
[koa.js](http://koajs.com/) framework.

`npm run start` will start the server on port 3000.

This is the same code that serves up [labl.es](https://labl.es).
--->

### Bugs

There may be <sub>![bugs](https://svg-labels-dark.herokuapp.com/svg?text=bugs&color=ee0701)</sub> !

Report any issues here:  https://github.com/BenCinn/svg-labels-dark/issues


## License

svg-labels is available under the [ISC License](https://opensource.org/licenses/ISC).
See the [LICENSE.md](LICENSE.md) file for more details.

