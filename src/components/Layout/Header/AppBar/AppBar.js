import styled from '@emotion/styled';
import { colors } from '@Utils'

import { Container, IconsBlock, Logo } from '@BaseComponents';

import { Catalog } from './Catalog';
import { Menu } from './Menu';
import { SearchPanel } from './SearchPanel';


const AppBarBase = styled.div`
	height: 100%;
`

const AppBarContainer = styled(Container)`
	display: grid;
	grid-template-columns: 2fr 2fr 4fr 3fr 2fr;
	column-gap: 40px;
	height: 100%;
	align-items: center;
`

export const AppBar = () => {
	return(
		<AppBarBase>
			<AppBarContainer>
				<Logo/>
				<Catalog/>
				<Menu/>
				<SearchPanel/>
				<IconsBlock color='info' textColor={colors.dark}/>
			</AppBarContainer>
		</AppBarBase>
	);
};
