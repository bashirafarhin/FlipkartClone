import * as actionType from "../constants/cartConstant.js"
import axios from "axios"
export const addToCart = (id,quantity) => async(dispatch) => {
    try {
        const { data }=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/product/${id}`);
        dispatch({ type:actionType.ADD_TO_CART, payload: { ...data, quantity }});
    } catch(err) {
        dispatch({ type:actionType.ADD_TO_CART_ERROR, payload: err.message });
    }
}

export const removeFromCart = (id) => async(dispatch) => {
    dispatch({ type:actionType.REMOVE_FROM_CART, payload: id});
}