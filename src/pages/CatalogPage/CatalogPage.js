import { Card }  from '@Components';

import { Container, Section, SectionTitle, Flex } from '@BaseComponents';

import styled from '@emotion/styled';
import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import { colors } from '../../utils';
import { scrollToTop } from '../../helpers/scripts';
import { Filter } from './Filter';

import data from './db.json';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const content = [];

for(let i = 0; i < 46; i++) {
	content.push(<Card/>);
}


const GalleryBase = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-area: gallery;
`


const Gallery = (props) => {
	const { content, step, page } = props;

	return(
		<GalleryBase>
			{ content.slice((page - 1)* step, page * step) }
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
		"filter sort"
		"filter gallery";
	column-gap: 40px;
	row-gap: 10px;
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
			boundaryCount={3}
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










export const CatalogPage = () => {

	const [page, setPage] = useState(1);
	const step = 15;
	const handleChange = (event, value) => {
		setPage(value);
	};

	// useEffect(() => {
	// 	scrollToTop();
	// }, [page]);


	return(
		<Container>
			<Section>
				<SectionTitle>
					Каталог
				</SectionTitle>

				<CatalogPageLayout>
					<Filter filters={data.filters}/>
					<Sort/>
					<Gallery content={content} page={page} step={15}/>
				</CatalogPageLayout>
				

				<Flex mt='20px'>
					<StyledPagination 
						count={Math.ceil(content.length / step)} 
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