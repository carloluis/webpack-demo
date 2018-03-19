import reformat from 'reformat-number';
import React from 'react';
import { render } from 'react-dom';

import App from './app/App';
import foo from './demo/foo';
import bar from './demo/bar';
import './index.scss';

render(<App />, document.querySelector('#app'));

console.info('nodeEnv', process.env.NODE_ENV);
console.info(reformat('1123581321'));
foo();
