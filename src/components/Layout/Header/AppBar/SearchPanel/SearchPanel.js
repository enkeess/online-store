import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { StyledIconButton } from '@BaseComponents';
import { colors } from '@Utils'

const SearchPanelBase = styled.div`
	width: 255px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`
const SearchPanelInput = styled.input`
	border: none;
	outline: none;
	height: 37px;
	padding: 10px 60px 10px 8px;
	width: 255px;

	border-top-right-radius: 18.5px;
	border-bottom-right-radius: 18.5px;

	border-bottom: 1px solid #E9E9E9;

	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
`

const SearchPanelButton = styled(StyledIconButton)`
	height: 37px;
	width: 40px;
	position: absolute;
	top: 0;
	right: 0;
`


export const SearchPanel = () => {
	return(
		<SearchPanelBase>
			<SearchPanelInput placeholder='Поиск'/>
			<SearchPanelButton color='primary' variant='contained'>
				<SearchIcon sx={{fill: colors.light}}/>
			</SearchPanelButton>
		</SearchPanelBase>
	)
}