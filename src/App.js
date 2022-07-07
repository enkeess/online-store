import React from 'react';

import { Route, Routes,  Navigate, } from 'react-router-dom';
import { HomePage, LoginPage, RegistrationPage, CartPage, CatalogPage,CategoryPage, TestPage } from '@/pages';

import { routes } from '@Utils';
import { Layout } from '@Components';
import { Container } from '@BaseComponents';

// import {  } from 'react-router-dom';
import { useAuth } from '@/hooks';

const App = () => {
	const {isAuth} = useAuth();
  return (
	<Layout>
		<Routes>
			<Route path={routes.HOME} element={<HomePage/>}  exact/>
			<Route path={routes.LOGIN} element={isAuth ? <Navigate replace to='/'/> : <LoginPage/>} exact/> 
			<Route path={routes.REGISTRATION} element={isAuth ? <Navigate replace to='/'/> : <RegistrationPage/>} exact/>
			<Route path={routes.CART} element={<CartPage/>} exact/>

			<Route path={routes.CATALOG} element={<CatalogPage/>}/>
			<Route path={routes.CATALOG+'/:category'} element={<CategoryPage/>}/>
			<Route path={routes.CATALOG+'/:category/:subcategory'} element={<CategoryPage/>}/>
			
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
