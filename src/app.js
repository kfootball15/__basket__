import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';

//Actions
import { setProductData } from './actions/cart.js'


//Init Store:
const store = configureStore();
store.subscribe(()=>{
	//Logging updates to the store if you want to take a peak
	console.log('Store State', store.getState())
})

//Init Data:
fetch('../mock/products.json')
.then(results => results.json())
.then((productData)=>{

	//Set Data to store:
	store.dispatch(setProductData({ products: productData.products }))
	
	//Render DOM:
	ReactDOM.render(
		<Provider store={store}>
			<AppRouter />
		</Provider>
	, document.getElementById('app'));
})

