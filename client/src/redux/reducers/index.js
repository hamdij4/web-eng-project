import { ADD_TO_CART } from "../const/actions";

const initialState = {
    orderCart: []
  };
  function rootReducer(state = initialState, action) {
    console.log("Action", action)
      if(action.type === ADD_TO_CART){
        console.log(state.orderCart)
          return Object.assign({},state, {
              orderCart : state.orderCart.concat(action.payload.name)
          })
      }
    return state;
  };
  export default rootReducer;