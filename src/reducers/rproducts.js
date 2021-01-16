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
      return {...state, activeList: {...foodList}}
    case "ELECTRONICS":
      return {...state, activeList: {...elecList}}
    case "ADDCART":
        let name = Object.keys(payload)[0];
        state.activeList =  {...state.activeList, [name]: {...state.activeList[name], inventory: state.activeList[name].inventory -1}}
        return state;

    default:
      return state;
  }

}


      // // this should spread out the selected item and reduce it by one
      // let reducedProduct = {...state.activeList[payload.name], ...{inventory: state.activeList[payload.name].inventory -1}}
      // activeList = {...foodList, lobster:{...foodList.lobster, inventory:400}}

      // let spreadObj = {};
      // spreadObj[reducedProduct.name] =  reducedProduct;
      // let newList = {...state.activeList, ...spreadObj}
      //....there has to be a cleaner way to do this





// HINT: Different reducers can respond to the same actions
// Create an action that will trigger the reducer to reduce the stock counter
// Create a reducer that reduces the # in stock when that action is dispatched