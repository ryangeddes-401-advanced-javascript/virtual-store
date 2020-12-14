// As a user, I want to choose from products in the list and add them to my shopping cart
// As a user, I want to see the products that I’ve added to my shopping cart so that
// As a user, I want to change the quantity of items I intend to purchase in my shopping cart
// As a user, I want to be able to remove an item from my shopping cart

// Displays a short list (title only) of products in the cart
// This should be present at all times

// When a user clicks the “add to cart” button add the item to their cart
// In the <SimpleCart/> component, show a running list of the items in the cart (just the titles)
// Change the (0) indicator in the header to show the actual number of items in the cart
// Reduce the number in stock for that product


import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

export default function SimpleCart(){
  const cart = useSelector((state) =>(state.cart.cart))
  //const [localCart, setCart] = useState(cart);
  let tempArray = []

  useEffect ( () =>{
    tempArray = cart;
  }, [cart]);

 let renderCart = tempArray.map((item)=>(
      <>
      {console.log(item)}
      <div key={Math.random()}>
        {item.name}
      </div>
      </>
    ));

  return(
    <>
    <div> 
      <h3>cart </h3>
      {renderCart}
    </div>
    </>
  )
}