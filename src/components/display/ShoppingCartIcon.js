import React from 'react';
import { connect } from 'react-redux';
import { NavLink }  from 'react-router-dom';

//Cart
import FaCartPlus from 'react-icons/lib/fa/cart-plus';


const ShoppingCartIcon = (props) => 
	<NavLink to="/checkout" activeClassName="is-active" className="cartIcon">
		<FaCartPlus 
			size={80}
			color=""/> 
		<span className="cartIcon__amount">{props.cart.length}</span>
	</NavLink>

const mapStateToProps = (state) => {
	return {
		cart: state.cart
	}
}
export default connect(mapStateToProps)(ShoppingCartIcon);