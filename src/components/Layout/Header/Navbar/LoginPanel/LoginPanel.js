import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from '@Utils';

export const LoginPanel = () => {
	return (
		<div>
			<Link to={routes.LOGIN}> 
				<Typography variant='navbar'>
					Войти
				</Typography>
			</Link>
			<Typography variant='navbar'>
				{` / `}
			</Typography>
			<Link to={routes.REGISTRATION}> 
				<Typography variant='navbar'>
					Зарегистрироваться 
				</Typography>
			</Link>
		</div>
	);
};
