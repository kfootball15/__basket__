import React from 'react';
import { connect } from 'react-redux';
import FaPlusSquareO from 'react-icons/lib/fa/plus-square-o';


const AddToCartButton = (props) => { 
	//If Product is NOT in our cart, show this button
	if(!props.product.inCart) {
		return(
			<button 
				className="btn btn__cart--add"
				onClick={(e)=>{
					e.preventDefault();
					props.handleAddToCart({...props.product});
				}}>
					<FaPlusSquareO /> Add To Cart
			</button>
		)
	} else {
		return null;
	}
}

export default connect()(AddToCartButton);