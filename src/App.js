import React from 'react';
import {Provider} from 'react-redux';
import store from './reducers/index.js';
import Storefront from './components/storefront/storefront';

// import * as actions from './actions';
//import useSelector and useDispatch from react-redux so we can access our global state and dispatch actions to our reducer

//import any action functions individually using curly braces your from ./actions.  
//if you write the actions to index you do not need to specify filepath.
//another way to do this is to import all actions using john's * syntax example below:
//import * as potato from '../store/counter.js';

function App() {
  //within our app, we call the selector and dispatch redux methods to access our global state and reducers
    //example, declare a counter variable, set its value using useSelector, pass in state.counter.  
    //you now can pass in the counter var stored in global state to your app below {counter}

  return (
    //import components from ./components, render in app
    <Provider store={store}> 
      <Storefront />
    {/* when calling actions such as on a button click, dispatch thr desired action to the reducer.  ex dispatch(increment) */}
    </Provider>
  );
}

export default App;
