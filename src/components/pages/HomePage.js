import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import ProductDisplay from '../display/ProductDisplay';
import CartNav from '../display/CartNav';
//Actions
import { addToCart, removeFromCart, clearCart, updateProduct } from '../../actions/cart.js';

class HomePage extends Component {
	constructor(props) {
		super(props);

	}

	render () {
		return (
			<div className="page">

				<CartNav 
					clearCartButton={true}
					checkoutButton={true}/>

				{/*PRODUCTS*/}
				<div>
					{
						this.props.products.map( (product) => {
							return <ProductDisplay 
										key={uuid()} 
										product={ product }
										/>
						})
					}
				</div>

				<CartNav 
					clearCartButton={true}
					checkoutButton={true}/>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.products,
		cart: state.cart
	}
}

export default connect(mapStateToProps)(HomePage); 