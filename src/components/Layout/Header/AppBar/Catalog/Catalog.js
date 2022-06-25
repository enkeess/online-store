import { colors } from '@Utils';
import {  Typography } from '@mui/material';
import { StyledButton, Container } from '@BaseComponents';
import GridViewIcon from '@mui/icons-material/GridView';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';



import data from './db.json';


import { CatalogList } from './CatalogList';


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

// const CatalogListBase = styled.ul`
// 	display: flex;
// 	flex-direction: column;
// 	width: 405px;
// 	background-color: #F8F8FF;
// 	padding: 20px 10px 40px 0; 
// `

// const CatalogListItemBase = styled.li`
// 	display: grid;
// 	grid-template-columns: [startIcon] 40px [text] 1fr [endIcon] 40px;
// 	gap: 10px;

// 	align-items: center;
	
// 	padding: 10px 30px;

// 	height: 55px;

// 	${props => props.active && `
// 		background-color: #F0F0F0;
// 	`}

// 	&:hover {
// 		background-color: #F0F0F0;
// 	}
// `

// const CatalogListItemText = styled.div`
// 	grid-column: text;
// `

// const CatalogListItemBaseIcon = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	${props => props.icon === 'start' && `
// 		grid-column: startIcon;
// 	`}
// 	${props => props.icon === 'end' && `
// 		grid-column: endIcon;
// 	`}
// `

// const BaseIcon = styled.div`
// 	height: 35px;
// 	width: 35px;
// 	border-radius: 100%;
// 	background-color: #E3DFFF;
// `

// const CatalogListItem = (props) => {
// 	const { name, category, subcategories, icon, active, ...rest } = props;
// 	return(
// 		<CatalogListItemBase active={active} {...rest}>
// 			{icon === "" && <CatalogListItemBaseIcon icon='start'>
// 				<BaseIcon/>	
// 			</CatalogListItemBaseIcon>}

// 			<CatalogListItemText>
// 				{name}
// 			</CatalogListItemText>
			
// 			{subcategories.length > 0 && <CatalogListItemBaseIcon icon='end'>
// 				<ArrowForwardIosIcon/>
// 			</CatalogListItemBaseIcon>}
// 		</CatalogListItemBase>
// 	)
// }

// const CatalogListContainer = styled(Container)`
// 	display: flex;
// `

// const CatalogListWrapper = styled.div`
// 	display: flex;
// 	margin-left: 60px;
// 	box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
// `

// const CatalogList = ({categories}) => {
// 	const [active, setActive] = useState(0);

// 	return(
// 		<CatalogListContainer>
// 			<CatalogListWrapper>
// 				<CatalogListBase>
// 					{ categories.map((item, i) => (
// 						<Link to={`/catalog/${item.category}`}>
// 							<CatalogListItem {...item} active={i === active} onMouseEnter={() => setActive(i)}/>
// 						</Link>
// 					))}
// 				</CatalogListBase>

// 				<CatalogListBase>
// 					{ categories[active].subcategories.map(item => (
// 						<Link to={`/catalog/${categories[active].category}/${item.category}`}>
// 							<CatalogListItem {...item} />
// 						</Link>
// 					))}
// 				</CatalogListBase>
// 			</CatalogListWrapper>
// 		</CatalogListContainer>
// 	)
// }


export const Catalog = () => {
	const [show, setShow] = useState(false);
	
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
				<CatalogList categories={data.categories}/>
			</CatalogDropDownListBase>
		</div>
	)
}