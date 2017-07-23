#/bin/bash

# Remember to run `npm run server` first.

rm -rf *.svg

curl -o defaults.svg       "http://localhost:3000/svg"
curl -o text1.svg          "http://localhost:3000/svg?text=hello%20world"
curl -o fgcolor1.svg       "http://localhost:3000/svg?fgcolor=efef00"
curl -o bgcolor1.svg       "http://localhost:3000/svg?bgcolor=128a0c"
curl -o bgcolor2.svg       "http://localhost:3000/svg?bgcolor=84b6eb"
curl -o fontsize.svg       "http://localhost:3000/svg?fontsize=20"
curl -o fontweight.svg     "http://localhost:3000/svg?fontweight=200"
curl -o width.svg          "http://localhost:3000/svg?width=150"
curl -o fontfamily.svg     "http://localhost:3000/svg?fontfamily=Courier%20New"
curl -o strokeopacity.svg  "http://localhost:3000/svg?strokeopacity=1"
curl -o strokewidth.svg    "http://localhost:3000/svg?strokewidth=8"
curl -o strokecolor.svg    "http://localhost:3000/svg?strokecolor=00f"
