import React from 'react';
import { render } from 'react-dom';

import App from './app/App';
import './index.scss';
import './demo';

render(<App title="Webpack 4 Demo" />, document.querySelector('#app'));
