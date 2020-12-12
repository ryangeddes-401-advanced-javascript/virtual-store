//declare the category reducer function, it should accept a default state and an action


// it returns a switch statement that accepts action.type as an arg.
// for each case, i.e. case INCREMENT: => returns x, case DECREMENT: => returns y, default: return z;


//export this default category reducer function.  
//It will be imported by the index where it can be combined with other reducers and
// exported together to the app's index file.

const initialState = {
  category: 'none'
}

export default function reducer(state=initialState, action){

  const {type, payload} = action;

  switch(type){
    case "FOOD":
      return {category: 'FOOD'}
    case "ELECTRONICS":
      return {category: 'ELECTRONICS'}
    default:
      return state;
}

}