import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import uuid from 'uuid';

const ConfirmationPage = (props) => {
	
	let total = 0;
	props.cart.forEach((product)=>{
		total = total + (parseInt(product.price,10) * parseInt(product.qty,10));
	});
	
	return (
		<div className="page">
			<div className="page__reciept">
				<h1> RECEIPT </h1>
				{props.cart.map((product)=>{
					return (
						<div className="page__receipt__container" key={uuid()}>
							<div className="page__receipt__icon">
								<img src={product.icon} />
							</div>
							<div className="page__receipt__info">
								<p>{product.title}</p>
								<p>Qty: {product.qty}</p>
								<p>Price: ${product.price.toFixed(2)}</p>
								<p>Total: ${(parseInt(product.price,10) * parseInt(product.qty,10)).toFixed(2)}</p>
							</div>
						</div>
					)
				})}
				<p>Total: ${total.toFixed(2)}</p>
				<Link to="/"> Back Home </Link>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		cart: state.cart
	}
}

export default connect(mapStateToProps)(ConfirmationPage);