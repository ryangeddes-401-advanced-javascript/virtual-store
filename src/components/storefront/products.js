// A <Products> component
// Displays a list of products associated with the selected category
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import {responsiveFontSizes, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as actions from '../../actions';

//I don't think this is doing anything... probablywired up incorrectly.
let theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'none',
      fontSize: 28,
    },
  },
});


function Products() {
  theme = responsiveFontSizes(theme);

  const activeProduct = useSelector ((state) => state.activeList.activeList)
  const category = useSelector ((state) => state.categories.activeCategory)
  const dispatch = useDispatch();
  const addCart = (product) =>{
    let prodName = product[0]
    let prodObj = {
      [prodName]: product[1]
    }
    dispatch(actions.addCartAction(prodObj))
  }
    return(
      <ThemeProvider> 
        <Container maxWidth="md" >
          <span>
            {Object.entries(activeProduct).map((item, i) =>(
              <>
              <h3 key={Math.random()}>{item[0]}</h3>
              <img src={`https://source.unsplash.com/300x300?${item[0]}`} />
              <Button onClick={()=> addCart(item)}>Add to Cart</Button>
              </>
            ))}
          </span>
        </Container>
      </ThemeProvider> 
    )
}

export default Products;

// State should be a list of all products
// Each product should have a category association, name, 
//description, price, inventory count
// Create an action that will trigger when the active category 
//is changed
// HINT: Multiple reducers can respond to the same actions
// Create a reducer that will filter the products 
//list based on the active category