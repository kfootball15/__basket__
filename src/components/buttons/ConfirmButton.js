import React from 'react';
import { Link } from 'react-router-dom';
//Icons
import FaCartPlus from 'react-icons/lib/fa/cart-plus';


const ConfirmButton = () => 
	//To Confirmation Page
	<Link 
		to="/confirmation" 
		className="btn btn__checkout"
		> 
		<FaCartPlus size={25}/> Confirm 
	</Link>

export default ConfirmButton;