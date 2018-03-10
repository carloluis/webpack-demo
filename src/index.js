import reformat from 'reformat-number';
import React from 'react';
import ReactDOM from 'react-dom';

import foo from './demo/foo';
import bar from './demo/bar';
import './index.scss';

console.info(reformat('1123581321'));
foo();

ReactDOM.render(<h1>Webpack 4 Demo!</h1>, document.querySelector('#app'));
