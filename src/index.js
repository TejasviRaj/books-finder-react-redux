//Author- Tejasvi Raj Pant

import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './Store/store';
import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Provider store={store}>

      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
