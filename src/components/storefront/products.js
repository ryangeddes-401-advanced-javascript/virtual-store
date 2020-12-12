// A <Products> component
// Displays a list of products associated with the selected category
import Container from '@material-ui/core/Container'



function Products() {


    return(
      <>
      <h1> Dynamic Name of Product goes here </h1>
      <div> 
        <Container maxWidth="md" >
          <img src="https://source.unsplash.com/food/640x960" />
        </Container>
      </div>
      </>
    )
}

export default Products;