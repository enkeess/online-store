import styled from '@emotion/styled';


import { Container } from '@BaseComponents';


import { Navbar } from './Navbar';

import { AppBar } from './AppBar';

const HeaderBase = styled.header`
	display: grid;
	grid-template-rows: 45px 95px;
	height: 140px;
	z-index: 100;
	position: relative;
`

export const Header = (props) => {
	return (
		<HeaderBase>
			<Navbar/>
			<AppBar/>
		</HeaderBase>
	);
};



