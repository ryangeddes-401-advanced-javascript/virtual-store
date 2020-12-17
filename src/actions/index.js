'use strict';

export const changeCategory = (category) => {
  return{
    type: category
  }
};


//within this file, declare your actions!
//these actions will be exported to your app.js

//for example: you could export a const increment as function
//this function would accept desired params and return an action object with follwing key values:
// type: 'INCREMENT'
// payload:param

//when the action is dispatched to the reducer, you can now access and manipulate the user input via action.payload!