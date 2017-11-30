import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID, SET_PRODUCT, SET_ALL_PRODUCTS } from '../helpers/actionConstants';

export const getAllProducts = () => ({
	type: GET_ALL_PRODUCTS,
});

export const getProductById = (id) => ({
	type: GET_PRODUCT_BY_ID,
	id,
});

export const setProduct = (product) => ({
	type: SET_PRODUCT,
	product,
});

export const setAllProducts = (products) => ({
	type: SET_ALL_PRODUCTS,
	products,
});

