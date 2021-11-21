import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers/reducer.js'

// Setup Middleware
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

//create the store
const store = createStore(reducer, composedEnhancer)


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