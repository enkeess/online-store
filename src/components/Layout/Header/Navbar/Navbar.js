import styled from '@emotion/styled';
import { colors } from '@Utils'
import { Contacts } from '@Components';
import { Container } from '@BaseComponents';
import { LoginPanel } from './LoginPanel';
import { NavLinks } from './NavLinks';

const NavbarBase = styled.div`
	background-color: ${colors.navbar};
	color: ${colors.textNavbar};
`

const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
`

export const Navbar = () => {
	return(
		<NavbarBase>
			<NavbarContainer>
				<NavLinks/>
				<Contacts cgap='15px'/>
				<LoginPanel/>
			</NavbarContainer>
		</NavbarBase>
	);
};
