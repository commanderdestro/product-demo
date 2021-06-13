import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './store/reducers/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
