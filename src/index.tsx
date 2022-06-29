import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './router/App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.hydrate(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root') as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
