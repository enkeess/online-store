import styled from '@emotion/styled';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArticleIcon from '@mui/icons-material/Article';
import { Typography } from '@mui/material';

const CatalogListItemBase = styled.li`
	display: grid;
	grid-template-columns: [startIcon] 40px [text] 1fr [endIcon] 40px;
	gap: 10px;
	align-items: center;
	padding: 10px 30px;
	height: 55px;
	${props => props.active && `
		background-color: #F0F0F0;
	`}
	&:hover {
		background-color: #F0F0F0;
	}
`

const CatalogListItemText = styled.div`
	grid-column: text;
`

const CatalogListItemBaseIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	${props => props.icon === 'start' && `
		grid-column: startIcon;
	`}
	${props => props.icon === 'end' && `
		grid-column: endIcon;
	`}
`

const BaseIcon = styled.div`
	height: 35px;
	width: 35px;
	border-radius: 100%;
	background-color: #E3DFFF;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const CatalogListItem = (props) => {
	const { label, category, subcategories = [], icon, active, ...rest } = props;
	return(
		<CatalogListItemBase active={active} {...rest}>
			{icon === "" && <CatalogListItemBaseIcon icon='start'>
				<BaseIcon>
					<ArticleIcon color='info'/>
				</BaseIcon>	
			</CatalogListItemBaseIcon>}

			<CatalogListItemText>
				<Typography variant='h3'>
					{label}
				</Typography>
			</CatalogListItemText>
			
			{subcategories.length > 0 && <CatalogListItemBaseIcon icon='end'>
				<ArrowForwardIosIcon color='success'/>
			</CatalogListItemBaseIcon>}
		</CatalogListItemBase>
	)
}