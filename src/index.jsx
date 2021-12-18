import React from 'react';
import ReactDOM from 'react-dom';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@mui/material/styles';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import theme from './styles/theme';

import reducer from './reducers/reducer.js';

// Setup Middleware
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

//create the store
const store = createStore(reducer, composedEnhancer);

//Provide our application with the store, so that they can interact

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
