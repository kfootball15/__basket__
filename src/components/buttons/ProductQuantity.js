import React from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../../actions/cart';

const ProductQuantity = (props) => (
	//Edit Product Quantity
	<div className="product__qty">
			<select 
				value={props.product.qty}
				className="qty__select"
				onChange={(e)=>{
					e.preventDefault();
					props.handleUpdateQuantity({...props.product, qty: e.target.value});
				}}>

				<option value="1"> 1 </option>
				<option value="2"> 2 </option>
				<option value="3"> 3 </option>
				<option value="4"> 4 </option>
				<option value="5"> 5 </option>
				<option value="6"> 6 </option>
				<option value="7"> 7 </option>
				<option value="8"> 8 </option>
				<option value="9"> 9 </option>

			</select>
	</div>
)
export default connect()(ProductQuantity);