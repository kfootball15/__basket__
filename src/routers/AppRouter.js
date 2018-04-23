import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Header from '../components/display/Header';
import HomePage from '../components/pages/HomePage';
import ConfirmationPage from '../components/pages/ConfirmationPage';
import CheckoutPage from '../components/pages/CheckoutPage';
import NotFoundPage from '../components/pages/NotFoundPage';


//Routes
const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route 
					path="/"
					component={ HomePage }
					exact={true}
					/>
				<Route
					path="/checkout"
					component={ CheckoutPage }
					/>
				<Route 
					path="/confirmation"
					component={ ConfirmationPage }
					/>
				<Route
					component={ NotFoundPage }
					/>
			</Switch>
		</div>
	</BrowserRouter>
)

export default AppRouter;