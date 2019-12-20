import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
import { store } from './store';

const render = () => ReactDOM.render(<App />, document.getElementById('app'));
store.subscribe(render);
render();