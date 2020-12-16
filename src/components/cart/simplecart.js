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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimpleCart(){
  const classes = useStyles();
  const cart = useSelector((state) =>(state.cart.cart))


  return(
    <>
     <List component="nav" className={classes.root}>
     {
      cart.map(product => {
        return (
          <ListItem key={Math.random()} >
            <ListItemText primary={Object.keys(product)[0]}/>
            {/* <IconButton aria-label="delete" onClick={() => destroy(product)}> */}
              {/* <DeleteIcon />
            </IconButton > */}
          </ListItem>
        )
      })
    }
    </List>
  </>

  )
}

export default SimpleCart;


// DAVEE CODE:

// import React from 'react';
// import {useSelector, useDispatch} from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
// import {deleteFromCart} from '../../store/cart.js';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));
// function SimpleCart() {
//   const classes = useStyles();
//   let cart = useSelector( state => state.cart.cart);
//   let dispatch = useDispatch();
//   const destroy = (product) => {
//     dispatch(deleteFromCart(product))
//   }
//   // console.log('cart: ', cart);
//   return (
//     <>
//     <List component="nav" className={classes.root}>
//     {
//       cart.map(product => {
//         return (
//           <ListItem key={product._id} >
//             <ListItemText primary={product.name} />
//             <IconButton aria-label="delete" onClick={() => destroy(product)}>
//               <DeleteIcon />
//             </IconButton >
//           </ListItem>
//         )
//       })
//     }
//     </List>
//     </>
//   )
// }
// export default SimpleCart;