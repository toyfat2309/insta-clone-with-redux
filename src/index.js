import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { extendedHomePageApiSlice } from './features/homepage/homePageSlice';
import store from './app/store';
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router >
      <App />
    </Router>
    </Provider>
  </React.StrictMode>
);

