import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, RegistrationPage, CartPage, CatalogPage, TestPage } from '@/pages';

import { routes } from '@Utils';
import { Layout } from '@Components';
import { Container } from '@BaseComponents';



const App = () => {
  return (
	<Layout>
		<Routes>
			<Route path={routes.HOME} element={<HomePage/>}  exact/>
			<Route path={routes.LOGIN} element={<LoginPage/>} exact/> 
			<Route path={routes.REGISTRATION} element={<RegistrationPage/>} exact/>
			<Route path={routes.CART} element={<CartPage/>} exact/>
			<Route path={routes.CATALOG} element={<CatalogPage/>}/>
			
			
			<Route path='/test' element={<TestPage/>}/>
			
			
			<Route path={routes.ANY} element={
				<Container>
					Page Not Found
				</Container>
			}/>
		</Routes>
	</Layout>
  );
}


export default App;
