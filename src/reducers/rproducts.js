let electronicsList = [
  {
  name: 'walkietalkie',
  category: 'electronics',
  description: 'ready to go over',
  price: 2,
  inventory: 300
  }
];

let foodList = [
  {
    name: 'pie',
    category: 'food',
    description: 'apple or Jack, the pumpking',
    price: 2,
    inventory: 300
  }
];

const initialState = {
  list: [] 
}

export default function reducer(state = initialState, action){
  const {type, payload} = action;

  switch(type){
    case "food" :
      return {
        [state.list]: foodList 
      }
    case "electronics" :
      return {
        [state.list]: electronicsList
      }
    default :
      return state
  }
}