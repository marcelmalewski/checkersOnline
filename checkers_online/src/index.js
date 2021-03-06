import React from 'react';
import './index.scss'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './ducks/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

