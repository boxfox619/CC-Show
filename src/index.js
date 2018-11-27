import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createStore from './core/store/createStore';
import routes from './routes';

const store = createStore();
ReactDOM.render(<App store={store} routes={routes.default(store)}/>, document.getElementById('root'));
serviceWorker.unregister();
