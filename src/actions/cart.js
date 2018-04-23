import uuid from 'uuid';

//Cart Action Generators

//Set Application Data
export const setProductData = ({products} = {}) => {
	return {
		type: "SET_PRODUCT_DATA",
		products
	}
}

export const updateProduct = (product) => {

	return {
		type:"UPDATE_PRODUCT_STORE",
		product
	}

}

export const addToCart = ({icon, qty, price, title, id, inCart } = {}) => {
	
	return {
		type: "ADD_TO_CART",
		product: {
			id,
			icon,
			qty,
			price,
			title,
			inCart: true
		}
	}
}

export const removeFromCart = ({id, inCart} = {}) => {

	return {
		type: "REMOVE_FROM_CART",
		id,
		inCart: false
	}
}

export const clearCart = (cart) => {
	return {
		type:"CLEAR_CART",
		cart
	}
}