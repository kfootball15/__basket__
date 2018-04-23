import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid'
import AddToCartButton from '../buttons/AddToCartButton'
import RemoveFromCartButton from '../buttons/RemoveFromCartButton'
import ProductQuantity from '../buttons/ProductQuantity'
import { addToCart, removeFromCart, updateProduct } from '../../actions/cart';

/*
	Handling Product state here made more sense to me.
	
	The ProductDisplay Component becomes re-usable when it is not bound to its
		display page state. It can now be placed on any page that may want to 
		pass it a product
*/
class ProductDisplay extends Component {
	constructor(props){
		super(props);

		this.handleUpdateQuantity = this.handleUpdateQuantity.bind(this);
		this.handleAddToCart = this.handleAddToCart.bind(this);
		this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
	}
	handleUpdateQuantity(product) {
		this.props.dispatch(updateProduct(product))
	}
	handleAddToCart(product) {
		this.props.dispatch(addToCart({...product})) //send a copy of the proudct to the cart
	}
	handleRemoveFromCart(product) {
		this.props.dispatch(removeFromCart({id:product.id, inCart:product.inCart}))
	}
	render(){
		return (
			<div className={ `product ${this.props.product.inCart ? 'product--inCart' : ''}`}>
					
				{/*PRODUCT IMAGE*/}
				<img src={this.props.product.icon} />

				{/*PRODUCT INFO*/}
				<div className="product__info">
					<h1> {this.props.product.title} </h1>
					<h2> ${this.props.product.price.toFixed(2)} </h2>
				</div>


				{/*EDIT PRODUCT BUTTONS*/}
				<div className="product__cart">
					
					{/*ADD TO CART*/}
					<AddToCartButton 
						product={this.props.product}
						handleAddToCart={this.handleAddToCart}
						/>

					{/*REMOVE FROM CART*/}
					<RemoveFromCartButton 
						product={this.props.product}
						handleRemoveFromCart={this.handleRemoveFromCart}
						/>

					{/*UPDATE QUANTITY*/}
					<ProductQuantity 
						product={this.props.product}
						handleUpdateQuantity={ this.handleUpdateQuantity }
						/>
				</div>
			</div>
		)
	}
}

export default connect()(ProductDisplay);