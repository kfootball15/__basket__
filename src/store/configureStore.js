import { createStore } from 'redux';
import uuid from 'uuid';

//Reducers
const defaultShoppingCartState = {
	products:[],
	cart:[]
};
const shoppingCart = (state=defaultShoppingCartState, action) => {
	switch(action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				products: state.products.map((product)=>{
					if(product.id === action.product.id) {
						return {
							...product,
							inCart: action.product.inCart
						}
					}
					else return product;
				}),
				cart: [...state.cart, action.product]
			}
			break;
		case 'REMOVE_FROM_CART':
			return {
				...state,
				products: state.products.map((product)=>{
					if(product.id === action.id) {
						return {
							...product,
							inCart: action.inCart
						}
					}
					else return product;
				}), 
				cart: state.cart.filter( product => product.id !== action.id )
			}
			break;
		case 'CLEAR_CART':
			return {
				...state,
				products: state.products.map((product)=>{
					return {
						...product,
						inCart: false
					}
				}),
				cart: []
			}
			break;
		case 'SET_PRODUCT_DATA':
			return {
				...state,
				products: [...state.products, ...action.products]
			}
			break;
		case 'UPDATE_PRODUCT_STORE':
			return {
				...state,
				products: state.products.map((product)=>{
					if(product.id === action.product.id){
						return {...product, qty: action.product.qty}
					} 
					else return product;
				}),
				cart: state.cart.map((product)=>{
					if(product.id === action.product.id){
						return {...product, qty: action.product.qty}
					} 
					else return product;
				})
			}
			break;
		default:
			return state;
	}
}

//Create Store
export default () => {
	const store = createStore(
		shoppingCart
	);

	return store;
}
