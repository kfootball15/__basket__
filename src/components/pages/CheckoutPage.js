import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import ProductDisplay from '../display/ProductDisplay';
import CartNav from '../display/CartNav';
//Actions
import { addToCart, removeFromCart, clearCart, updateProduct } from '../../actions/cart.js';

class checkoutPage extends Component {
	constructor(props) {
		super(props);

		this.getTotal = this.getTotal.bind(this);
	}
	getTotal(){
		let total = 0;
		this.props.cart.forEach((product)=>{
			total = total + (parseInt(product.price,10) * parseInt(product.qty,10));
		});
		return total.toFixed(2);
	}
	render () {
		return (
			<div className="page">

				<CartNav 
					clearCartButton={true}
					confirmButton={true}/>
				
				{/*PRODUCTS*/}
				{
					this.props.cart.length ?
					this.props.cart.map((product)=>{
						return <ProductDisplay 
											key={product.id} 
											product={product} 
											/>
					})
					: <p className="--empty-cart-warning">There are no Items in your cart. Add them from <Link to="/">here</Link>.</p>
				}

				<div>
					<p className="total">Total: ${this.getTotal()}</p>
					<CartNav 
						clearCartButton={true}
						confirmButton={true}/>
				</div>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		cart: state.cart
	}
}

export default connect(mapStateToProps)(checkoutPage);