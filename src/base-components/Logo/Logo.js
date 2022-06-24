import styled from '@emotion/styled'
import logoLight from '../../img/logo.png';
import logoDark from '../../img/logo-footer.png';
import { Link } from 'react-router-dom';

const LogoBase = styled.div`
	width: 139px;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Logo = (props) => {
	const { variant = 'light'} = props;
	let logo = variant === 'dark' ? logoDark : logoLight;

	return(
		<LogoBase>
			<Link to='/'>
				<img src={logo} alt={'alt'}/>
			</Link>
		</LogoBase>
	);
};

