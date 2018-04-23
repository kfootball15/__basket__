import React from 'react';
import { NavLink }  from 'react-router-dom';
//Icons
import ShoppingCartIcon from './ShoppingCartIcon'

const Header = (props) => (
	<header>
		<NavLink to="/" exact={true}> 
			<h1> __BASKET__ </h1> 
		</NavLink>
		<ShoppingCartIcon />
	</header>
)

export default Header;