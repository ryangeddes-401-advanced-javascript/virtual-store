//declare the category reducer function, it should accept a default state and an action
const initialState = 
  [
    {
      category: 'food',
      description: 'All the yummy stuff'
    },
    {
      category: 'electronics',
      description: 'Still tasty, just don\'t eat it'
    }
  ];

  activeCat = blah; 

export default function reducer(state = initialState, action){
  const {type, payload} = action;

  switch(type){
    case "food" : 
    //These are not handling state and setting correctly... we need to fix this!
      return {...state, [activeCat]: state[0]}
    case "electronics" :
      return {...state, [activeCat]: state[1]}
    default : 
      return state
  }
}



// it returns a switch statement that accepts action.type as an arg.
// for each case, i.e. case INCREMENT: => returns x, case DECREMENT: => returns y, default: return z;


//export this default category reducer function.  
//It will be imported by the index where it can be combined with other reducers and exported together to the app's index file.
