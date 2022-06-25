import {  Container } from '@BaseComponents';
import { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { CatalogListItem } from './CatalogListItem';

const CatalogListBase = styled.ul`
	display: flex;
	flex-direction: column;
	width: 405px;
	background-color: #F8F8FF;
	padding: 20px 10px 40px 0; 
`

const CatalogListContainer = styled(Container)`
	display: flex;
`

const CatalogListWrapper = styled.div`
	display: flex;
	margin-left: 60px;
	box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`

export const CatalogList = ({categories}) => {
	const [active, setActive] = useState(0);

	return(
		<CatalogListContainer>
			<CatalogListWrapper>
				<CatalogListBase>
					{ categories.map((item, i) => (
						<Link to={`/catalog/${item.category}`}>
							<CatalogListItem {...item} active={i === active} onMouseEnter={() => setActive(i)}/>
						</Link>
					))}
				</CatalogListBase>

				<CatalogListBase>
					{ categories[active].subcategories.map(item => (
						<Link to={`/catalog/${categories[active].category}/${item.category}`}>
							<CatalogListItem {...item} />
						</Link>
					))}
				</CatalogListBase>
			</CatalogListWrapper>
		</CatalogListContainer>
	)
}