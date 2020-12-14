
//import useSelector and useDispatch from react-redux so we can access our global state and dispatch actions to our reducer

//import any action functions individually using curly braces your from ./actions.  
//if you write the actions to index you do not need to specify filepath.
//another way to do this is to import all actions using john's * syntax example below:
//import * as potato from '../store/counter.js';

import store from './store';
import {Provider} from 'react-redux';
//import components here from ./components
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/storefront/categories.js';
import ActiveCat from './components/storefront/current-category.js'
import Products from './components/storefront/products.js'
import Cart from './components/cart/simplecart'





function App() {
  //within our app, we call the selector and dispatch redux methods to access our global state and reducers
    //example, declare a counter variable, set its value using useSelector, pass in state.counter.  
    //you now can pass in the counter var stored in global state to your app below {counter}

  return (
    
    <Provider store={store}>
      <Header />
      <Cart />
      <Categories />
      <ActiveCat/>
      <Products/>
      <Footer />
    </Provider>    
  );
}
//when calling actions such as on a button click, dispatch thr desired action to the reducer.  ex dispatch(increment)

export default App;

//once your store variable is set up and the provider element has been imported, wrap your entire app below in a provider, and pass in the store var 
//as props.  this will give every element in your app access to the global state stored in the store!