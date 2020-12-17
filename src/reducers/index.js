//import the combine reducer function from redux
import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';


//import all your separate reducer files
import categoriesReducer from './rcategories';
import productsReducer from './rproducts';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});
 
export default createStore(reducers, composeWithDevTools());




// declare a allreducer var, pass in each individual reducer within an obj.  values using above reducer imports, keys can potato.

//export your default allreducers

//your combined reducers can now be imported into your app's index