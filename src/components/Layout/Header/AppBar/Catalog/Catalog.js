import { colors } from '@Utils';
import {  Typography } from '@mui/material';
import { StyledButton, Container } from '@BaseComponents';
import GridViewIcon from '@mui/icons-material/GridView';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { CatalogList } from './CatalogList';
import { ApiService } from '@/services/apiService';


const CatalogDropDownListBase = styled.div`
	position: absolute;
	top: 145px;
	left: 50%;
	margin-left: -50vw;
	width: 100vw;
    z-index: 1000;
	
	${props => !props.show && `
		display: none;
	`} 
`

export const Catalog = () => {
	const [show, setShow] = useState(false);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		ApiService.getCategories()
			.then(data => setCategories(data))
	}, []);

	const hideCatalog = () => {
		setShow(false);
		window.removeEventListener('click', hideCatalog, false);
	};

	useEffect(() => {
		if(show) {
			window.addEventListener('click', hideCatalog, false);
		}
	}, [show])

	const toggleShow = (e) => {
		e.stopPropagation();
		show ? hideCatalog() : setShow(true);
	};

	return(
		<div>
			<StyledButton color='primary' variant='contained' onClick={toggleShow}>
				<GridViewIcon sx={{fill: colors.light}}/>
				<Typography variant='btn'>
					Каталог
				</Typography>
			</StyledButton>

			<CatalogDropDownListBase show={show}>
				<CatalogList categories={categories}/>
			</CatalogDropDownListBase>
		</div>
	)
}