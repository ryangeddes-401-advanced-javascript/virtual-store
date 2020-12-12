// A <Products> component
// Displays a list of products associated with the selected category
import React from 'react';
import {useSelector} from 'react-redux';
import Container from '@material-ui/core/Container'



const DisplayList = ({list, category})=> {

  return(
  <span>
    {list.map((item, i) => (
      <>
      <h3 key={i}>{item}</h3>
      <img src={`https://source.unsplash.com/300x300?${category},${i}`} />
      </>
    ))};
  </span>
  )
};

function Products() {
  const activeProduct = useSelector ((state) => state.activeList.activeList)
  const category = useSelector ((state) => state.categories.activeCategory)
    return(
      <div> 
        <Container maxWidth="md" >
          <DisplayList list={activeProduct} category={category}/>
        </Container>
      </div>
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