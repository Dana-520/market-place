import React, { useReducer } from 'react';
import axios from 'axios'
import { JSON_API } from '../helpers/constants';

export const productsContext = React.createContext();

const INIT_STATE = {
    products: [],
    productDetails: null
}

const reducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "GET_PRODUCTS":
            return {...state, products: action.payload}
        case "GET_PRODUCT_DETAILS":
            return {...state, productDetails: action.payload}
        case "FILTER_PRODUCTS":
            return {...state, products: action.payload}
        default:
            return state
    }
}

const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function getProducts(){
        let { data } = await axios(`${JSON_API}/products`)
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }

    async function getProductsDetails(id){
        const { data } = await axios(`${JSON_API}/products/${id}`)
        dispatch({
            type: "GET_PRODUCT_DETAILS",
            payload: data
        })
    }

    async function filterProducts(value){
        let params = "";
        params = value ? `?category=${value}` : ""
        const { data } = await axios(`${JSON_API}/products${params}`)
        dispatch({
            type: "FILTER_PRODUCTS",
            payload: data
        })
    }

    return (
        <productsContext.Provider value={{
            products: state.products,
            productDetails: state.productDetails,
            getProducts,
            getProductsDetails,
            filterProducts
        }}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;