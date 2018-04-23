import React from 'react';
import { connect } from 'react-redux';
import ClearCartButton from '../buttons/ClearCartButton';
import CheckoutButton from '../buttons/CheckoutButton';
import ConfirmButton from '../buttons/ConfirmButton';
import { clearCart } from '../../actions/cart';

const CartNav = (props) => (
	<div className="page__nav">
		{/*ClEAR BASKET BUTTON*/}
		{props.clearCartButton && <ClearCartButton />}
		{/*CHECKOUT BUTTON*/}
		{props.checkoutButton && <CheckoutButton />}		
		{/*CONFIRM BUTTON*/}
		{props.confirmButton && <ConfirmButton />}
	</div>
);

export default CartNav;