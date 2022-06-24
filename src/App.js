import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, RegistrationPage, CartPage } from '@/pages';

import { routes } from '@Utils';
import { Layout } from '@Components';

const App = () => {
  return (
    <Routes>
		<Route path={routes.HOME} element={<HomePage/>}  exact/>
		<Route path={routes.LOGIN} element={<LoginPage/>} exact/> 
		<Route path={routes.REGISTRATION} element={<RegistrationPage/>} exact/>
		<Route path={routes.CART} element={<CartPage/>} exact/>
		<Route path={routes.ANY} element={
			<Layout>
				Page Not Found
			</Layout>
		}/>
	</Routes>
  );
}


export default App;
