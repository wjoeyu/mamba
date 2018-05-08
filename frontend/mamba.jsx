import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  ReactDOM.render(<h1>M a m b a</h1>, root);

  // const store = configureStore();
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
});
