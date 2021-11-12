import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers/reducer.js'

//create the store
const store = createStore(reducer)


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