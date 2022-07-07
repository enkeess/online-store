import styled from '@emotion/styled';
import { colors } from '@Utils'
import { Contacts } from '@Components';
import { Container } from '@BaseComponents';
import { LoginPanel } from './LoginPanel';
import { NavLinks } from './NavLinks';
import {useAuth} from '@/hooks';
import { useDispatch } from 'react-redux';
import { removeUser } from '@/redux/user/userSlice';
import { Button } from '@mui/material';


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
	const {isAuth, name} = useAuth();
	const dispatch = useDispatch();
	return(
		<NavbarBase>
			<NavbarContainer>
				<NavLinks/>
				<Contacts cgap='15px'/>
				{
					isAuth ? (
						<div>
							Привет, {name}
							<Button sx={{marginLeft: 1}} onClick={() => dispatch(removeUser())}> Выйти</Button>
						</div>
					) : (
						<LoginPanel/>
					)
				}
				
			</NavbarContainer>
		</NavbarBase>
	);
};
