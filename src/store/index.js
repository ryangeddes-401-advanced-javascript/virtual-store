//import the combine reducer function from redux
import {createStore, combineReducers} from 'redux';
import cart from '../reducers/rcart.js'
import categories from '../reducers/rcategories.js'
import products from '../reducers/rproducts.js'

//import in function from reducers that will be run through our combineReducer function.

//Combiner
const allReducers = combineReducers({
   categories: categories,
   activeList: products
});

export default createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
//create a store variable using the createStore method.  pass in your imported global reducer, as well as the string to use the redux chrome web tool if desired
//once your store is set up, you can use the redux web tool to inspect your store.  
//You will see each state variable used in your reducers, and be able to track their current status and changes.






//import all your separate reducer files

// declare a allreducer var, pass in each individual reducer within an obj.  values using above reducer imports, keys can potato.

//export your default allreducers

//your combined reducers can now be imported into your app's index