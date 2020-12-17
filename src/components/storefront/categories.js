import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../actions/index.js';

//A <Categories> component
// Shows a list of all categories
// Dispatches an action when one is clicked to “activate” it



function Categories(){
  const dispatch = useDispatch();
  const activeCat = useSelector( state => state.categories.category)
  
  function handleClick(e) {
    dispatch (actions.changeCategory(e.target.name))
    
  }


 return (
  <>  

    <button name="food" onClick={handleClick}>Food</button> 
    <button name="electronics" onClick={handleClick}>Electronics</button>

  </>
  
  )
  
 }

export default Categories;