import styled from '@emotion/styled';
import { Navbar } from './Navbar';
import { AppBar } from './AppBar';

const HeaderBase = styled.header`
	display: grid;
	grid-template-rows: 45px 95px;
`
export const Header = (props) => {
	return (
		<HeaderBase>
			<Navbar/>
			<AppBar/>
		</HeaderBase>
	);
};



