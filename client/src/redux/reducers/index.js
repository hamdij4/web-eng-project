import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_ORDER_TYPE} from "../const/actions";

const initialState = {
    orderCart: [],
    orderPageType: "hamburger",
    orderTotal: 0
  };
  function rootReducer(state = initialState, action) {
      if(action.type === ADD_TO_CART){
        console.log(state.orderTotal)
          return Object.assign({},state, {
              orderCart : state.orderCart.concat(action.payload),
              orderTotal : (state.orderTotal+action.payload.price)
          })
      } else if(action.type == REMOVE_FROM_CART){
        return Object.assign({}, state, {
            orderCart: [...state.orderCart.filter(order => order.name !== action.payload.name)],
            orderTotal: (state.orderTotal - action.payload.price)
        })
      } else if(action.type == CHANGE_ORDER_TYPE){
        return Object.assign({}, state, {
          orderPageType : action.payload
        })
      }
    return state;
  };
  export default rootReducer;