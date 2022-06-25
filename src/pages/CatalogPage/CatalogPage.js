import { Card }  from '@Components';

import { Container, Section, SectionTitle, Flex } from '@BaseComponents';

import styled from '@emotion/styled';
import { Pagination, PaginationItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { colors } from '../../utils';
import { scrollToTop } from '../../helpers/scripts';



const content = [];

for(let i = 0; i < 46; i++) {
	content.push(<Card/>);
}


const GalleryBase = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`


const Gallery = (props) => {
	const { content, step, page } = props;

	return(
		<GalleryBase>
			
			{ content.slice((page - 1)* step, page * step) }
			<div>
				Page: {page}
			</div>
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


export const CatalogPage = () => {

	const [page, setPage] = useState(1);
	const step = 15;
	const handleChange = (event, value) => {
		setPage(value);
	};

	useEffect(() => {
		scrollToTop();
	}, [page]);
	
	return(
		<Container>
			<Section>
				<SectionTitle>
					Каталог
				</SectionTitle>

				<Gallery content={content} page={page} step={15}/>

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