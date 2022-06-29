import { Card }  from '@Components';

import { Container, Section, SectionTitle, Flex } from '@BaseComponents';

import styled from '@emotion/styled';
import { Pagination } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { colors } from '../../utils';
import { scrollToTop } from '../../helpers/scripts';
import { Filter } from './Filter';

import data from './db.json';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {  Category } from './Category';
import { nanoid } from 'nanoid';
import { useParams } from 'react-router';

import { ApiService } from '../../services/apiService';

const content = [];






const GalleryBase = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-area: gallery;
`


const Gallery = (props) => {
	const { content, step, page } = props;

	return(
		<GalleryBase>
			{content}
			{/* { content.slice((page - 1)* step, page * step) } */}
		</GalleryBase>
	)
}

const StyledPagination = styled(Pagination)`
	button, div {
		font-weight: 700;
		font-size: 23px;
		color: ${colors.pagination}
	}

	svg {
		height: 40px;
		width: auto;
	}
`

const CatalogPageLayout = styled.div`
	display: grid;
	grid-template-columns: 265px 1fr;
	grid-template-rows: 40px 1fr;
	grid-template-areas: 
		"side sort"
		"side gallery";
	column-gap: 40px;
	row-gap: 10px;
`

const SideContainer = styled.div`
	grid-area: side;
`

const StyledToggleButton = styled(ToggleButton)`
	border: none;
	background: none;
	padding: 10px 22px;
	&.Mui-selected {
		background: none;
	}
`

const Sort = () => {
	const [alignment, setAlignment] = useState('popular');

	const handleChange1 = (event, newAlignment) => {
		setAlignment(newAlignment);
	};

	return(
		<ToggleButtonGroup
			color='error'
			sx={{gridArea: 'sort', borderBottom: 'solid 1px black', borderRadius: 0, justifyContent: 'flex-end'}}
			// boundaryCount={3}
			value={alignment}
			exclusive
			onChange={handleChange1}
			>
			<StyledToggleButton value="popular">По популярности</StyledToggleButton>
			<StyledToggleButton value="new">Новинки</StyledToggleButton>
			<StyledToggleButton value="cheap">Сначала дешевые</StyledToggleButton>
			<StyledToggleButton value="expensive">Сначала дорогие</StyledToggleButton>
			<StyledToggleButton value="sale">По размеру скидки</StyledToggleButton>
			<StyledToggleButton value="rating">Высокий рейтинг</StyledToggleButton>
		</ToggleButtonGroup>
	);
};


export const CategoryPage = () => {
	const [cards, setCards] = useState([]);
	
	const [page, setPage] = useState(1);
	const step = 15;

	const handleChange = (event, value) => {
		setPage(value);
	};

	useEffect(() => {
		ApiService.getCards()
			.then(cardsData => setCards(() => 
				cardsData.map(item => (
					<Card data={item}/>
				))
			))
	}, [])


	useEffect(() => {
		scrollToTop();
	}, [page]);

	let { category } = useParams();

	return(
		<Container>
			<Section>
				<SectionTitle>
					{category}
				</SectionTitle>

				<CatalogPageLayout>
					<SideContainer>
						<Category categories={data.categories}/>
						<Filter filters={data.filters}/>
					</SideContainer>
					
					<Sort/>
					<Gallery content={cards} page={page} step={15}/>
				</CatalogPageLayout>
				
				<Flex mt='20px'>
					<StyledPagination 
						count={Math.ceil(cards.length / step)} 
						size="large" 
						color='primary'
						boundaryCount={2}
						siblingCount={1}
						page={page} onChange={handleChange}
					/>
				</Flex>
			</Section>
		</Container>
	);
};