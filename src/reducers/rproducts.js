// State should be a list of all products
// Each product should have a category association, name, 
//description, price, inventory count
// Create an action that will trigger when the active category 
//is changed
// HINT: Multiple reducers can respond to the same actions
// Create a reducer that will filter the products 
//list based on the active category
let foodList = ['food1', 'food2', 'food3', 'food4'];
let elecList = ['elec1', 'elec2', 'elec3', 'elec4']

const initialState = {
  activeList: []
}

export default function reducer(state=initialState, action){

  const {type, payload} = action;

  switch(type){
    case "FOOD":
      return {activeList: foodList}
    case "ELECTRONICS":
      return {activeList: elecList}
    default:
      return state;
  }

}