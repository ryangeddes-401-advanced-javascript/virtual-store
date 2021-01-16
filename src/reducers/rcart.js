// As a user, I want to choose from products in the list and add them to my shopping cart
// As a user, I want to see the products that I’ve added to my shopping cart so that
// As a user, I want to change the quantity of items I intend to purchase in my shopping cart
// As a user, I want to be able to remove an item from my shopping cart


/*Cart
State should be an array of products that have been added (all product details)
Create an action that will trigger the reducer to add the selected item to the cart
Hint: this could be the same action type as you create for the Products reducer
Create a reducer that adds the product to the array of items in state*/


const initialState = {
  cart: []
}

export default function reducer(state=initialState, action){

  const {type, payload} = action;

  switch(type){
    case 'ADDCART':
      //THIS SHOULD ADD THE PAYLOAD ITEM TO CART
      let updatedCart = [...state.cart, payload]
      return {cart: updatedCart}
    default:
      return state;
  }

}




// HINT: Different reducers can respond to the same actions
// Create an action that will trigger the reducer to reduce the stock counter
// Create a reducer that reduces the # in stock when that action is dispatched