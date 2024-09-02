import axios from 'axios'
import * as actionType from "../constants/productConstant.js"

//                normal function ()   middleware async ()
export const getProducts = () => async(dispatch) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`);
        dispatch({ type:actionType.GET_PRODUCTS_SUCCESS, payload: data});
    } catch(err) {
        dispatch({ type:actionType.GET_PRODUCTS_FAIL, payload: err.message});
    }
}

export const getProductDetails = (id) => async(dispatch) => {
    try {
        dispatch({ type:actionType.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/product/${id}`);
        dispatch({ type:actionType.GET_PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch(err) {
        dispatch({ type:actionType.GET_PRODUCT_DETAILS_FAIL, payload: err.message});
    }
}