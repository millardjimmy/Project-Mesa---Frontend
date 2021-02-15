import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom'

// Create the Redux store:
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

console.log(`%c INITIAL REDUX STORE`, 'color: purple', store.getState())

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root'));


serviceWorker.unregister();

export default store;
