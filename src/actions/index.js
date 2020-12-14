'use strict';

//within this file, declare your actions!
//these actions will be exported directly to the React components that require them

//for example: you could export a const increment as function
//this function would accept desired params and return an action object with follwing key values:
// type: 'INCREMENT'
// payload:param
//when the action is dispatched to the reducer, you can now access and manipulate the user input via action.payload!

//example action syntax
export const toggleFood = () => {
  return {
    type: "FOOD",
  }
}

export const toggleElectronics = () => {
  return {
    type: "ELECTRONICS",
  }
}

export const addCartAction = (product) => {
  return{
    type: 'ADDCART',
    payload: product
  }

}
