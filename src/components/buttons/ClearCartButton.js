import React from 'react';
import { connect } from 'react-redux';
import CheckoutButton from './CheckoutButton';
import { clearCart } from '../../actions/cart';

const ClearCartButton = (props) => (
		//Clears state.cart array
		<button 
			className="btn btn__clear" 
			onClick={()=>{
				props.dispatch(clearCart(props.cart));
			}}>
			Clear Basket
		</button>
)

const mapStateToProps = (state) => {
	return {
		cart: state.cart
	}
} 
export default connect(mapStateToProps)(ClearCartButton)