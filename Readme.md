## this is work in progress until the katex api finalizes

This is a [KaTeX](https://github.com/Khan/KaTeX) plugin that
adds support for Persian math formulas to KaTeX.
It adds following to the KaTeX:
  1. Support for Persian and Arabic numerals [۰-۹] in formulas (math mode)
  2. Support for Persian and Arabic characters [unicode 0x0660 to 0x06FF] in text inside formules (text mode)
All the Persian and Arabic characters use open source [Vazir font](https://github.com/rastikerdar/vazir-font).

<h2 align="center">Usage</h2>

To use this plugin follow [KaTeX usage guidelines](https://github.com/Khan/KaTeX#usage)
in order to add KaTeX to your environment.

Then install the plugin by:
## npm
  - install package:
    ```npm install persian-katex-plugin``` or ```yarn add persian-katex-plugin```
  - import css files using a bundler like [`webpack`](https://webpack.js.org/) and [`css-loader`](https://github.com/webpack-contrib/css-loader):
    ```import 'perisan-katex-plugin/dist/index.css'```
  - you also need [`file-loader`](https://github.com/webpack-contrib/file-loader)
    in your webpack config in order for the plugin to load font files.

<!-- ### script from CDN
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.9.0/dist/katex.min.css" integrity="sha384-TEMocfGvRuD1rIAacqrknm5BQZ7W7uWitoih+jMNFXQIbNl16bO8OZmylH/Vi/Ei" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/katex@0.9.0/dist/katex.min.js" integrity="sha384-jmxIlussZWB7qCuB+PgKG1uLjjxbVVIayPJwi6cG6Zb4YKq0JIw+OMnkkEC7kYCq" crossorigin="anonymous"></script>
``` -->

Finally you need to add the plugin to KaTeX before calling `katex.render`.
Your final code should be something like this:
```javascript
import katex from 'katex';
import 'katex/dist/katex.css';
import addPersianTo from 'persian-katex-plugin';
import 'perisan-katex-plugin/dist/index.css';

addPersianTo(katex);
```

All the persian and arabic characters will render using the 'Vazir' font.
You should change your western numerals ([0-9]) to eastern numerals [۰-۹].

## changing the font

As KaTeX calculates the character sizes statically (at the compile time)
using a new font for your formulas is not as easy as changing a font of a css class.  
To change the font of Persian and Arabic characters and numerals
you need to first calculate the character metrics for your font and then provide the metrics and fontName
to the plugin as its second options paramter.

1. using `persian-katex-plugin/utils/generateMetrics.js` script you can create a json file for you metrics.
Following is an example for how we generated default Vazir font metrics.  
You have to provide the path to _truetype (ttf)_ files of your font (metrics are usually the same for other file types).  
You also need to provide each font name in the following format: `[fontname]-[Regular/Bold/Italic/BoldItalic]`.  
You can also provide an aditional unicodeRange array to define which range of unicode characters you want to extract from font file.  
```javascript
const generateMetrics = require("perisan-katex-plugin/utils/generateMetrics");
const path = require("path");

const metricOptions = [
    {
        fontname: 'Vazir-Regular',
        filepath: path.resolve("fonts/Vazir.ttf"),
    //  unicodeRange: defualts to [0x0600, 0x06FF]
    },
    {
        fontname: 'Vazir-Bold',
        filepath: path.resolve("fonts/Vazir-Bold.ttf"),
    },
];
const outputPath = path.resolve(__dirname, "src/fontMetrics.json");

generateMetrics(metricOptions, outputPath);
```

2. After generating the font metrics file you need to add the metrics and font name options to the plugin.
```javascript
import katex from 'katex';
import 'katex/dist/katex.css';
import addPersianTo from 'persian-katex-plugin';
import 'perisan-katex-plugin/dist/index.css';
import awesomeFontMetrics from 'path-to-awesomeFontMetrics.js';

addPersianTo(katex, {
  fontName: "MyAwesomeFont",
  fontMetrics: awesomeFontMetrics
});
```

3. finally add a font-face and a css class for each fontname you provided to generateFontMetrics.
```javascript
@font-face {
    font-family: 'AwesomeFont-Regular';
    font-weight: normal;
    font-style: normal;
    src: url('../fonts/AwesomeFont.woff2') format('woff2'),
        url('../fonts/AwesomeFont.woff') format('woff'),
        url('../fonts/AwesomeFont.ttf') format('ttf');
}

@font-face {
    font-family: 'AwesomeFont-Bold';
    font-weight: bold;
    font-style: normal;
    src: url('../fonts/AwesomeFont-Bold.woff2') format('woff2'),
        url('../fonts/AwesomeFont-Bold.woff') format('woff'),
        url('../fonts/AwesomeFont-Bold.ttf') format('ttf');
}

.AwesomeFont-Regular {
    font-family: 'AwesomeFont-Regular';
}

.AwesomeFont-Bold {
    font-family: 'AwesomeFont-Bold';
}
```

<h2 align="center">Contribution</h2>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

run `yarn install` then `yarn run dev` to run development server.
