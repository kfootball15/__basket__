import React from 'react';
import { connect } from 'react-redux';
import FaMinusSquareO from 'react-icons/lib/fa/minus-square-o';
import { removeFromCart } from '../../actions/cart'

const RemoveFromCartButton = (props) => { 
	//If product IS in our cart, show RemoveFromCartButton
	if(props.product.inCart) {
		return (
			<button 
				className="btn btn__cart--remove"
				onClick={(e)=>{
					e.preventDefault();
					props.handleRemoveFromCart(props.product);
				}}>
					<FaMinusSquareO /> Remove
			</button>
		)
	} else {
		return null;
	}
};

export default connect()(RemoveFromCartButton);