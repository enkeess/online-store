import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from '@Utils';
const MenuBase = styled.ul`
	display: flex;
	align-items: center;
	column-gap: 29px;
	width: 400px;
	& > li {
		font-size: 18px;
		line-height: 21px;
		color: #6C6C6C;
	}
`

export const Menu = () => {
	return(
		<MenuBase>
			<li>
				<Link to={routes.GIFT_CONSTRUCTOR}>
					<Typography variant='menu'>
						Конструктор подарка
					</Typography>
				</Link>
			</li>

			<li>
				<Link to={routes.ARTICLES}>
					<Typography variant='menu'>
						Статьи
					</Typography>
				</Link>
			</li>
		</MenuBase>
	);
};