import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FrenmoProvider } from './contexts/FrenmoContext';

ReactDOM.render(
  <BrowserRouter>
    <FrenmoProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </FrenmoProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
