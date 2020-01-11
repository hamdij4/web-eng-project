import {ADD_TO_CART} from "../const/actions"
import {REMOVE_FROM_CART} from "../const/actions"
import {CHANGE_ORDER_TYPE} from "../const/actions"

export function addItemToCart(payload) {
    return { type: ADD_TO_CART, payload }
  };

export function removeItemFromCart(payload){
  return {type: REMOVE_FROM_CART, payload}
}

export function changeOrderType(payload){
  return {type: CHANGE_ORDER_TYPE, payload}
}