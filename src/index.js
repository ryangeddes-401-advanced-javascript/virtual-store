import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import the create store method from redux in curly braces

//import your global reducer from ./reducers.  since it's in the index, you do not need to specify the file.

//import Provider element from react-redux.  This will connect your global state within the store to your react app.

//create a store variable using the createStore method.  pass in your imported global reducer, as well as the string to use the redux chrome web tool if desired

//once your store is set up, you can use the redux web tool to inspect your store.  
//You will see each state variable used in your reducers, and be able to track their current status and changes.

//once your store variable is set up and the provider element has been imported, wrap your entire app below in a provider, and pass in the store var 
//as props.  this will give every element in your app access to the global state stored in the store!
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
