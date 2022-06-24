import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { routes } from '@Utils';

const links = [{
		pathname: routes.DELIVERY,
		text: 'Доставка'
	}, {
		pathname: routes.PAYMENT,
		text: 'Оплата'
	}, {
		pathname: routes.ABOUT,
		text: 'О нас'
	}, {
		pathname: routes.BRANDS,
		text: 'Бренды'
	}, {
		pathname: routes.GUARANTEES_AND_REFUNDS,
		text: 'Гарантии и возврат'
	}, {
		pathname: routes.CONTACTS,
		text: 'Контакты'
	}, {
		pathname: routes.HELP,
		text: 'Помощь'
	}
];


const NavLinksBase = styled.ul`
	display: flex;
	align-items: center;
	column-gap: 32px;
	justify-content: flex-start;
`

export const NavLinks = () => {
	const navLinks = useMemo(() => {
		return links.map(({pathname, text}) => (
			<li key={pathname} className="link">
				<Link to={pathname}>
					<Typography variant='navbar'>
						{text}
					</Typography>	
				</Link>
			</li>
		))
	}, []);

	return(
		<NavLinksBase>
			{navLinks}
		</NavLinksBase>
	)
}
