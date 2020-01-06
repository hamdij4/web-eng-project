import {ADD_TO_CART} from "../const/actions"

export function addItemToCart(payload) {
  console.log("ACTION: ", payload)
    return { type: ADD_TO_CART, payload }
  };