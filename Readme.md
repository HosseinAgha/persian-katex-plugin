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
### npm
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
import 'perisan-katex-plugin/dist/index.css';
import katex from 'katex';
import persianKatexPlugin from 'persian-katex-plugin';

katex.plugin(new persianKatexPlugin());
```

<h2 align="center">Contribution</h2> 

`yarn install` then `yarn run dev` to run access development server.  
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
