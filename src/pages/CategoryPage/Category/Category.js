import { Typography } from '@mui/material';

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const CategoriesList = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	row-gap: 10px;
	margin-top: 15px;
`;

const CategoriesListItem = ({label, category}) => {
	return(
		<Link to={`/catalog/${category}`} >
			<li>
				<Typography variant='categoryListItem'>
					{label}
				</Typography>
				
			</li>
		</Link>
	)
}



export const Category = ({categories}) => {

	return(
		<div>
			<Typography variant='filter'>Категория</Typography>
			<CategoriesList>
				{categories.map(({label, category, id}) => (
					<CategoriesListItem label={label} category={category} key={id}/>
				))}
			</CategoriesList>
		</div>
	);
}