require('./scss/main.scss');

import Hello from './hello.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Hello/>, document.getElementById('container'));
