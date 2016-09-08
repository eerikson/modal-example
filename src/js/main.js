import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';


var element = document.getElementById('app') || document.getElementById('single');
ReactDOM.render(<App />, element );
