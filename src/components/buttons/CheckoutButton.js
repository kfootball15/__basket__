import React from 'react';
import { Link } from 'react-router-dom';
//Icons
import FaCartPlus from 'react-icons/lib/fa/cart-plus';


const CheckoutButton = () => 
	
	<Link 
		to="/checkout" 
		className="btn checkout right"
		> 
		<FaCartPlus size={25}/> Proceed to Checkout 
	</Link>

export default CheckoutButton;