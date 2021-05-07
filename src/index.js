import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {provider} from 'react-redux'

import App from './App';
import { Provider } from 'react-redux';



ReactDOM.render(
  <Provider>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);


reportWebVitals();
