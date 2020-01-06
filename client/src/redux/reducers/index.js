import { ADD_TO_CART } from "../const/actions";

const initialState = {
    orderCart: []
  };
  function rootReducer(state = initialState, action) {
      if(action.type === ADD_TO_CART){
          return Object.assign({}, state, {
              orderCart : state.orderCart.concat(action.payload)
          })
      }
    return state;
  };
  export default rootReducer;