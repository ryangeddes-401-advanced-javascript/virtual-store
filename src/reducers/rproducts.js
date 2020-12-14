// State should be a list of all products
// Each product should have a category association, name, 
//description, price, inventory count
// Create an action that will trigger when the active category 
//is changed
// HINT: Multiple reducers can respond to the same actions
// Create a reducer that will filter the products 
//list based on the active category


let foodList = {
  lobster: {
    name: 'lobster',
    category: 'food',
    description: 'Charming sea critters',
    price: 69,
    inventory: 420
  },
  chocolate: {
    name: 'chocolate',
    category: 'food',
    description: 'milk or dark take your pick',
    price: 50,
    inventory: 10
  },
  eggs: {
    name: 'eggs',
    category: 'food',
    description: 'bok bok bok',
    price: 1000000,
    inventory: 7
  },
  pie: {
    name: 'pie',
    category: 'food',
    description: 'apple or pumpking',
    price: 2,
    inventory: 300
  },

}

let elecList = {
  ipod: {
    name: 'ipod',
    category: 'electronics',
    description: 'steve jobs made this',
    price: 69,
    inventory: 420
  },
  zune: {
    name: 'zune',
    category: 'electronics',
    description: 'get out of my head bill',
    price: 50,
    inventory: 10
  },
  walkman: {
    name: 'walkman',
    category: 'electronics',
    description: 'perfection',
    price: 1000000,
    inventory: 7
  },
  walkietalkie: {
    name: 'walkietalkie',
    category: 'electronics',
    description: 'ready to go over',
    price: 2,
    inventory: 300
  },

}


const initialState = {
  activeList: {}
}

export default function reducer(state=initialState, action){
  console.log(initialState)

  const {type, payload} = action;

  switch(type){
    case "FOOD":
      return {activeList: foodList}
    case "ELECTRONICS":
      return {activeList: elecList}
    case "ADDCART":
      // this should spread out the selected item and reduce it by one
      let reducedProduct = {...elecList[product.name], ...{inventory: elecList[product.name].inventory -1}}
      let spreadObj = {};
      spreadObj[reducedProduct.name] =  reducedProduct;
      
      let newList = {...elecList, ...spreadObj}
      //....there has to be a cleaner way to do this
      return {...state, ...newList}
    default:
      return state;
  }

}





// HINT: Different reducers can respond to the same actions
// Create an action that will trigger the reducer to reduce the stock counter
// Create a reducer that reduces the # in stock when that action is dispatched