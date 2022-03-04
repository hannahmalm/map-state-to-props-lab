import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux';
import manageUsers from './reducers/manageUsers'
import { Provider } from 'react';
// use the createStore method from redux, passing in the provided reducer, manageUsers, to create a store. 
// Use Provider from react-redux to wrap <App />, passing store as a prop to the Provider.
//  This will give your components access to the store.

//reducer = manageUsers
//the redux extension is boilerplate

const store = createStore(manageUsers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// add imports and code


ReactDOM.render(
  // add imports and code
  <Provider store={store}>
  <App />
  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);
